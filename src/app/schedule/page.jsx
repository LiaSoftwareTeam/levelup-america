"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import "../styles/ui.css";
import Footer from "@/components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { addDoc } from "firebase/firestore";

export default function Schedule() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    coachId: "",
    fecha: "",
    modalidad: "virtual",
    // Campos no editables por el usuario
    acceptada: false,
    view: false
  });

  const [coaches, setCoaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  // Cargar coaches desde Firebase
  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const coachesCollection = collection(db, 'coaches');
        const coachesSnapshot = await getDocs(coachesCollection);
        const coachesList = coachesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCoaches(coachesList);
      } catch (err) {
        console.error('Error al obtener coaches:', err);
        setError('Error al cargar los coaches disponibles');
      } finally {
        setLoading(false);
      }
    };

    fetchCoaches();
  }, []);

  // Calcular la fecha mínima (24 horas después de ahora)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const modalities = ["virtual", "presencial"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Obtener el nombre del coach seleccionado
      const selectedCoach = coaches.find(coach => coach.id === formData.coachId);
      if (!selectedCoach) {
        setError('Por favor selecciona un coach válido');
        setSubmitting(false);
        return;
      }

      // Crear la solicitud en la colección "mentorshipRequests"
      const requestData = {
        ...formData,
        coachNombre: selectedCoach.nombre,
        fechaSolicitud: new Date().toISOString(),
        acceptada: false,
        view: false
      };

      await addDoc(collection(db, 'mentorshipRequests'), requestData);
      setSubmitted(true);
    } catch (err) {
      console.error('Error al enviar solicitud:', err);
      setError('Error al procesar la solicitud');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="hero schedule">
        <div className="hero-content">
          <h1>Schedule Your Coaching Session</h1>
          <p>
            Take the first step toward your transformation and unlock your full
            potential. Our personalized coaching will guide you with clarity,
            confidence, and purpose—start your journey today.
          </p> 
        </div>
      </div>

      <div className="form-container">
        {submitted ? (
          <div className="success-message">
            <h2>¡Solicitud Enviada!</h2>
            <p>Gracias por solicitar una sesión de mentoría. Te contactaremos pronto para confirmar los detalles.</p>
            <button onClick={() => setSubmitted(false)} className="volver-button">Solicitar otra sesión</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="schedule-form">
            {loading ? (
              <div className="loading-message">
                <p>Cargando coaches disponibles...</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="coachId">Available Coaches*</label>
                  <select
                    id="coachId"
                    name="coachId"
                    value={formData.coachId}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a coach</option>
                    {coaches.map((coach) => (
                      <option key={coach.id} value={coach.id}>
                        {coach.nombre} - {coach.carrera}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="fecha">Date*</label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    min={getMinDate()}
                    required
                  />
                  <small className="date-info">La fecha debe ser al menos 24 horas después de hoy</small>
                </div>

                <div className="form-group">
                  <label>Modality*</label>
                  <div className="radio-group">
                    {modalities.map((mode) => (
                      <div key={mode} className="radio-option">
                        <input
                          type="radio"
                          id={mode}
                          name="modalidad"
                          value={mode}
                          checked={formData.modalidad === mode}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor={mode}>{mode === "virtual" ? "Virtual" : "Presencial"}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="nombre">Full Name*</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="correo">Email*</label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                {error && (
                  <div className="error-message">
                    <p>{error}</p>
                  </div>
                )}

                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? "Processing..." : "Schedule Session"}
                </button>
              </>
            )}
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}

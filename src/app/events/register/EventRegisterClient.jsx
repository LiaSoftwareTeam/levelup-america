"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { doc, getDoc, updateDoc, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import "../events.css";

export default function EventRegisterClient() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("id");

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    edad: ""
  });

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (!eventId) {
          setError('ID de evento no proporcionado');
          setLoading(false);
          return;
        }

        const eventDoc = await getDoc(doc(db, 'mentorshipEvents', eventId));
        if (!eventDoc.exists()) {
          setError('Evento no encontrado');
          setLoading(false);
          return;
        }

        const eventData = { id: eventDoc.id, ...eventDoc.data() };
        setEvent(eventData);
      } catch (err) {
        console.error('Error al obtener el evento:', err);
        setError('Error al cargar el evento');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Verificar si el evento está lleno
      if (event.limite > 0 && event.registrados >= event.limite) {
        setError('Este evento ya está lleno');
        setSubmitting(false);
        return;
      }

      // Verificar si ya existe un registro con el mismo email para este evento
      const { email } = formData;
      const registrosRef = collection(db, 'registros');
      const q = await getDocs(
        query(registrosRef, 
          where("eventId", "==", eventId),
          where("email", "==", email)
        )
      );

      if (!q.empty) {
        setError('Ya existe un registro con este correo electrónico para este evento');
        setSubmitting(false);
        return;
      }

      // Crear el registro en la colección "registros"
      const registroData = {
        ...formData,
        eventId: eventId,
        eventoTitulo: event.titulo,
        eventoTipo: event.tipo,
        fechaRegistro: new Date().toISOString(),
        edad: parseInt(formData.edad, 10) || 0
      };

      await addDoc(collection(db, 'registros'), registroData);

      // Actualizar el contador de registrados en el evento
      const eventRef = doc(db, 'mentorshipEvents', eventId);
      await updateDoc(eventRef, {
        registrados: (event.registrados || 0) + 1
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Error al registrar:', err);
      setError('Error al procesar el registro');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="register-title">
        <h1>Cargando evento...</h1>
        <p>Por favor espera mientras obtenemos la información del evento.</p>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="register-title">
        <h1>Evento no encontrado</h1>
        <p>{error || "El evento que buscas no existe o ha sido eliminado."}</p>
        <Link href="/events" className="volver-button">Volver a Eventos</Link>
      </div>
    );
  }

  // Determinar si el evento está lleno
  const isEventFull = event.limite > 0 && event.registrados >= event.limite;

  return (
    <div className="register-container">
      {submitted ? (
        <div>
          <div className="register-title">
            <h1>¡Registro Exitoso!</h1>
          </div>
          <div className="success-message">
            <p>Gracias por registrarte en <strong>{event.titulo}</strong>. Te hemos enviado un correo con los detalles del evento.</p>
            <Link href="/events" className="volver-button">Volver a Eventos</Link>
          </div>
        </div>
      ) : (
        <>
          <div className="register-title">
            <h1>Registro para {event.titulo}</h1>
            <p>Completa el formulario para asegurar tu lugar en este evento el {event.fecha}</p>
            {isEventFull && (
              <div className="event-full-warning">
                <p><strong>¡Atención!</strong> Este evento ha alcanzado su capacidad máxima. No se aceptan más registros.</p>
              </div>
            )}
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre*</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={formData.nombre}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="apellido">Apellido*</label>
              <input 
                type="text" 
                id="apellido" 
                name="apellido" 
                value={formData.apellido}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico*</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="telefono">Teléfono*</label>
              <input 
                type="tel" 
                id="telefono" 
                name="telefono" 
                value={formData.telefono}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="edad">Edad</label>
              <input 
                type="number" 
                id="edad" 
                name="edad" 
                value={formData.edad}
                onChange={handleChange}
                min="1"
                max="120"
              />
            </div>
            
            <div className="form-actions">
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={submitting || isEventFull}
              >
                {submitting ? "Procesando..." : "Completar Registro"}
              </button>
              
              <Link href="/events" className="cancel-btn">
                Cancelar
              </Link>
            </div>
            
            {error && (
              <div className="error-message">
                <p>{error}</p>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
}

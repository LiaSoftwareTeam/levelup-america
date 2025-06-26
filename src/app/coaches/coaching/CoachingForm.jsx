'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './coaching.css';

export default function CoachingForm({ coachId }) {
  const router = useRouter();
  
  const [coach, setCoach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    modalidad: 'virtual', // Valor por defecto
    fecha: '',
    // Estos campos no son editables por el usuario
    acceptada: false,
    view: false,
    coachId: coachId
  });

  // Calcular la fecha mínima (24 horas después de ahora)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  useEffect(() => {
    const fetchCoach = async () => {
      try {
        if (!coachId) {
          setError('ID de coach no proporcionado');
          setLoading(false);
          return;
        }

        const coachDoc = await getDoc(doc(db, 'coaches', coachId));
        if (!coachDoc.exists()) {
          setError('Coach no encontrado');
          setLoading(false);
          return;
        }

        const coachData = { id: coachDoc.id, ...coachDoc.data() };
        setCoach(coachData);
        // Actualizar el coachId en formData
        setFormData(prev => ({ ...prev, coachId: coachData.id }));
      } catch (err) {
        console.error('Error al obtener el coach:', err);
        setError('Error al cargar la información del coach');
      } finally {
        setLoading(false);
      }
    };

    fetchCoach();
  }, [coachId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Crear la solicitud en la colección "mentorshipRequests"
      const requestData = {
        ...formData,
        coachNombre: coach.nombre,
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

  if (loading) {
    return (
      <div className="coaching-container">
        <div className="coaching-title">
          <h1>Cargando información...</h1>
          <p>Por favor espera mientras obtenemos la información del coach.</p>
        </div>
      </div>
    );
  }

  if (error || !coach) {
    return (
      <div className="coaching-container">
        <div className="coaching-title">
          <h1>Coach no encontrado</h1>
          <p>{error || "El coach que buscas no existe o ha sido eliminado."}</p>
          <Link href="/coaches/team" className="volver-button">Volver a Coaches</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="coaching-container">
      {submitted ? (
        <div>
          <div className="coaching-title">
            <h1>¡Solicitud Enviada!</h1>
          </div>
          <div className="success-message">
            <p>Gracias por solicitar una sesión de mentoría con <strong>{coach.nombre}</strong>. Te contactaremos pronto para confirmar los detalles.</p>
            <Link href="/coaches/team" className="volver-button">Volver a Coaches</Link>
          </div>
        </div>
      ) : (
        <>
          <div className="coaching-title">
            <h1>Estás solicitando una mentoría con {coach.nombre}</h1>
            <p>Completa el formulario para solicitar una sesión de mentoría personalizada</p>
          </div>

          <form className="coaching-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo*</label>
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
              <label htmlFor="correo">Correo Electrónico*</label>
              <input 
                type="email" 
                id="correo" 
                name="correo" 
                value={formData.correo}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="modalidad">Modalidad*</label>
              <select
                id="modalidad"
                name="modalidad"
                value={formData.modalidad}
                onChange={handleChange}
                required
              >
                <option value="virtual">Virtual</option>
                <option value="presencial">Presencial</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="fecha">Fecha propuesta*</label>
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
            
            <div className="form-actions">
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={submitting}
              >
                {submitting ? "Procesando..." : "Enviar Solicitud"}
              </button>
              
              <Link href={`/coaches/team/${coachId}`} className="cancel-btn">
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
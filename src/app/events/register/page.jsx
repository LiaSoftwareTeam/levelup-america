"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../events.css";

// Componente que usa useSearchParams
function EventRegisterContent() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("id");
  
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    ocupacion: "",
    comentarios: ""
  });
  
  const [eventInfo, setEventInfo] = useState({
    title: "",
    date: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    // En un entorno real, aquí se haría una llamada a la API para obtener los detalles del evento
    // Por ahora, usamos datos estáticos basados en el ID
    if (eventId === "conferencia-liderazgo") {
      setEventInfo({
        title: "A Young Man for History",
        date: "1 July, 2025"
      });
    } else if (eventId === "taller-desarrollo-personal") {
      setEventInfo({
        title: "Taller de Desarrollo Personal",
        date: "22 de Enero, 2024"
      });
    } else if (eventId === "seminario-innovacion") {
      setEventInfo({
        title: "Seminario de Innovación Tecnológica",
        date: "10 de Febrero, 2024"
      });
    } else if (eventId === "encuentro-networking") {
      setEventInfo({
        title: "Encuentro de Networking Profesional",
        date: "5 de Marzo, 2024"
      });
    } else {
      // Si no se encuentra el ID, redirigir o mostrar mensaje
      setEventInfo({
        title: "Evento no encontrado",
        date: ""
      });
    }
  }, [eventId]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos a un servidor
    console.log("Datos del formulario:", { eventId, ...formData });
    // Simulamos un envío exitoso
    setSubmitted(true);
  };
  
  if (!eventId) {
    return (
      <div>
        <Navbar />
        <div className="register-container">
          <div className="register-title">
            <h1>Evento no encontrado</h1>
            <p>El evento que buscas no existe o ha sido eliminado.</p>
            <Link href="/events" style={{ 
              display: "inline-block", 
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#0d66bf",
              color: "white",
              borderRadius: "4px",
              textDecoration: "none"
            }}>
              Volver a Eventos
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div>
      <Navbar />
      <div className="register-container">
        {submitted ? (
          <div className="register-title">
            <h1>¡Registro Exitoso!</h1>
            <p>Gracias por registrarte en {eventInfo.title}. Te hemos enviado un correo con los detalles del evento.</p>
            <Link href="/events" style={{ 
              display: "inline-block", 
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#0d66bf",
              color: "white",
              borderRadius: "4px",
              textDecoration: "none"
            }}>
              Volver a Eventos
            </Link>
          </div>
        ) : (
          <>
            <div className="register-title">
              <h1>Registro para {eventInfo.title}</h1>
              <p>Completa el formulario para asegurar tu lugar en este evento el {eventInfo.date}</p>
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
                <label htmlFor="ocupacion">Ocupación</label>
                <input 
                  type="text" 
                  id="ocupacion" 
                  name="ocupacion" 
                  value={formData.ocupacion}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="comentarios">Comentarios o Preguntas</label>
                <textarea 
                  id="comentarios" 
                  name="comentarios" 
                  value={formData.comentarios}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit">Completar Registro</button>
            </form>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

// Componente principal que envuelve el contenido en Suspense
export default function EventRegister() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <EventRegisterContent />
    </Suspense>
  );
}


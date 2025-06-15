"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import "../events.css";

export default function EventRegisterClient() {
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
    if (eventId === "conferencia-liderazgo") {
      setEventInfo({ title: "A Young Man for History", date: "1 July, 2025" });
    } else if (eventId === "taller-desarrollo-personal") {
      setEventInfo({ title: "Taller de Desarrollo Personal", date: "22 de Enero, 2024" });
    } else if (eventId === "seminario-innovacion") {
      setEventInfo({ title: "Seminario de Innovación Tecnológica", date: "10 de Febrero, 2024" });
    } else if (eventId === "encuentro-networking") {
      setEventInfo({ title: "Encuentro de Networking Profesional", date: "5 de Marzo, 2024" });
    } else {
      setEventInfo({ title: "Evento no encontrado", date: "" });
    }
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", { eventId, ...formData });
    setSubmitted(true);
  };

  if (!eventId) {
    return (
      <div className="register-title">
        <h1>Evento no encontrado</h1>
        <p>El evento que buscas no existe o ha sido eliminado.</p>
        <Link href="/events" className="volver-button">Volver a Eventos</Link>
      </div>
    );
  }

  return (
    <div>
      {submitted ? (
        <div className="register-title">
          <h1>¡Registro Exitoso!</h1>
          <p>Gracias por registrarte en {eventInfo.title}. Te hemos enviado un correo con los detalles del evento.</p>
          <Link href="/events" className="volver-button">Volver a Eventos</Link>
        </div>
      ) : (
        <>
          <div className="register-title">
            <h1>Registro para {eventInfo.title}</h1>
            <p>Completa el formulario para asegurar tu lugar en este evento el {eventInfo.date}</p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            {/* Campos */}
            {/* ...igual que antes */}
          </form>
        </>
      )}
    </div>
  );
}

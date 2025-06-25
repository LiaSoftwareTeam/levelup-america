"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import "./events.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, "mentorshipEvents");
        const eventsSnapshot = await getDocs(eventsCollection);
        const eventsList = eventsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsList);
      } catch (error) {
        console.error("Error al obtener eventos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="events-container">
        <div className="events-title">
          <h1>Próximos Eventos</h1>
          <p>
            Descubre nuestros eventos y únete a nuestra comunidad de crecimiento
            y desarrollo
          </p>
        </div>

        {loading ? (
          <p className="loading-text">Cargando eventos...</p>
        ) : events.length === 0 ? (
          <p className="no-events">No hay eventos disponibles en este momento.</p>
        ) : (
          <div className="events-grid">
            {events.map((event) => (
              <div className="event-card" key={event.id}>
                <div
                  className="event-image"
                  style={{
                    backgroundImage: `url('${event.url}')`,
                  }}
                ></div>
                <div className="event-content">
                  <span className="event-date">{event.fecha}</span>
                  <h3 className="event-title">{event.titulo}</h3>
                  <p className="event-description">{event.descripcion}</p>
                  <Link href={`/events/register?id=${event.id}`} legacyBehavior>
                    <a className="event-register">Registrarse</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

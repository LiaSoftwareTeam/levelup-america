"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./events.css";

export default function Events() {
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

        <div className="events-grid">
          {/* Evento 1 */}
          <div className="event-card">
            <div
              className="event-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
              }}
            ></div>
            <div className="event-content">
              <span className="event-date">1 July, 2025</span>
              <h3 className="event-title">
                A Young Man for History, Purpose, and Legacy
              </h3>
              <p className="event-description">
                Mentorship for young men with purpose, future vision, and a
                legacy that lasts.
              </p>
              <Link
                href="/events/register?id=a-young-man-for-history"
                className="event-register"
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* Evento 2 */}
          {/* <div className="event-card">
            <div
              className="event-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
              }}
            ></div>
            <div className="event-content">
              <span className="event-date">22 de Enero, 2024</span>
              <h3 className="event-title">Taller de Desarrollo Personal</h3>
              <p className="event-description">
                Un espacio para descubrir herramientas prácticas que te ayudarán
                a alcanzar tus metas personales y profesionales.
              </p>
              <Link
                href="/events/register?id=taller-desarrollo-personal"
                className="event-register"
              >
                Registrarse
              </Link>
            </div>
          </div> */}

          {/* Evento 3 */}
          {/* <div className="event-card">
            <div
              className="event-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
              }}
            ></div>
            <div className="event-content">
              <span className="event-date">10 de Febrero, 2024</span>
              <h3 className="event-title">
                Seminario de Innovación Tecnológica
              </h3>
              <p className="event-description">
                Conoce las últimas tendencias en tecnología y cómo
                implementarlas para impulsar la innovación en tu organización.
              </p>
              <Link
                href="/events/register?id=seminario-innovacion"
                className="event-register"
              >
                Registrarse
              </Link>
            </div>
          </div> */}

          {/* Evento 4 */}
          {/* <div className="event-card">
            <div
              className="event-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')",
              }}
            ></div>
            <div className="event-content">
              <span className="event-date">5 de Marzo, 2024</span>
              <h3 className="event-title">
                Encuentro de Networking Profesional
              </h3>
              <p className="event-description">
                Amplía tu red de contactos profesionales en un ambiente dinámico
                y colaborativo con líderes de diferentes industrias.
              </p>
              <Link
                href="/events/register?id=encuentro-networking"
                className="event-register"
              >
                Registrarse
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

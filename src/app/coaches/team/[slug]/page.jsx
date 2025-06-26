import "../../../styles/ui.css";
import { Globe, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { notFound } from "next/navigation";

async function getCoachBySlug(slug) {
  try {
    // Buscar en la colección de coaches por ID directamente
    const coachesCollection = collection(db, 'coaches');
    const coachesSnapshot = await getDocs(coachesCollection);
    
    // Buscar el documento con el ID que coincide con el slug
    const coachDoc = coachesSnapshot.docs.find(doc => doc.id === slug);
    
    if (!coachDoc) {
      return null;
    }
    
    return {
      id: coachDoc.id,
      ...coachDoc.data()
    };
  } catch (error) {
    console.error('Error al obtener coach:', error);
    return null;
  }
}

export default async function CoachDetail({ params }) {
  // Await params before accessing its properties
  const { slug } = await params;
  const coach = await getCoachBySlug(slug);
  
  if (!coach) {
    notFound();
  }

  return (
    <div>
      <div>
        <div className="container-profile-details">
          <div className="back-menu">
            <Link href="/coaches/team">← Back</Link>
          </div>
          <div className="profile-details-container">
            <div className="profile-details-card">
              <div className="profile-details-image">
                <img src={coach.url} alt={`${coach.nombre} Profile Picture`} />
                <h2>{coach.nombre}</h2>
                <p className="role">
                  {coach.carrera}
                </p>
                <p className="location">{coach.direccion}</p>
                <div className="profile-details-actions">
                  {coach.instagram && (
                    <a
                      href={coach.instagram.startsWith('http') ? coach.instagram : `https://www.instagram.com/${coach.instagram.replace('@', '')}`}
                      className="btn-profile-follow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Follow
                    </a>
                  )}
                  <Link href={`/coaches/coaching?coachId=${coach.id}`} className="btn-profile-message">
                    Coaching
                  </Link>
                </div>
              </div>

              <div className="profile-social-links">
                {coach.sitioWeb && (
                  <div className="profile-social-item">
                    <Globe size={20} className="icon" />
                    <span>Website</span>
                    <a href={coach.sitioWeb} target="_blank" rel="noopener noreferrer">
                      {coach.sitioWeb.replace('https://', '').replace('http://', '').split('/')[0]}
                    </a>
                  </div>
                )}
                {coach.linkedin && (
                  <div className="profile-social-item">
                    <Linkedin size={20} className="icon" />
                    <span>Linkedin </span>
                    <a href={coach.linkedin} target="_blank" rel="noopener noreferrer">
                      {coach.linkedin.includes('linkedin.com') ? coach.linkedin.split('/').pop() : coach.linkedin}
                    </a>
                  </div>
                )}
                <div className="profile-social-item">
                  <Twitter size={20} className="icon" />
                  <span>X (Twitter)</span>
                  <a href="#">N/A</a>
                </div>
                {coach.instagram && (
                  <div className="profile-social-item">
                    <Instagram size={20} className="icon" />
                    <span>Instagram</span>
                    <a 
                      href={coach.instagram.startsWith('http') ? coach.instagram : `https://www.instagram.com/${coach.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {coach.instagram.startsWith('@') ? coach.instagram : `@${coach.instagram.split('/').pop()}`}
                    </a>
                  </div>
                )}
                {coach.facebook && (
                  <div className="profile-social-item">
                    <Facebook size={20} className="icon" />
                    <span>Facebook</span>
                    <a href={coach.facebook} target="_blank" rel="noopener noreferrer">
                      {coach.facebook.includes('facebook.com') ? coach.facebook.split('/').pop() : coach.facebook}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="profile-info-container">
              <div className="profile-info-card">
                <div className="profile-info-item">
                  <span className="label">Full Name</span>
                  <span className="value">{coach.nombre}</span>
                </div>
                <div className="profile-info-item">
                  <span className="label">Email</span>
                  <span className="value">{coach.email}</span>
                </div>
                <div className="profile-info-item">
                  <span className="label">Phone</span>
                  <span className="value">{coach.telefono}</span>
                </div>
                <div className="profile-info-item">
                  <span className="label">Mobile</span>
                  <span className="value">{coach.telefono}</span>
                </div>
                <div className="profile-info-item">
                  <span className="label">Address</span>
                  <span className="value">{coach.direccion}</span>
                </div>
              </div>

              <div className="profile-about">
                <div className="profile-about-card">
                  <h3 className="about-title">About Me</h3>
                  <p className="about-text">
                    {coach.aboutMe}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
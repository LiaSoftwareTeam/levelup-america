import "../../../styles/ui.css";
import { Globe, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Name() {
  return (
    <div>
      <div>
        <div className="container-profile-details">
          <div className="back-menu">
            <Link href="/coaches/team">← Back</Link>
          </div>
          <div class="profile-details-container">
            <div class="profile-details-card">
              <div class="profile-details-image">
                <img
                  src="/media/personal/eldris_valenzuela.jpg"
                  alt="Profile Picture"
                />
                <h2>Eldris Valenzuela</h2>
                <p class="role">Wellness and Nutrition Mentor</p>
                <p class="location">New Jersey</p>
                <div class="profile-details-actions">
                  <a
                    href="https://www.instagram.com/eldris_valenzuela"
                    class="btn-profile-follow"
                  >
                    Follow
                  </a>
                  <Link href="/schedule" class="btn-profile-message">
                    Coaching
                  </Link>
                </div>
              </div>

              <div class="profile-social-links">
                <div class="profile-social-item">
                  <Globe size={20} className="icon" />
                  <span>Website</span>
                  <a href="#">N/A</a>
                </div>
                <div class="profile-social-item">
                  <Linkedin size={20} className="icon" />
                  <span>Linkedin </span>
                  <a href="#">N/A</a>
                </div>
                <div class="profile-social-item">
                  <Twitter size={20} className="icon" />
                  <i class="fab fa-twitter"></i>
                  <span>X (Twitter)</span>
                  <a href="#">N/A</a>
                </div>
                <div class="profile-social-item">
                  <Instagram size={20} className="icon" />
                  <span>Instagram</span>
                  <a href="https://www.instagram.com/eldris_valenzuela">
                    @eldris_valenzuela
                  </a>
                </div>
                <div class="profile-social-item">
                  <Facebook size={20} className="icon" />
                  <span>Facebook</span>
                  <a href="#">N/A</a>
                </div>
              </div>
            </div>

            <div class="profile-info-container">
              <div class="profile-info-card">
                <div class="profile-info-item">
                  <span class="label">Full Name</span>
                  <span class="value">Eldris Valenzuela</span>
                </div>
                <div class="profile-info-item">
                  <span class="label">Email</span>
                  <span class="value">valenzuelaeldris@gmail.com</span>
                </div>
                <div class="profile-info-item">
                  <span class="label">Phone</span>
                  <span class="value">+1 (201) 552-1699</span>
                </div>
                <div class="profile-info-item">
                  <span class="label">Mobile</span>
                  <span class="value">+1 (201) 552-1699</span>
                </div>
                <div class="profile-info-item">
                  <span class="label">Address</span>
                  <span class="value">New Jersey</span>
                </div>
              </div>

              <div class="profile-about">
                <div class="profile-about-card">
                  <h3 class="about-title">About Me</h3>
                  <p class="about-text">
                    Eldris Valenzuela is a wellness and nutrition mentor who
                    helps individuals build healthy physical and emotional
                    habits through a holistic approach. She supports clients in
                    improving their relationship with food, adopting daily
                    healthy routines, and fostering emotional well-being,
                    particularly within families. Alongside her mentoring, she
                    offers gourmet products that simplify and enhance the
                    cooking experience. Her mission is to transform how people
                    engage with food, habits, and health, while also providing
                    guidance for women and families seeking a more balanced and
                    enriching lifestyle.
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

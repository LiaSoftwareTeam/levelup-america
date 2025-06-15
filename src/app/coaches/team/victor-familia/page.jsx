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
                <img src="/media/personal/familia.jpg" alt="Profile Picture" />
                <h2>Victor Familia</h2>
                <p class="role">
                  Leadership, personal development, and limit-pushing coach
                </p>
                <p class="location">New Jersey</p>
                <div class="profile-details-actions">
                  <a
                    href="https://www.instagram.com/victorfamilia?igsh=bHBrNGZtbnR0MHY2"
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
                  <a href="https://victorfamilia.com/">victorfamilia.com</a>
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
                  <a href="https://www.instagram.com/victorfamilia?igsh=bHBrNGZtbnR0MHY2">
                    @victor_familia
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
                  <span class="value">Victor Familia</span>
                </div>
                <div class="profile-info-item">
                  <span class="label">Email</span>
                  <span class="value">info@victorfamilia.com</span>
                </div>
                <div class="profile-info-item">
                  <span class="label">Phone</span>
                  <span class="value">+1 (754) 251-5715</span>
                </div>
                <div class="profile-info-item">
                  <span class="label">Mobile</span>
                  <span class="value">+1 (754) 251-5715</span>
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
                    Víctor Familia is a leadership and personal development
                    coach who empowers individuals to break through personal and
                    professional limits. With a bold, results-driven approach,
                    he guides clients in strengthening their mindset, defining
                    clear goals, and building habits that foster growth,
                    resilience, and self-confidence. His coaching blends
                    strategy with purpose, helping leaders and ambitious
                    individuals unlock their potential and lead with intention.
                    Committed to transformation, Víctor also supports those
                    navigating career transitions or seeking deeper fulfillment
                    in life, encouraging them to rise beyond their perceived
                    boundaries and live with impact.
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

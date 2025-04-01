'use client';
import { useState } from 'react';
import './all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faBriefcase, faUser, faGraduationCap, faBuilding, faClock, faMapMarkerAlt, faCalendar, faUserTie, faUsers, faLaptop } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const events = [
    {
        title: 'Leadership Development Workshop',
        location: 'Santo Domingo, República Dominicana',
        date: '22 sep, 2025 (dom.)',
        type: 'Executive Coaching',
        duration: '8 Hours',
        price: '15000 DOP',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0'
    },
    {
        title: 'Team Building Masterclass',
        location: 'Santiago, República Dominicana',
        date: '12 nov, 2025 (mié.)',
        type: 'Group Coaching',
        duration: '6 Hours',
        price: '12000 DOP',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b'
    },
    {
        title: 'Professional Growth Summit',
        location: 'Punta Cana, República Dominicana',
        date: '05 dic, 2025 (vie.)',
        type: 'Career Development',
        duration: 'Full Day',
        price: '20000 DOP',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'
    },
    {
        title: 'Career Development Workshop',
        location: 'Online Session',
        date: 'Mar 15, 2024 (Fri)',
        type: 'Personal Coaching',
        duration: '2 Hours',
        price: '$149',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c'
    },
    {
        title: 'Business Strategy Workshop',
        location: 'In-Person Session - New York',
        date: 'Apr 20, 2024 (Sat)',
        type: 'Business Consulting',
        duration: '4 Hours',
        price: '$499',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978'
    }
];

export default function AllEvents() {
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        <div>
            <Navbar />
            <button className="toggle-filters" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faFilter} />
            </button>
            <div className="container">
                <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
                    <div className="filter-section">
                        <h3><FontAwesomeIcon icon={faBriefcase} /> Event Type</h3>
                        <div className="filter-option">
                            <input type="checkbox" id="personal" />
                            <label htmlFor="personal"><FontAwesomeIcon icon={faUser} /> Personal Coaching</label>
                        </div>
                        <div className="filter-option">
                            <input type="checkbox" id="student" />
                            <label htmlFor="student"><FontAwesomeIcon icon={faGraduationCap} /> Student Advising</label>
                        </div>
                        <div className="filter-option">
                            <input type="checkbox" id="business" />
                            <label htmlFor="business"><FontAwesomeIcon icon={faBuilding} /> Business Consulting</label>
                        </div>
                    </div>
                    <div className="filter-section">
                        <h3><FontAwesomeIcon icon={faClock} /> Duration</h3>
                        <div className="filter-option">
                            <input type="checkbox" id="1h" />
                            <label htmlFor="1h">1 Hour</label>
                        </div>
                        <div className="filter-option">
                            <input type="checkbox" id="2h" />
                            <label htmlFor="2h">2 Hours</label>
                        </div>
                        <div className="filter-option">
                            <input type="checkbox" id="4h" />
                            <label htmlFor="4h">4 Hours</label>
                        </div>
                    </div>
                </div>
                <div className="cards-container">
                    {events.map((event, index) => (
                        <div key={index} className="event-card">
                            <div className="event-info">
                                <h2 className="event-title">{event.title}</h2>
                                <div className="event-detail">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span style={{paddingLeft:"10px"}}>{event.location}</span>
                                </div>
                                <div className="event-detail">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    <span style={{paddingLeft:"10px"}}>{event.date}</span>
                                </div>
                                <div className="event-detail">
                                    <FontAwesomeIcon icon={faUserTie} />
                                    <span style={{paddingLeft:"10px"}}>{event.type}</span>
                                    <span className="distance" style={{paddingLeft:"10px"}}>{event.duration}</span>
                                </div>
                                <div className="price-section">
                                    <span className="price-label">Desde</span>
                                    <span className="price">{event.price}</span>
                                </div>
                            </div>
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
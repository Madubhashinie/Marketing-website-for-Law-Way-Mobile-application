import "./styles.css";
import logo from "./assets/logo.png";
import navPic from "./assets/nav.png";

import member1 from "./assets/TeamMembers/piruthivi.jpeg";
import member2 from "./assets/TeamMembers/Tharushi.jpeg";
import member3  from "./assets/TeamMembers/sasindi.jpeg";
import member4  from "./assets/TeamMembers/suthais.jpeg";
import member5 from "./assets/TeamMembers/Saad.png";
import member6  from "./assets/TeamMembers/s.png";

function App() {
  return (
    
    <div className="container">

      {/* Navigation Bar */}
      <nav className="navbar">
        <img src={navPic} alt="LawWay Logo" className="navbar-logo"
        />
        <h1 className="navbar-title">#<span>L</span>aw<span>W</span>ay</h1>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#features" className="navbar-link">Features</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About Us</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact Us</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
      <img src={logo} alt="LawWay Logo" className="hero-logo" />
        <h1>Welcome to LawWay</h1>
        <p>Your trusted guide for civil law and legal assistance.</p>
        <button className="cta">Coming Soon...</button>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Legal Guidance</h3>
            <p>Step-by-step civil law instructions in simple language.</p>
          </div>
          <div className="feature">
            <h3>Book a Lawyer</h3>
            <p>Find the right lawyer for your legal issues.</p>
          </div>
          <div className="feature">
            <h3>Case Categories</h3>
            <p>Easy-to-navigate categorized legal topics.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}  
      <section id="about" className="about">
            <h2>About Us</h2>
            <p>
                LawWay is developed by a passionate team of six members dedicated to
                making legal assistance accessible to everyone.
            </p>

            <div className="team-grid">
          <div className="team-member">
            <img src={member1} alt="Team Member 1" />
            <h3>Pirutivi Paramalingam</h3>
            
          </div>
          <div className="team-member">
            <img src={member2} alt="Tharushi Madubhashinie" />
            <h3>Tharushi Madubhashinie</h3>
           
          </div>
          <div className="team-member">
            <img src={member3} alt="Team Member 3" />
            <h3>Sasindie Nimethma</h3>
          
          </div>
          <div className="team-member">
            <img src={member4} alt="Team Member 4" />
            <h3>Suthais Noordeen</h3>
           
          </div>
          <div className="team-member">
            <img src={member5} alt="Team Member 5" />
            <h3>Saad Ithihad</h3>
           
          </div>
          <div className="team-member">
            <img src={member6} alt="Team Member 6" />
            <h3>sasidu rajapaksha</h3>
            
          </div>
        </div>
      </section>
     
      {/* Contact Us Section */}
      <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="icon-email"></i>
            <p>
              <span className="contact-label">Email:</span>
              <a href="mailto:lawwaysdgp@gmail.com">lawwaysdgp@gmail.com</a>
            </p>
          </div>
          <div className="contact-item">
            <i className="icon-instagram"></i>
            <p>
              <span className="contact-label">Instagram:</span>
              <a
                href="https://www.instagram.com/law_way_sdgp?igsh=MTNnd3l3bGR4N3pqaw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                @LAW_WAY_SDGP
              </a>
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 LawWay. All rights reserved.</p>
      </footer>
    </div>
  
  );
}
export default App;
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span>myrvo technologies</span>
            </div>
            <p className="footer-tagline">
              AI + SaaS + product engineering studio for modern businesses. We
              build digital solutions for a better tomorrow.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="socials">
              <a
                href="https://www.linkedin.com/company/myrvotech/"
                className="social"
                aria-label="Myrvo Technologies on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedin" size={18} />
              </a>
              <a
                href="https://x.com/myrvotech"
                className="social"
                aria-label="Myrvo Technologies on X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="x" size={18} />
              </a>
              <a href="mailto:info@myrvo.tech" className="social" aria-label="Email Myrvo Technologies">
                <Icon name="mail" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <div>© {new Date().getFullYear()} Myrvo Technologies Ltd. All rights reserved.</div>
            <div style={{ marginTop: "6px", fontSize: "0.8125rem", color: "var(--text-faint)" }}>
              Registered in England &amp; Wales · Company No. 17034685 · Chandos Business Centre, Warwick Street, Leamington Spa, CV32 4RJ
            </div>
          </div>
          <span>Built with care in the UK.</span>
        </div>
      </div>
    </footer>
  );
}

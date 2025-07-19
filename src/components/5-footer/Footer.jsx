import "./footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Ibrahim M. Fathi</h3>
          <p className="footer-description">
            Senior Mobile App Developer specializing in React Native & Flutter.
            Building high-quality mobile applications for clients worldwide.
          </p>
          <div className="footer-stats">
            <div className="stat">
              <span className="stat-number">14+</span>
              <span className="stat-label">Live Apps</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-section-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            {/* <li>
              <a href="#testimonials">Reviews</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-section-title">Services</h4>
          <ul className="footer-links">
            <li>
              <a href="#services">React Native Development</a>
            </li>
            <li>
              <a href="#services">Flutter Development</a>
            </li>
            <li>
              <a href="#services">App Store Publishing</a>
            </li>
            <li>
              <a href="#services">Mobile App Consulting</a>
            </li>
            <li>
              <a href="#services">API Integration</a>
            </li>
            <li>
              <a href="#services">UI/UX Implementation</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-section-title">Connect</h4>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/ibrahimfathi796/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Ibrahimfathi96"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">🐙</span>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01a97744f780dd0c12"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">💼</span>
              <span>Upwork</span>
            </a>
            <a
              href="mailto:ibrahimfathi796@outlook.com"
              className="social-link"
            >
              <span className="social-icon">📧</span>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Ibrahim M. Fathi. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

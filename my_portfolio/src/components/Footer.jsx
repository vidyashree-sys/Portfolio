import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 Your Name. All rights reserved.</p>

        <div className="footer-socials">
          <a href="https://github.com/vidyashree-sys" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vidyashree-biradar-90b246360/" target="_blank" >
            <FaLinkedin />
          </a>
          <a href="mailto:vidyasb2005@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

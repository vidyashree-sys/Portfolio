import profile from "../assets/profile.jpg";
import { useEffect, useState } from "react";

export default function Hero() {
  const mainTitle = "Full-Stack Developer";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect only for Full-Stack Developer
  useEffect(() => {
    const interval = setInterval(() => {
      setText(mainTitle.slice(0, index + 1));
      setIndex(prev => (prev + 1) % (mainTitle.length + 1));
    }, 150);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          {/* Name above heading */}
          <div className="hero-name">Vidyashree</div>

          {/* Main title with typing cursor */}
          <h1 className="hero-heading">
            <span className="typing">{text}</span>
            <span className="cursor">|</span>
          </h1>

          {/* Additional skills / titles below */}
          <div className="hero-subskills">
            Java | DSA | MERN Stack | OOP | Firebase
          </div>

          <p className="hero-subtext">
           I specialize in building responsive web applications
           using MERN stack. I love solving problems and creating beautiful UI.


          </p>

          <a href="#contact" className="hero-btn">
            Let’s Connect
          </a>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>

      </div>
    </section>
  );
}

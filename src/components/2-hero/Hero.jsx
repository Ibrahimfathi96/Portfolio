// @ts-nocheck
import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animations/dev2.json";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = React.useRef();
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  // Optimized image URLs with Cloudinary transformations
  const avatarUrlWebP =
    "https://res.cloudinary.com/doehu91ch/image/upload/c_fill,w_300,h_300,q_auto,f_webp/v1698017850/Portofolio/kpuvugeqv7pz1dlhrqa8.png";
  const avatarUrlFallback =
    "https://res.cloudinary.com/doehu91ch/image/upload/c_fill,w_300,h_300,q_auto,f_auto/v1698017850/Portofolio/kpuvugeqv7pz1dlhrqa8.png";

  React.useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      const fallbackImg = new Image();
      fallbackImg.onload = () => setImageLoaded(true);
      fallbackImg.onerror = () => setImageError(true);
      fallbackImg.src = avatarUrlFallback;
    };
    img.src = avatarUrlWebP;
  }, [avatarUrlWebP, avatarUrlFallback]);

  return (
    <section id="about" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="avatar-container"
          >
            {!imageLoaded && !imageError && (
              <div className="avatar-loading">
                <div className="loading-spinner"></div>
              </div>
            )}
            {imageError && (
              <div className="avatar-fallback">
                <div className="fallback-icon">👨‍💻</div>
              </div>
            )}
            <picture>
              <source srcSet={avatarUrlWebP} type="image/webp" />
              <motion.img
                className={`avatar ${imageLoaded ? "loaded" : ""}`}
                src={avatarUrlFallback}
                alt="Ibrahim M.Fathi - Mobile App Developer"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                style={{
                  opacity: imageLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />
            </picture>
          </motion.div>
        </div>
        <div className="flex">
          <h1 className="title">Ibrahim M.Fathi</h1>
          <div className="icon-verified"></div>
        </div>
        <h2 className="title-description">
          Software Engineer | Mobile App Developer
        </h2>
        <p className="sub-title">
          Innovative Mobile App Developer specializing in cross-platform
          solutions with React Native & Flutter. Proven track record of
          delivering 14+ production applications with exceptional user
          experiences and robust architectures. Expert in crafting scalable
          mobile solutions, implementing complex state management, and
          integrating cloud services. Proficient across the entire development
          stack - from pixel-perfect UI components to backend infrastructure
          (Firebase/Supabase). Passionate about clean code, performance
          optimization, and transforming ideas into market-ready mobile
          applications.
        </p>
        <div className="all-icons flex">
          <a
            href="https://twitter.com/Ibrahim_Fathi96"
            target="_blank"
            rel="noreferrer"
            className="icon icon-x"
          />

          <a
            href="https://www.instagram.com/eng.ibrahim._.fathi/"
            target="_blank"
            rel="noreferrer"
            className="icon icon-instagram1"
          />

          <a
            href="https://github.com/Ibrahimfathi96"
            target="_blank"
            rel="noreferrer"
            className="icon icon-github"
          />

          <a
            href="https://www.linkedin.com/in/ibrahimfathi796/"
            target="_blank"
            rel="noreferrer"
            className="icon icon-linkedin1"
          />

          <a
            href="https://wa.me/+201555518756"
            target="_blank"
            rel="noreferrer"
            className="icon icon-whatsapp1"
          />

          <a
            href="https://www.upwork.com/freelancers/~01a97744f780dd0c12"
            target="_blank"
            rel="noreferrer"
            className="icon icon-upwork"
          />

          <a
            href="mailto:ibrahimfathi796@outlook.com"
            target="_blank"
            rel="noreferrer"
            className="icon icon-microsoftoutlook"
          />

          <a
            href="mailto:ibmf796@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="icon icon-gmail"
          />
        </div>
        <div className="all-techs flex">
          <div className="icon icon-dart"></div>
          <div className="icon icon-flutter"></div>
          <div className="icon icon-firebase"></div>
          <div className="icon icon-html5"></div>
          <div className="icon icon-css3"></div>
          <div className="icon icon-javascript"></div>
          <div className="icon icon-typescript"></div>
          <div className="icon icon-react"></div>
          <div className="icon icon-redux"></div>
          <div className="icon icon-node-dot-js"></div>
          <div className="icon icon-mongodb"></div>
        </div>
        <button
          className="cv-btn"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1ZzOzmXU7S6PIJ71-ponfQb1aVpBndBhm/view?usp=sharing",
              "_blank"
            );
          }}
        >
          Download CV
        </button>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            //https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};
export default Hero;

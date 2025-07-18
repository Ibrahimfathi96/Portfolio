// @ts-nocheck
import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animations/dev2.json";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = React.useRef();
  return (
    <section id="about" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="avatar"
            src="https://res.cloudinary.com/doehu91ch/image/upload/v1698017850/Portofolio/kpuvugeqv7pz1dlhrqa8.png"
            alt=""
          />
        </div>
        <div className="flex">
          <h1 className="title">Ibrahim M.Fathi</h1>
          <div className="icon-verified"></div>
        </div>
        <h2 className="title-description">
          Cross-Platform Mobile Application Developer
        </h2>
        <p className="sub-title">
          I am a Junior Mobile App Developer who is passionate about creating
          apps that people love. I have a track record of building successful
          and well-received applications. My skills are focused on crafting
          user-friendly apps and working effectively as part of a team. I am
          always on the lookout for opportunities to improve and update existing
          apps, making sure they continue to engage users and remain relevant
        </p>
        <div className="all-icons flex">
          <a
            href="https://twitter.com/Ibrahim_Fathi96"
            target="_blank"
            rel="noreferrer"
            className="icon icon-x"
          />

          <a
            href="https://www.instagram.com/eng.ibrahim_fathi96/"
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

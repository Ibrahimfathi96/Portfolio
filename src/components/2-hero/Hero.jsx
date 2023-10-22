// @ts-nocheck
import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animations/dev2.json";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = React.useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="avatar"
            src="./me.png"
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
          <div className="icon icon-x"></div>
          <div className="icon icon-instagram1"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin1"></div>
          <div className="icon icon-whatsapp1"></div>
          <div className="icon icon-upwork"></div>
          <div className="icon icon-microsoftoutlook"></div>
          <div className="icon icon-gmail"></div>
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
              "https://drive.google.com/file/d/1quPTlE5wzmM44BFXCBjI-X5tB1L2iYDr/view?usp=sharing",
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

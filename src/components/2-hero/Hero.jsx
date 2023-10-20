import "./hero.css";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img className="avatar" src="./me.png" alt="" />
        </div>
        <div className="flex">
          <h1 className="title">Ibrahim Fathi</h1>
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
      </div>
      <div className="right-section animation border">ANIMATIONS</div>
    </section>
  );
};
export default Hero;

import "./hero.css";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img className="avatar" src="./me.png" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Cross-Platform Mobile Application Developer.</h1>
        <p className="sub-title">
          I am Ibrahim Fathi, a driven Jr. Mobile App Developer with a proven
          record of creating highly-received and commercially successful
          applications. My expertise lies in building user-friendly apps and
          collaborating effectively within teams. I am constantly seeking
          opportunities to enhance and refine existing apps, ensuring they
          captivate users and stand the test of time.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation border">ANIMATIONS</div>
    </section>
  );
};
export default Hero;

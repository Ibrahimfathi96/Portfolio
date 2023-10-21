import "./contact.css";
const Contact = () => {
  return (
    <div>
      <section className="contact-us">
        <h1 className="title">
          <span className="icon-envelope"></span>
          Contact Us
        </h1>
        <p className="sub-title">
          Contact us for more information and Get notified when I publish
          something new.
        </p>

        <div className="flex">
          <form className="">
            <div className="flex">
              <label htmlFor="email">Email Address:</label>
              <input required type="email" name="" id="email" />
            </div>

            <div className="flex" style={{ marginTop: "1.1rem" }}>
              <label htmlFor="message">Your Message:</label>
              <textarea required name="" id="message" />
            </div>

            <button className="submit">Submit</button>
          </form>
          <div className="animation border">ANIMATION</div>
        </div>
      </section>
    </div>
  );
};
export default Contact;

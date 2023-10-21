import "./contact.css";
import { ValidationError, useForm } from "@formspree/react";
import Lottie from "lottie-react";
import donesuccessfully from "../../animations/done.json";
import contactUs from "../../animations/contact-us.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("mvojlgaw");
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

        <div
          style={{ justifyContent: "space-between", marginTop: "-3rem" }}
          className="flex"
        >
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <label htmlFor="email">Email Address:</label>
              <input
                autoComplete="off"
                required
                type="email"
                name="email"
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="flex" style={{ marginTop: "1.1rem" }}>
              <label htmlFor="message">Your Message:</label>
              <textarea required name="message" id="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {state.succeeded && (
              <p
                className="flex"
                style={{ fontSize: "18px", marginTop: "1.7rem" }}
              >
                <Lottie
                  style={{ height: 30 }}
                  loop={false}
                  animationData={donesuccessfully}
                />
                Your message has been sent successfully 👌
              </p>
            )}

            <div className="flex submit-container">
              <button
                type="submit"
                disabled={state.submitting}
                className="submit"
              >
                {state.submitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>

          <div className="animation">
            <Lottie
              className="contact-animation"
              loop={false}
              animationData={contactUs}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;

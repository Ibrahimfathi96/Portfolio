import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import React from "react";

function App() {
  const [showScroll, setShowScroll] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{
          transition: "0.3s",
          opacity: showScroll ? 1 : 0,
        }}
        href="#up"
      >
        <button className="icon-keyboard_arrow_up scroll-to-top"></button>
      </a>
    </div>
  );
}

export default App;

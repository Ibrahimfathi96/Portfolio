import React from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [theme, setTheme] = React.useState(
    localStorage.getItem("currentTheme") ?? "dark"
  );
  React.useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className=" flex">
      <button className="menu icon-menu1" onClick={() => setShowModal(true)} />

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          //save value in localStorage
          localStorage.setItem(
            "currentTheme",
            theme === "dark" ? "light" : "dark"
          );
          //change theme from localStorage
          setTheme(localStorage.getItem("currentTheme"));
        }}
        className="mode flex"
      >
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;

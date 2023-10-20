import React from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <header className=" flex">
      <button className="menu icon-menu1" onClick={() => setShowModal(true)} />

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="mode flex">
        <span className="icon-moon-o"></span>
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
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;

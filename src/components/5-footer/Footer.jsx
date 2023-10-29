import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        {/* <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Resume</a>
        </li> */}
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
};
export default Footer;

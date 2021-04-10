import { FiGithub } from "react-icons/fi";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div id="divFooter">
      <a
        href="https://www.github.com/theduv/accman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub id="githubIcon" />
      </a>
    </div>
  );
};

export default Footer;

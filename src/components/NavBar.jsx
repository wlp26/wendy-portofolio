import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-12 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <h2 className="text-4xl font-bold">W.L.P</h2>
      </div>

      <div className="flex item-center justify-center gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/wendy-leando-paath-48a289272"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/wlp26"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/wendypaath26?igsh=bGZ4enJ4ams3czJq&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

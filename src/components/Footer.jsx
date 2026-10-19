import { LuArrowUp } from "react-icons/lu";
import { profile } from "../data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="footer-built">Designed &amp; built with React + Vite</p>
        <a href="#top" className="footer-top">
          Back to top <LuArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

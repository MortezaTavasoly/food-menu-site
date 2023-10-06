import { Link } from "react-router-dom";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <Link to="https://instagram.com/mr_mtr6?igshid=NzZlODBkYWE4Ng==">
          <InstagramIcon />
        </Link>
        <Link to="https://t.me/M_T_R_6">
          <TelegramIcon />
        </Link>
        <Link to="https://linkedin.com/in/morteza-tavasoly-02206528a">
          <LinkedInIcon />
        </Link>
        <Link to="https://github.com/MortezaTavasoly">
          <GitHubIcon />
        </Link>
      </div>
      <p>&copy; 2023 morteza.tavasoly.rostami@gmail.com</p>
    </div>
  );
}

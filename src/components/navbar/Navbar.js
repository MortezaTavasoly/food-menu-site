import "./navbar.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.jpg";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleLinks = () => {
    if (showMenu === true) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo-image" />
      </div>
      <div className={!showMenu ? "links" : "links show"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Menu">Menu</NavLink>
        <NavLink to="About">About Us</NavLink>
        <NavLink to="Contact">Contact</NavLink>
      </div>
      <div className="links-menu" onClick={handleLinks}>
        <MenuIcon />
      </div>
    </div>
  );
}

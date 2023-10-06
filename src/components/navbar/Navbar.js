import "./navbar.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.jpg";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState("block");
  const handleLinks = () => {
    if (showMenu === "block") {
      setShowMenu("none");
    } else {
      setShowMenu("block");
    }
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo-image" />
      </div>
      <div className="links" style={{ display: showMenu }}>
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

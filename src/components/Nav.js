import React, { useEffect, useState } from "react";
import "../Nav.css";
import NetflixLogo from "../images/netflixLogo.png";
import Avatar from "../images/ProfileImage.jpg";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img className="nav-logo" src={NetflixLogo} alt="Netflix Logo" />
      <img className="nav-avatar" src={Avatar} alt="Netflix Avatar" />
    </div>
  );
}

export default Nav;

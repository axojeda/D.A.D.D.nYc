import React from "react";
import { Link } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

function Header() {
  return (
  <div className="header">
    <nav>
        <img id="logo" src="logo.jpg"/>
        <div className="nav-name">
            <h1 id="daddnyc">D.A.D.D.nYc</h1>
              <h3 className="subtitle">Date And Don't Die: The ultimate NYC survival dating guide</h3>
            </div>
            <ul>
              
              <li><Link id="about" to="/About">About</Link></li>
              <li><Link id="apps" to="/DatingApps">Dating Apps</Link></li>
              <li><Link id="types" to="/MenTypes">NYC Men Types</Link></li>
              <li><Link id="red-flags" to="/RedFlags">Red Flags</Link></li>
              <li><Link id="resources" to="/Resources">Resources</Link></li>
              
            </ul>
    </nav>
   <div>
      {/* <img className="divider" src="nycneon3.jpg"></img> */}
  </div>
  </div>
  );
}

export default Header;

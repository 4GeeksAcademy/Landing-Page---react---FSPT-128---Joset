import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-stranger bg-transparent">
      <div className="container">
        <a className="navbar-brand text-danger" href="#">Hawkins News</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="navbar-nav ms-auto text-lg-end text-end mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link text-danger" href="#">Portal Principal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="#">El Laboratorio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="#">Radio Hawkins</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="#">Portal Repair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
export default Navbar;

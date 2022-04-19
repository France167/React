import React from "react";

function Navbar() {
  return (
    <nav
      id="mainNavbar"
      class="navbar navbar-dark navbar-expand-md py-0 fixed-top"
    >
      <a href="#" class="navbar-brand">
        CANDY
      </a>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navLinks"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navLinks">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="" class="nav-link">
              HOME
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              ABOUT
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              TICKETS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

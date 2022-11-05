import React from "react";
import { navs } from "../../utils/constants";
import { NavList } from "./NavList";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top animate__animated animate__bounceInLeft">
        <a className="navbar-brand logo-image" href="#">
          <img src="/src/assets/images/logo.svg" alt="alternative" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            {navs.map((nav, id) => {
              return <NavList key={id} nav={nav} />;
            })}
          </ul>
          <span className="nav-item social-icons">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-linkedin-in fa-stack-1x"></i>
              </a>
            </span>
          </span>
        </div>
      </nav>
    </>
  );
};

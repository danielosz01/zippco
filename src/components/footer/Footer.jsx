import React from "react";
import { ServiceList } from "../ui/ServiceList";
import { FooterChild } from "./FooterChild";
import { services } from "../../utils/constants";
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-col">
                <h4>About Zippco Solution</h4>
                <p>
                  We're passionate about creating the best mobile apps for
                  personal development
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-col middle">
                <h4>Services</h4>
                <ul className="list-unstyled li-space-lg">
                  {services.map((item, id) => {
                    return <ServiceList key={id} service={item} />;
                  })}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-col last">
                <h4>Social Media</h4>
                <span className="fa-stack">
                  <a href="#linkedin-agency">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterChild />
    </>
  );
};

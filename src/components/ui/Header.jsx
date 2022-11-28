import React, { useEffect } from "react";
import { Form } from "../form/Form";
const $ = jQuery
export const Header = () => {
  useEffect(() => {
    $("#js-rotating").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "fadeIn",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: ",",
      // The delay between the changing of each phrase in milliseconds.
      speed: 2000,
    });
  }, [])
  
  return (
    <>
      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-container animate__animated animate__bounceInLeft">
                  <h1>
                    PROVIDE THE BEST FOR 
                    <br />
                    <span id="js-rotating">
                      SOFTWARE, WEB DESIGN, APP DESIGN
                    </span>
                  </h1>
                  <p className="p-large py-2">
                  <b style={{lineHeight: '30px'}}> We provide you the best of the web application, design application, and we can maintain your app for improve its performance and improve its interfaces and features. <br />Zippco is your solution for your projects and you can get in contact with us filling out the form.</b>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 header-form">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

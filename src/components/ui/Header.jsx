import React, { useEffect } from "react";
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
                    MOBILE APP <br />
                    FOR{" "}
                    <span id="js-rotating">
                      DESIGNERS, MARKETERS, DEVELOPERS
                    </span>
                  </h1>
                  <p className="p-large">
                    Leno is one of the easiest and feature packed marketing
                    automation apps in the market. Download it today!
                  </p>
                  <a className="btn-solid-lg page-scroll" href="#">
                    <i className="fab fa-apple"></i>APP STORE
                  </a>
                  <a className="btn-solid-lg page-scroll" href="#">
                    <i className="fab fa-google-play"></i>PLAY STORE
                  </a>
                </div>
              </div>
              <div className="col-lg-6 header-form">
                <div>
                  <form className="animate__animated animate__bounceInLeft">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        aria-describedby="emailHelp"
                        placeholder="Enter your full name"
                      />
                      <small
                        id="emailHelp"
                        className="form-text text-muted"
                      ></small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                      <small className="form-text">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Phone</label>
                      <input
                        type="phone"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Your phone here"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Project Description
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Describe your project"
                      ></textarea>
                    </div>
                    <div className="button-form-container">
                      <button type="submit" className="btn btn-form">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

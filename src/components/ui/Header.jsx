import React from 'react'

export const Header = () => {
  return (
    <>
    <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h1>MOBILE APP <br/>FOR <span id="js-rotating">DESIGNERS, MARKETERS, DEVELOPERS</span></h1>
                            <p className="p-large">Leno is one of the easiest and feature packed marketing automation apps in the market. Download it today!</p>
                            <a className="btn-solid-lg page-scroll" href="#"><i className="fab fa-apple"></i>APP STORE</a>
                            <a className="btn-solid-lg page-scroll" href="#"><i className="fab fa-google-play"></i>PLAY STORE</a>
                        </div>
                    </div>
                    <div className="col-lg-6 header-form">
                        <div>
                            <form>
                            <div class="form-group">
                                    <label for="exampleInputEmail1">Full Name</label>
                                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter your full name"/>
                                    <small id="emailHelp" class="form-text text-muted"></small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small class="form-text">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Phone</label>
                                    <input type="phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your phone here"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Project Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Describe your project"></textarea>
                                </div>
                                <div className='button-form-container'>
                                    <button type="submit" class="btn btn-form">Submit</button>
                                </div>
                                
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

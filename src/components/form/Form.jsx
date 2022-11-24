import React, {Fragment, useState} from 'react';

export const Form = () => {

    const [datos, setDatos] = useState({
        name: '',
        email: '',
        phone: '',
        text: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault();
        
    }

    return(

      <>
        <div>
            <form className="animate__animated animate__bounceInLeft" onSubmit={sendData}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your full name"
                    name='name'
                    onChange={handleInputChange}
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
                    name='email'
                    onChange={handleInputChange}
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
                    name='phone'
                    onChange={handleInputChange}
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
                    name='text'
                    onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="button-form-container">
                    <button type="submit" className="btn btn-form">
                    Submit
                    </button>
                </div>
            </form>
        </div>
        
      </>
    );
  };


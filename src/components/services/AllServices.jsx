import React, { memo } from "react";

export const AllServices = memo(({ title, description, image }) => {
  return (
    <>
      <div
        id="services"
        className="col-md-4 px-lg-5 animate__animated animate__bounceInLeft"
      >
        <img src={image} width="85" />
        <h4 className="services-title">{title}</h4>
        <p className="services-p">{description}</p>
      </div>
    </>
  );
});

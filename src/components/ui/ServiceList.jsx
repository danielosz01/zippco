import React, { memo } from "react";

export const ServiceList = memo(({service}) => {
  return (
    <>
      <li className="media">
        <i className="fas fa-square"></i>
        <div className="media-body">{service}</div>
      </li>
    </>
  );
});

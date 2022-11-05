import React from "react";
import { allServices } from "../../utils/constants";
import { AllServices } from "./AllServices";

export const Services = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {allServices.map((service, id) => {
            return <AllServices key={id} {...service} />;
          })}
        </div>
      </div>
    </>
  );
};

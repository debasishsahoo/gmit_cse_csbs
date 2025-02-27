import React from "react";

const Services = ({ data }) => {
  return (
    <div className="services">
      {data.map((element, index) => (
        <div className="service" key={index}>
          <h3>{element.title}</h3>
          <p>{element.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;

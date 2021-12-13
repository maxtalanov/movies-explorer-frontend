import React from "react";
import "./Heading.css";

function Heading({title, paddingSize,}) {

  return (
    // <div className="container"></div>
      <section className={`heading heading_padding-top_${paddingSize}`}>
        <h3 className="heading__title">{title}</h3>
      </section>

  );
}

export default Heading;

import React from "react";
import grp from "../assests/groupe détouré-halftone-2 1.png";
import obj1 from "../assests/OBJECTS.png";
import obj2 from "../assests/multiples cross 1.png";

function AboutUs() {
  return (
    <div>
      <div>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={grp}
            alt=""
            style={{
              inset: 0,
              width: "20 rem",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          />
          <img
            src={obj1}
            alt=""
            style={{
              inset: 0,
              width: "20 rem",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 100,
            }}
          />
        </div>
      </div>
      {/* <div>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum
          reprehenderit eos dolorem, tempore dolorum natus commodi debitis,
          explicabo ut fugit odit vitae? Quod alias porro natus vel! Doloribus,
          mollitia?
        </p>
      </div> */}
    </div>
  );
}

export default AboutUs;

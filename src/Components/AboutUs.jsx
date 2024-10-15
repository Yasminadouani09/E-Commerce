import React from "react";
import grp from "../assests/groupe détouré-halftone-2 1.png";
import obj1 from "../assests/OBJECTS.png";
import line from "../assests/Line 3.png";

function AboutUs() {
  return (
    <div
      style={{ backgroundColor: "black" }}
      className="d-flex align-items-center justify-content-center py-5 text-white "
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "400px", // Ajustez la hauteur selon vos besoins
          overflow: "hidden",
        }}
      >
        <img
          src={obj1}
          alt=""
          className="py-5"
          style={{
            position: "absolute",
            width: "30rem",
            zIndex: 1,
          }}
        />
        <img
          src={grp}
          alt=""
          style={{
            position: "absolute",
            width: "35rem",
            zIndex: 3,
          }}
        />
        {/* 
        <img
          src={obj2}
          alt=""
          style={{
            position: "absolute",
            width: "7rem",
            zIndex: 2,
           right: "70rem"
          }}
         
        /> */}
      </div>

      <div className="px-5 gap-5">
        <h2 className="text-danger" style={{ fontFamily: "Bebas Neue" }}>
          About Us ?
        </h2>
        <p className="fs-6" style={{ fontFamily: "Agrandir" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum
          reprehenderit eos dolorem, tempore dolorum natus commodi debitis,
          explicabo ut fugit odit vitae? Quod alias porro natus vel! Doloribus,
          mollitia? <br /> <br /> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Vitae eaque, eum illum, corporis quis, rem impedit
          debitis temporibus maiores saepe nobis voluptates neque? Aperiam iusto
          placeat provident accusamus, unde est!
        </p>
        <img src={line} alt="" />
        <div className="p-4">
          <button className="btn btn-danger px-5  ">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

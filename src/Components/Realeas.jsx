import React from 'react'
import spotify from "../assests/spotify-1.png"
import albm1 from "../assests/Pochette-album-1.png"
import albm2 from "../assests/Pochette-album-2.png"
import albm3 from "../assests/Pochette-album-3.png"

function Realeas() {
  return (
    <div className="py-5" style={{ backgroundColor: "black" }}>
      <h2
        className="text-danger text-center"
        style={{ fontFamily: "Bebas Neue" }}
      >
        RELEASE
      </h2>

      <div className="d-flex justify-content-center gap-5">
        <div className=" d-flex flex-column align-items-center">
          <img src={albm1} alt="" />
          <br />
          <img src={spotify} alt="" width={"50rem"} />
        </div>
        <div className=" d-flex flex-column align-items-center">
          <img src={albm2} alt="" />
          <br />
          <img src={spotify} alt="" width={"50rem"} />
        </div>
        <div className=" d-flex flex-column align-items-center">
          <img src={albm3} alt="" />
          <br />
          <img src={spotify} alt="" width={"50rem"} />
        </div>
      </div>

      <div className="p-4 d-flex justify-content-center py-5">
        <button className="btn btn-danger px-5  ">ALL THE RELEASE</button>
      </div>
    </div>
  );
}

export default Realeas

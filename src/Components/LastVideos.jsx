import React from 'react'
import vd1 from "../assests/Video 1.png"
import vd2 from "../assests/ogbapt3 3.png"
import vd3 from "../assests/pursuit 3.png"

function LastVideos() {
  return (
    <div className="py-5" style={{ backgroundColor: "#d60804" }}>
      <h2
        className="text-white text-center py-4"
        style={{ fontFamily: "Bebas Neue" }}
      >
        Last Videos
      </h2>

      <div className="d-flex  justify-content-center gap-5 px-5">
        <div>
          <img src={vd1} alt="" className="w-100" />
        </div>
        <div>
          <img src={vd2} alt="" className="w-100" />
        </div>
        <div>
          <img src={vd3} alt="" className="w-100" />
        </div>
      </div>

      <div className="p-4 d-flex gap-4 justify-content-center py-5">
        <button
          className="btn  px-5   "
          style={{ backgroundColor: "black", color: "white" }}
        >
          ALL THE RELEASE
        </button>
        <button
          className="btn  px-5  "
          style={{ backgroundColor: "black", color: "white" }}
        >
          ALL THE RELEASE
        </button>
      </div>
    </div>
  );
}

export default LastVideos

import React from 'react'
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carr1 from "../assests/carr1.jpg"
import carr2 from "../assests/carr2.jpg"
import carr3 from "../assests/carr3.jpg"

function Carrousel() {
      
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src={carr1}
            alt=""
            className="w-100"
            style={{
              height: "40rem",
              objectFit: "cover"
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={carr2}
            alt=""
            className="w-100"
            style={{
              height: "40rem",
              objectFit: "cover",
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={carr3}
            alt=""
            className="w-100"
            style={{
              height: "40rem",
              objectFit: "cover",
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel

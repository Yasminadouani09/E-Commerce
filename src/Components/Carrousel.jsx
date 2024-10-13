import React from 'react'
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";


function Carrousel() {
      
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src="../assests/Hero.png" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="#" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="#" alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel

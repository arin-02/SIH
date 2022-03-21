import React from 'react';
import modi from './modi.jpg'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
const Slider = () => {
  return (
    <>
    <AwesomeSlider animation="cubeAnimation">
    
    <img src={modi} alt="" />
  </AwesomeSlider>
    </>
  )
};

export default Slider
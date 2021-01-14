import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from './Slider/Slider';
import Contents from './Contents';

const Section = () => {
  return (
    <>
      <Slider />
      <Contents />
    </>
  );
};

export default Section;

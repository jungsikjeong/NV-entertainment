import React, { useState } from 'react';
import * as S from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import main_visual01 from '../../assets/main_visual01.jpg';
import main_visual02 from '../../assets/main_visual02.jpg';

const sliderData = [
  {
    src: main_visual01,
  },
  {
    src: main_visual02,
  },
];

const Slider = () => {
  const [Current, setCurrent] = useState(0);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3300,
    beforeChange: (current, next) => setCurrent(next),
    afterChange: (current) => setCurrent(current),
  };

  return (
    <S.Container>
      <S.SliderWrapper>
        <S.SliderStyle {...settings}>
          {sliderData.map((slider, index) => (
            <div
              className={index === Current ? 'slider active' : 'slider'}
              key={index}
            >
              <img src={slider.src} alt="이미지" />
              <S.Inner>
                <div className="in_obj">
                  <span className="eng">NV ENTERTAINMENT</span>

                  <strong>
                    <b className="eng">1st Artist :</b>
                    <br />
                    <b className="eng">woo!ah!</b> (우아!)
                  </strong>

                  <div className="more">
                    <span className="more_text">
                      woo!ah! (우아!) 소개 바로가기
                    </span>
                  </div>
                </div>
              </S.Inner>
            </div>
          ))}
        </S.SliderStyle>
      </S.SliderWrapper>
    </S.Container>
  );
};

export default Slider;

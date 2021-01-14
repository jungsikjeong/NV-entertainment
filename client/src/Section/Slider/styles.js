import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';

const ani = keyframes`
    0% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1);
    }
   
`;

export const Container = styled.div`
  overflow-x: hidden;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  z-index: 3;

  .slider {
    @media (max-width: 768px) {
      height: 400px;
    }

    opacity: 0;
    transition-duration: 1s ease;
    height: 100%;

    img {
      max-width: 100%;
      margin: 0 auto;
      height: 100%;

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  .slider.active {
    opacity: 1;
    animation: ${ani} 3.5s infinite;
  }
`;

export const SliderStyle = styled(Slider)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  .slick-slide div {
    outline: none;
  }
`;

export const Inner = styled.div`
  width: 1260px;
  top: 55%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  .in_obj {
    @media (max-width: 768px) {
      padding: 0 1rem;
    }

    text-align: left;
    color: #ffffff;
    span {
      @media (max-width: 768px) {
        font-size: 16px;
      }
      font-size: 22px;
      line-height: 32px;
      display: block;
      font-weight: 500;
    }

    strong {
      @media (max-width: 768px) {
        line-height: 2.5rem;
      }

      text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
      display: block;
      width: 100%;
      margin-bottom: 32px;
      /* line-height: 6rem; */
      font-size: 5.5vw;
    }

    .eng {
      font-family: 'Ubuntu', sans-serif;
    }

    .more {
      @media (max-width: 768px) {
        width: 100%;
      }
      width: 25%;

      /* color: rgba(255, 255, 255, 0); */
      margin-top: 30px;
      cursor: pointer;
      /* position: relative; */
      /* transform: translate(0, 0); */
      /* opacity: 1; */
      /* transition: 1s; */
      /* transition-delay: 1s; */

      .more_text {
        @media (max-width: 768px) {
          padding: 12px 35px;
        }
        padding: 18px 50px;
        border: 2px solid #fff;
        font-weight: 600;
        color: #fff;
        font-size: 16px;
        letter-spacing: -1px;
        border-radius: 15px;
      }
    }
  }
`;

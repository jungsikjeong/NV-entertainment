import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 130px;
  overflow: hidden;
`;

export const Inner = styled.div`
  width: 1260px;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  margin: 0 auto;

  ul {
    @media (max-width: 768px) {
      display: block;
      padding: 0 1.7rem;
    }
    display: flex;
    padding-bottom: 50px;

    li {
      @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 1.5rem;
      }
      cursor: pointer;
      width: 31.333333333%;
      margin-right: 3%;

      .img_box {
        overflow: hidden;
        img {
          width: 100%;
          transform: scale(1);
          transition: transform 0.5s linear;
          :hover {
            transform: scale(1.1);
          }
        }
      }

      .text_box {
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.5px;
          color: #222;
          margin-bottom: 15px;
        }

        strong {
          @media (max-width: 768px) {
            font-size: 21px;
            line-height: 35px;
          }
          font-size: 25px;
          line-height: 46px;
          letter-spacing: -1px;
          color: #222222;
          height: 92px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        p {
          @media (max-width: 768px) {
            font-size: 14px;
            margin: 0;
            font-weight: 600;
            opacity: 0.8;
          }
          font-size: 16px;
          font-weight: 500;
          letter-spacing: -1px;
          color: #222222;
          line-height: 34px;
          margin-top: 10px;
          height: 102px;
          // 3문단을 넘어가면 ...로 말줄임표가 나타남
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
    li:last-child {
      margin-right: 0;
    }
  }
`;

export const Contents02 = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 130px;
  position: relative;

  @media (max-width: 860px) {
    padding: 70px 0;
    height: 100%;
  }

  ::after {
    content: '';
    display: block;
    width: 616px;
    height: 669px;
    background: url('http://nventertainment.net/img/main/con02_logo.png') center
      center no-repeat;
    position: absolute;
    right: 60px;

    @media (max-width: 640px) {
      width: 300px;
      height: 326px;
      background-size: 100% 100%;
      right: 0;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 582px;
  height: 100%;

  background-color: rgb(49 48 48);
  @media (max-width: 800px) {
    /* height: 1000px; */
  }
`;

export const Inner02 = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 800px) {
    padding: 0 20px;
  }

  .title {
    text-align: center;
    margin: 65px 0;
    z-index: 10;
    img {
      @media (max-width: 800px) {
        width: 150px;
      }
    }
  }

  ul {
    @media (max-width: 800px) {
      padding: 0;
    }
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 5rem;

    li {
      @media (max-width: 800px) {
        width: 50%;
        margin-bottom: 100px;
      }
      text-align: center;
      z-index: 10;
      cursor: pointer;

      .image_box {
        @media (max-width: 800px) {
          width: 120px;
          height: 120px;
        }

        width: 180px;
        height: 180px;
        transform: translate(0, 0);
        position: relative;
        transition: 0.6s;
        transition-delay: 0.2s;
        margin: 0 auto;

        :hover {
          transform: translate(0, -30px);
        }

        .hover_box {
          opacity: 0;
          transition: 0.3s;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: rgba(246, 27, 237, 0.8);

          :hover {
            opacity: 1;
            span:nth-child(1) {
              transform: translate(0, 0) rotate(-15deg);
              opacity: 1;
            }

            span:nth-child(2) {
              transform: translate(0, 0) rotate(-15deg);
              opacity: 1;
            }
          }

          span {
            display: block;
            width: 96px;
            height: 30px;
            background-color: #0c0c0c;
            line-height: 30px;
            text-align: center;
            color: #fff;
            font-weight: 500;
            font-size: 14px;
          }

          span:nth-child(1) {
            position: absolute;
            left: -20px;
            top: 45%;
            transform: translate(-20px, -20px) rotate(-15deg);
            transition: 0.5s;
            transition-delay: 0.1s;
            opacity: 0;
          }

          span:nth-child(2) {
            position: absolute;
            right: -20px;
            bottom: 13%;
            transform: translate(20px, 20px) rotate(-15deg);
            transition: 0.5s;
            transition-delay: 0.1s;
            opacity: 0;
          }
        }

        .wrap {
          overflow: hidden;
          border-radius: 50%;
          box-shadow: 20px 20px 24px rgba(0, 0, 0, 0.5);
          transition: 0.6s;
          img {
            width: 100%;
            display: block;
          }
        }

        .text_box {
          margin-top: 30px;

          img {
          }
        }
      }
    }
  }
`;

export const Contents03 = styled.div`
  /* padding: 100px 0; */
  padding-bottom: 100px;

  /* 768px */
  @media (max-width: 955px) {
    padding: 0 1.5rem;
  }

  .title {
    @media (max-width: 955px) {
      width: 100%;
    }
    width: 1260px;
    margin: 0 auto;
    padding-bottom: 2rem;

    h1 {
      font-size: 3rem;
      @media (max-width: 955px) {
        font-size: 2.5rem;
      }
    }
  }
`;

export const Inner03 = styled.div`
  width: 1260px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 955px) {
    width: 100%;
    flex-direction: column;
  }

  .left_box {
    width: 100%;
    max-width: 828px;

    .video_box {
      iframe {
        width: 100%;
        vertical-align: middle;
      }
    }

    .text_box {
      display: flex;
      flex-direction: column;
      border-top: 2px solid #000;
      margin-top: 1rem;
      padding: 1rem 0;

      span {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: -0.5px;
        color: #222222;
        margin-bottom: 15px;
      }

      strong {
        @media (max-width: 955px) {
          font-size: 22px;
        }
        font-size: 32px;
        font-weight: 600;
        letter-spacing: -1px;
        color: #222222;
      }
    }
  }

  .right_box {
    @media (max-width: 955px) {
      padding: 0rem;
    }
    padding-left: 2rem;

    ul {
      li {
        display: flex;
        width: 100%;
        cursor: pointer;

        .video_box {
          @media (max-width: 955px) {
            padding: 0;
            padding-right: 0.5rem;
          }
          padding: 0.5rem;
        }

        .text_box {
          @media (max-width: 955px) {
            padding: 0;
          }

          display: flex;
          align-items: center;
          padding: 1rem;

          strong {
            @media (max-width: 955px) {
              font-size: 14px;
              line-height: initial;
            }
            font-size: 16px;
            font-weight: 500;
            letter-spacing: -0.5px;
            line-height: 30px;
          }
        }
      }
    }
  }
`;

export const Contents04 = styled.div`
  @media (max-width: 955px) {
    margin-top: 2.5rem;
    padding: 40px 0px;
    background-position: right -400px center;
  }
  background-image: url('http://nventertainment.net/img/main/con04_bg.jpg');
  background-position: right center;
  background-repeat: no-repeat;
  padding-top: 60px;
  padding-bottom: 60px;
  color: #fff;
`;

export const Inner04 = styled.div`
  @media (max-width: 955px) {
    padding: 0 20px;
  }
  width: 1260px;
  margin: 0 auto;
  .text_box {
    display: flex;
    flex-direction: column;
    letter-spacing: -1px;

    .text_box-span {
      font-size: 1.2rem;
      font-weight: 600;
    }

    strong {
      font-size: 1.7rem;
      padding: 0.5rem 0 1.2rem 0;

      .span_size {
        font-size: 2rem;
      }
    }

    p {
      b::after {
        content: '';
        width: 53px;
        height: 1px;
        background-color: #d9e7ed;
        display: inline-block;
        margin: 0 13px;
        position: relative;
        top: -5px;
      }
    }

    .btn {
      width: 250px;
      padding: 14px 50px;
      margin-top: 3rem;
      border: 2px solid #fff;
      border-radius: 15px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0);
      font-size: 16px;
      letter-spacing: -1px;
      position: relative;
      z-index: 2;
      overflow: hidden;
      transition: 0.4s;

      :hover {
        ::before {
          transform: translate(-50%, -50%) scale(1);
          transition: 1s;
        }
        ::after {
          color: #313131;
        }
      }
    }

    .btn::before {
      content: '';
      display: block;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      z-index: 1;
    }

    .btn::after {
      content: '오디션 바로가기';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      font-weight: 500;
      color: rgb(255, 255, 255);
      font-size: 16px;
      letter-spacing: -1px;
      z-index: 3;
      box-sizing: border-box;
      padding: 14px 48px;
    }
  }
`;

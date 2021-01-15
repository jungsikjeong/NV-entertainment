import React from 'react';
import * as S from './styles';

import contents1 from '../../assets/contents1.jpg';
import contents2 from '../../assets/contents2.jpg';
import contents3 from '../../assets/contents3.jpg';

import contents2_1 from '../../assets/contents2-1.jpg';
import contents2_2 from '../../assets/contents2-2.jpg';
import contents2_3 from '../../assets/contents2-3.jpg';
import contents2_4 from '../../assets/contents2-4.jpg';
import contents2_5 from '../../assets/contents2-5.jpg';
import contents2_1name from '../../assets/contents2-1name.png';
import contents2_2name from '../../assets/contents2-2name.png';
import contents2_3name from '../../assets/contents2-3name.png';
import contents2_4name from '../../assets/contents2-4name.png';
import contents2_5name from '../../assets/contents2-5name.png';

const contentsData = [
  {
    src: `${contents1}`,
    title: `'노빠꾸 로맨스' 우아! 나나, 돋보이는 존재감…차세대 연기돌 예약
    (20.12.14)`,
    content: `'노빠꾸 로맨스' 우아! 나나, 돋보이는 존재감…차세대 연기돌
    예약2020.12.14웹드라마 ‘노빠꾸 로맨스’에 출연하는 우아! 나나가
    돋보이는 존재감으로 온라인을 뜨겁게 달구고 있다.지난 8일 오후
    8시 네이버TV 및 V LIVE(브이라이브)를 통해 ‘노빠꾸 로맨스’ 1회
    공개 후, 우아! 나나가 시청자들에게 확실히 눈도장을 찍었다.
    ‘노빠꾸 로맨스’는 잠든 사이 인생 첫 고백을 받은 열여섯 모쏠
    한소담(이다연 분)의 ‘고백남 찾기’를 그리는 웹드라마로 이중
    나나는 소담의 절친이자 여신미모를 탑재한 슈퍼인싸 ‘채보나’ 역을
    맡았다.(중략)기사 전문
    :https://entertain.naver.com/read?oid=311&aid=0001240426(출처 :
    엑스포츠뉴스 | 네이버 TV연예 )`,
  },
  {
    src: `${contents2}`,
    title:
      'woo!ah!(우아!), ‘BAD GIRL’ 베트남 음악 플랫폼 뮤비 차트 1위 (20.12.14)',
    content: `woo!ah!(우아!), ‘BAD GIRL’ 베트남 음악 플랫폼 뮤비 차트 1위2020.12.14woo!ah!(우아!)를 향한 감탄사가 베트남에서 이어지고 있다.우아의 소속사 엔브이(NV)엔터테인먼트는 14일 "woo!ah!(우아!)의 신곡 'BAD GIRL'이 베트남 최대 뮤직 플랫폼 NCT 뮤직비디오 차트 1위에 올랐다"라고 밝혔다.(중략)기사 전문 :https://entertain.naver.com/read?oid=382&aid=0000878001(출처 : 스포츠동아 | 네이버 TV연예 )`,
  },
  {
    src: `${contents3}`,
    title:
      '우아! (woo!ah!) ‘우릴 보면 감탄사가 절로 날 걸요’(영상 팬사인회) (20.12.12)',
    content: `우아! (woo!ah!) ‘우릴 보면 감탄사가 절로 날 걸요’(영상 팬사인회)2020.12.12기사 전문 :https://entertain.naver.com/read?oid=609&aid=0000371013(출처 : 뉴스엔 | 네이버 TV연예 )`,
  },
];

const contentsData2 = [
  {
    imgSrc: `${contents2_1}`,
    nameSrc: `${contents2_1name}`,
  },
  {
    imgSrc: `${contents2_2}`,
    nameSrc: `${contents2_2name}`,
  },
  {
    imgSrc: `${contents2_3}`,
    nameSrc: `${contents2_3name}`,
  },
  {
    imgSrc: `${contents2_4}`,
    nameSrc: `${contents2_4name}`,
  },
  {
    imgSrc: `${contents2_5}`,
    nameSrc: `${contents2_5name}`,
  },
];

const contentsData3 = [
  {
    imageSrc: 'http://img.youtube.com/vi/hPzz4cRxtco/mqdefault.jpg',
    title: 'woo!ah! (우아!) – ‘I Don’t Miss U’ M/V',
  },
  {
    imageSrc: 'http://img.youtube.com/vi/OHxPFiPMwGI/mqdefault.jpg',
    title: 'woo!ah! (우아!) – ‘I Don’t Miss U’ M/V Teaser 2',
  },
  {
    imageSrc: 'http://img.youtube.com/vi/C6R86dWne04/mqdefault.jpg',
    title: 'woo!ah! (우아!) – ‘I Don’t Miss U’ M/V Teaser 1',
  },
  {
    imageSrc: 'http://img.youtube.com/vi/xwDmGC2fTfU/mqdefault.jpg',
    title: 'woo!ah! (우아!) - ‘Bad Girl’ M/V',
  },
  {
    imageSrc: 'http://img.youtube.com/vi/H6C8R1o-Fd4/mqdefault.jpg',
    title: 'woo!ah! (우아!) - ‘Bad Girl’ M/V Teaser 2',
  },
  {
    imageSrc: 'http://img.youtube.com/vi/FrcJExuqBOA/mqdefault.jpg',
    title: 'woo!ah! (우아!) - ‘Bad Girl’ M/V Teaser 1',
  },
];

const Contents = () => {
  return (
    <S.Container>
      {/* Contents01 */}
      <S.Inner>
        <ul>
          {contentsData.map((item, index) => (
            <li key={index}>
              <div className="img_box">
                <img src={item.src} alt="" />
              </div>
              <div className="text_box">
                <span>NEWS</span>

                <strong>{item.title}</strong>
                <p>{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </S.Inner>
      <S.Contents02>
        <S.Wrapper>
          <S.Inner02>
            <div className="title">
              <img
                src="http://nventertainment.net/img/main/con02_title.png"
                alt=""
              />
            </div>
            <ul>
              {contentsData2.map((item, index) => (
                <li key={index}>
                  <div className="image_box">
                    <div className="hover_box">
                      <span>VIEW</span>
                      <span>GO!</span>
                    </div>
                    <div className="wrap">
                      <img src={item.imgSrc} alt="" />
                    </div>
                    <div className="text_box">
                      <img src={item.nameSrc} alt="" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </S.Inner02>
        </S.Wrapper>
      </S.Contents02>

      <S.Contents03>
        <div className="title">
          <h1>VIDEO</h1>
        </div>
        <S.Inner03>
          <div className="left_box">
            <div className="video_box">
              <iframe
                src="https://www.youtube.com/embed/hPzz4cRxtco"
                width="825"
                height="464"
                title="undefined"
              ></iframe>
            </div>
            <div className="text_box">
              <span>Music Video</span>
              <strong>woo!ah! (우아!) – ‘I Don’t Miss U’ M/V</strong>
            </div>
          </div>

          <div className="right_box">
            <ul>
              {contentsData3.map((item, index) => (
                <li key={index}>
                  <div className="video_box">
                    <img src={item.imageSrc} width="180" height="100" alt="" />
                  </div>
                  <div className="text_box">
                    <strong>{item.title}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </S.Inner03>
      </S.Contents03>

      <S.Contents04>
        <S.Inner04>
          <div className="text_box">
            <span className="text_box-span">NV엔터테이먼트</span>

            <strong>
              <span className="span_size">오디션</span>에 지원하세요!
            </strong>

            <p>
              <b>지원분야</b>뮤지션 · 배우 · 엔터테이너
            </p>

            <button className="btn">오디션 바로가기</button>
          </div>
        </S.Inner04>
      </S.Contents04>
    </S.Container>
  );
};

export default Contents;

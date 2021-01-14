import React from 'react';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <S.Inner>
        <img src="http://nventertainment.net/img/common/f_logo.jpg" alt="" />
        <span className="address">
          엔브이엔터테인먼트 / 대표 : 정중식 / 대한민국 어딘가에 거주
          (클론코딩완료)
        </span>

        <span className="copy_right">
          COPYRIGHT © NV ENTERTAINMENT ALL RIGHTS RESERVED.
        </span>
      </S.Inner>
    </S.Footer>
  );
};

export default Footer;

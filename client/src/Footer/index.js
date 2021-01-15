import React from 'react';
import * as S from './styles';

import footerLogo from '../assets/footerLogo.jpg';

const Footer = () => {
  return (
    <S.Footer>
      <S.Inner>
        <img src={footerLogo} alt="" />
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

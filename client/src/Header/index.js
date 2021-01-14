import React from 'react';
import * as S from './styles';
import logo from '../assets/logo.png';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>
          <img src={logo} alt="로고" />
        </S.Logo>
        <S.GlobalNav>
          <ul>
            <li>NV ENTERTAINMENT</li>
            <li>ARTISTS</li>
            <li>NEWS & NOTICE</li>
            <li>AUDITION</li>
          </ul>
        </S.GlobalNav>
        <S.RightMenu>
          <FiMenu />
        </S.RightMenu>
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;

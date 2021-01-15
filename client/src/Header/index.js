import React, { useEffect, useRef } from 'react';
import * as S from './styles';
import logo from '../assets/logo.png';
import logoBlack from '../assets/logoBlack.png';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const menuRef = useRef(null);
  const rightMenuRef = useRef(null);
  const globalNavRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    let yOffset = 0;

    function scrollFn() {
      if (yOffset > 40) {
        logoRef.current.src = `${logoBlack}`;
        menuRef.current.style.background = '#fff';
        globalNavRef.current.style.color = '#313131';
        rightMenuRef.current.style.border = '2px solid #000';
        rightMenuRef.current.style.color = '#000';
      } else {
        logoRef.current.src = `${logo}`;
        menuRef.current.style.background = 'transparent';
        globalNavRef.current.style.color = '#fff';
        rightMenuRef.current.style.border = '2px solid #fff';
        rightMenuRef.current.style.color = '#fff';
      }
    }

    window.addEventListener('scroll', () => {
      yOffset = window.pageYOffset;
      scrollFn();
    });
  }, []);
  return (
    <S.Container>
      <S.Wrapper ref={menuRef}>
        <S.Logo>
          <img src={logo} alt="로고" ref={logoRef} />
        </S.Logo>
        <S.GlobalNav ref={globalNavRef}>
          <ul>
            <li>NV ENTERTAINMENT</li>
            <li>ARTISTS</li>
            <li>NEWS & NOTICE</li>
            <li>AUDITION</li>
          </ul>
        </S.GlobalNav>
        <S.RightMenu ref={rightMenuRef}>
          <FiMenu />
        </S.RightMenu>
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;

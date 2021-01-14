import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow-x: hidden;

  color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 42px;

  /* 추후 스크롤되면 */
  /* background-color: #fff; */
  transition: 0.3s;
`;

export const Logo = styled.div`
  img {
    @media (max-width: 875px) {
      width: 70%;
    }
  }
`;

export const GlobalNav = styled.nav`
  max-width: 1260px;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: -1.5px;

  ul {
    display: flex;

    @media (max-width: 875px) {
      display: none;
    }

    li {
      padding: 0 30px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;
export const RightMenu = styled.div`
  display: block;
  margin-left: auto;
  font-size: 1.5rem;
  border: 2px solid #fff;
  padding: 1.5px 2.5px;
  border-radius: 15%;
  cursor: pointer;
`;

import styled from 'styled-components';

export const Footer = styled.div`
  @media (max-width: 800px) {
    padding: 40px 0;
  }

  padding: 24px 0;
  background-color: #1b1b1b;
`;

export const Inner = styled.div`
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    /* justify-content: center; */
  }
  width: 1260px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -1px;
  color: #666666;

  img {
    margin-right: 55px;
  }

  .address {
    @media (max-width: 800px) {
      margin-right: 0;
    }
    padding: 1rem 0;
    margin-right: auto;
  }
`;

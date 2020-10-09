import styled from 'styled-components';
import background from '../../images/background2.jpg';

export const HeroContainer = styled.div`
  background: url(${background}) center center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,0,2);
  object-fit: contain;
  margin-top: -80px;
  `;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 100px;
  margin-top: 30vh;
  
  @media screen and(max-width: 960px){
  font-size:70px;
  }
  
  @media screen and(max-width: 768px){
  font-size:60px;
  }
  `;

export const HeroP = styled.p`
  margin-top: 8px;
  color:#fff;
  font-size: 32px;
  
  @media screen and(max-width: 768px){
  font-size:30px;
  }
  `;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  `;

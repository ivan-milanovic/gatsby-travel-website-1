import styled from 'styled-components';
import Img from 'gatsby-image';

export const ImageContainer = styled.div`
  text-align: center;
  margin: 150px 0;
  `;

export const ImageH1 = styled.h1`
  margin-bottom: 64px;
  `;

export const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin:0 auto;
  width:100%;
  max-width: 1000px;
  padding: 0 32px;
   
  `;

export const Image = styled(Img)`

  &:nth-child(5){
  grid-column-end: span 2;
  }
  &:nth-child(9){
  grid-row-start: 4;
  grid-column-end: span 2;
 
  }
  &:hover{
  transform: scale(1.1);
  transition: 0.6s all ease !important;
  cursor:pointer;
  }
  `

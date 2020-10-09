import styled from 'styled-components';
import Img from 'gatsby-image';
export const ImageContainer = styled.div`
  text-align: center;
  margin: 150px;
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
  max-width: 1000px;
  padding: 0 32px;
  `;

export const Image = styled(Img)`
  
  `

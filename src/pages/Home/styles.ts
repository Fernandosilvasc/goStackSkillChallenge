import styled from 'styled-components';

import firstBackground from '../../assets/first-bg.jpg';
import secondBackground from '../../assets/second-bg.jpg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  border: 0.2px solid #f5f5f5;
  overflow: hidden;
`;

export const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 2175px;
  max-width: 1440px;
  background: url(${firstBackground}) no-repeat;
  margin: 0 auto;
  overflow: hidden;
`;

export const Blur = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 227px;
    height: 304px;
    margin-bottom: 100px;

    position: relative;
    right: -350px;
  }
`;

export const BoxIntro = styled.div`
  width: 702px;
  height: 723px;
  position: relative;
  top: -450px;
  margin: 150px;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
  }

  h2 {
    text-align: end;
    margin-top: 10px;
    margin-bottom: 70px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
  }

  p {
    margin-top: 25px;
    width: 639px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 640px;
  margin-right: 100px;
  color: white;
  position: relative;
  top: -280px;

  h1 {
    width: 580px;
    margin-right: 60px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
  }

  p {
    margin-top: 25px;
    width: 639px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
  }

  div {
    display: flex;
    width: 639px;
    height: 130px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    img {
      width: 96px;
      height: 96px;
      border-radius: 50px;
      margin-right: 20px;
    }

    div {
      display: flex;
      flex-direction: column;
      margin: 0;
      text-align: left;

      p {
        width: 500px;
        margin: 0;
      }

      span {
        width: 500px;
        margin-top: 10px;
        font-family: Poppins;
        font-style: italic;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;

export const SectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -10px;
  width: 100vw;
  max-width: 1440px;
  background: #000000 url(${secondBackground}) no-repeat;
  margin: 0 auto;
`;

export const ParallelogramBG = styled.div`
  display: 100vw;
  height: 700px;
  position: relative;
  top: -80px;
  background: rgba(245, 245, 245, 0.2);
  transform: skew(-10deg) rotate(-10deg);
`;

export const FilmDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 640px;
  margin-right: 100px;
  color: white;
  position: relative;
  top: -750px;

  div {
    display: flex;
    flex-direction: column;
    width: 630px;
    margin: 50px;
    h1 {
      margin-right: 60px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 120%;
    }

    p {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 32px;
      margin-top: 20px;
    }

    a {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      text-transform: uppercase;
      color: rgba(253, 180, 97, 0.82);
      margin-top: 20px;
      text-decoration: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const BoxContentTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 640px;
  margin-left: 150px;
  color: white;
  position: relative;
  top: -280px;

  h1 {
    width: 580px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin-bottom: 20px;
  }

  p {
    margin-top: 25px;
    width: 639px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
  }
`;

export const BoxContentThree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
  margin: 200px auto;

  img {
    width: 420px;
    height: 530x;
    margin-right: 100px;
  }

  div {
    p {
      width: 639px;
      margin-top: 20px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 32px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  position: relative;
  top: -10px;
  background: #000000;
  color: rgba(255, 255, 255, 0.6);
  span {
    margin: 0 auto;
    padding: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
  }
`;

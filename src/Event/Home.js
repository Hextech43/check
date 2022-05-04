import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container id="home">
      <Image src="/images/land3.webp" />

      <Wrapper>
        <Describe>13TH - 15TH MAY 2022, LAGOS NIGERIA.</Describe>
        <Titles>GLOBAL TRANSFORMATION CONFERENCE 2022</Titles>

        <Buttons><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScsuKfIwt-1qNgGl82y0BljqcoChxmVEPcTtDNaZg2Vo1o-Zg/viewform">Register Here</a></Buttons>
  

      </Wrapper>
    </Container>
  );
};

export default Home;
const Buttons = styled.div`
 position: relative;
  font-size: 20px;
  color: white;
  font-weight: 500;
  background-color: #ea0763;
  border-radius: 10px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  a{
  text-decoration:none;
  color:white;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -1;
`;

const Describe = styled.div`
  padding-top: 10px;
  position: relative;
  padding-left: 30px;
  padding-bottom: 10px;
  font-size: 25px;
  font-weight: 500;
  display: flex;
  text-align: center;
  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size:20px ;
  }
  
`;
const Titles = styled.div`

  padding-left: 30px;
  position: relative;
  padding-bottom: 30px;
  font-size: 50px;
  font-weight: 800;
  color: white;
  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size:30px ;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  color: white;
  font-weight: bold;



  
 :before {    
      content: "";
      background-image: url("/images/coverland.jpg");;
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.7;
}

  font-size: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1024) {
    text-align: center;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  position: relative;
 
`;

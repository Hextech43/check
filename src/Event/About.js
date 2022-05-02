import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container id="about">
      <Wrapper>
        <Pictures>
          <img src="/images/globalback.jpg" />
        </Pictures>
        <Composition>
          <About>About GTC</About>
          <Note>
          The beginning is now!

The future is here!

When Global Ambassadors meet, they impact the world.

The world needs great people with transformative insights to make it better.

We are glad to announce that over 200 amazing individuals have chosen to create generational impact and attain Global Relevance.

We call them the Global Transformation Ambassadors.

Our vision is to build a world of impact by equipping individuals with the knowledge, tools, and traits to make them globally relevant.

We Transform!
We Impact!
We are Relevant!

We have something huge planned for next month
          </Note>
        
        </Composition>
      </Wrapper>
    </Container>
  );
};

export default Home;
const Note = styled.div`

  font-size: 20px;
 
  
  /* margin-left: 10px; */
  opacity: 0.8;
  margin-bottom: 30px;
  margin-top: 10px;
  text-align: justify;
  @media screen and (max-width: 769px) {
margin-top:10px ;
}
`;
const About = styled.div`
margin-top:30px ;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 10px;
`;
const Profile = styled.div`
  display: flex;
  border: 1px solid #ff033a;
  margin: 10px;
  height: 40px;
  width: 100px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* margin-left: 100px; */
  margin-bottom: 30px;
`;
const Pictures = styled.div`
  flex-wrap:wrap ;
  border-radius: 10px;
  height: 400px;
  width:40% ;
  /* background: pink; */
  img {
    border-radius: 10px;
    height: 100%;
    width:100% ;
    object-fit: contain;
  }
  @media screen and (max-width: 769px) {

width: 100%;
}
`;
const Composition = styled.div`
  /* background: green; */
  /* font-size: 50px; */
  display: flex;
  flex-direction: column;
  color:black ;
  display: flex;
  width:40% ;
  @media screen and (max-width: 769px) {
width: 90%;
margin-top:10px ;
}
  
`;
const Wrapper = styled.div`
  display: flex;
 
  /* color: white; */
  height: 100%;
  width: 100%;
justify-content: space-evenly;
align-items:center;
  margin-left: 15px;
  margin-right: 15px;
  @media screen and (max-width: 769px) {
    margin-left: 0px;
  margin-right: 0px;
  
   flex-direction:column ;
  }
`;
const Container = styled.div`
  padding-top: 80px;

  height: 100%;
  min-height:70vh ;
  width: 100%;
  padding-bottom:20px ;
align-items: center;
justify-content: center;
color:black ;
  /* background-color: rgb(4, 4, 62); */
  background-color: white;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  @media screen and (max-width: 769px) {

   flex-direction:column ;
  }

`;

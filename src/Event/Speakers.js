import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";



const Home = () => {
  
  return (
    <Container id="host">
      <Serve>Meet Our Hosts/Panelists</Serve>
    
<MainContainer>
   
        <Wrapper>
          <a>
            <img src="/images/batly.jpg" />
            <span>DAY1: PANELIST 3
</span>
            <p>
            THE LADY CALLED BATLY         </p>
          </a>
        </Wrapper>
        <Wrapper>
          <a>
            <img src="/images/adedoyin.jpg" />
            <span>CHIEF HOST AND PANELIST 2</span>
            <p>
             
 ADEDOYIN OLUYEMI
 </p>
          </a>
        </Wrapper>
        <Wrapper>
          <a>
            <img src="/images/claire.png" />
            <span>THE CONVENER </span>
            <p>
            OKEKE VIVIAN CLAIRE
            </p>
          </a>
        </Wrapper>
        <Wrapper>
          <a>
            <img src="/images/mary.jpg" />
            <span>PANELIST</span>
            <p>
            MARY SABASTINE 
            </p>
          </a>
        </Wrapper>
        
        
        </MainContainer>

      
    </Container>
  );
};

export default Home;

const Serve = styled.div`
  font-weight: bold;
  font-size: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  margin-bottom:30px;
`;
const Wrapper = styled.div`
/* background:yellow ; */
  display: flex;
  height: 350px;
    width: 250px;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  color: white;
  margin: 20px;

  border-radius: 10px;
  /* background-image: url("/images/xd.gif"); */


  transform: scale(1);
  position: relative;
  img {
    border-radius: 10px;
    position: absolute;
    object-fit: cover;
    height: 350px;
    width: 250px;
    z-index: -1;
    opacity: 0.5;



  }
  a {

    height: 350px;
    width: 250px;
    align-items: center;
    justify-content: center;
    display: flex;
    text-align:center;
    flex-direction: column;
    span {
      font-weight: bold;
      font-size: 20px;
    }
    p {
      width: 80%;
      font-size: 15px;
      margin: 10px;
      
    }
  }

  
  &:hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: all 400ms;
    box-shadow: rgb(0 0 0/69%) 0 15px 35px -10px; 
    background: linear-gradient(#ff033a, #ff5349);
     /* background: rgba(255, 81, 173, 0.45); */
  }


 `;
const MainContainer = styled.div`
width:100% ;
height:100% ;
display: flex;
/* margin-bottom:30px ;
 */
margin-right:20px ;
/* background:red ; */
@media screen and (max-width: 769px) {
flex-direction:column ;
align-items:center
}

`;
const MainContainer2 = styled.div`
width:100% ;
height:100% ;
display: flex;
margin-top:30px ;
/* background:red ; */
@media screen and (max-width: 769px) {
flex-direction:column ;
align-items:center;
}

`;
const Container = styled.div`
  padding-top: 70px;
  position:relative ;
flex-wrap:wrap ;
  height: 100%;
  min-height:70vh ;
  width:100% ;
  /* margin: 20px; */
  /* background:green ; */
  background-color: rgb(4, 4, 62);
`;

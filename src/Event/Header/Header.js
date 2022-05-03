import React from "react";
import styled from "styled-components";
import MobileNav from "./MobileView";
// import { Link } from "react-router-dom";

import { MdHighlightOff } from "react-icons/md";
import {
  
    AiOutlineMenu,
  } from "react-icons/ai";


import * as Scroll from 'react-scroll';
let scroll    = Scroll.animateScroll;

let Link      = Scroll.Link;
const Header = () => {
  const [show, setShow] = React.useState(false)
  const handleShow =()=>{
      setShow(!show)
  }
  
  return (
      <>
    <Container>
      <Logo
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
       <img src="/images/globaL.jpg"/>
      </Logo>
      <Wrapper>
        <Link to="home">
          <a>
            <span>Home</span>
          </a>
        </Link>

        <Link
          to="about"
          // offset={-70}
          activeClass="active"
          smooth={true}
          duration={1000}
        >
          <a>
            <span>About</span>
          </a>
        </Link>

        <Link
          // offset={-70}
          activeClass="active"
          smooth={true}
          duration={1000}
          to="host"
        >
          <a>
            <span>hosts</span>
          </a>
        </Link>

        <Link
          // offset={-70}
          activeClass="active"
          smooth={true}
          duration={1000}
          to="speaker"
        >
          <a>
            <span>Speakers</span>
          </a>
        </Link>
      </Wrapper>
      <Hold>
      <AiOutlineMenu onClick={handleShow} />
      </Hold>
    
      <Buttons><a target="_blank" href="https://form.jotform.com/221222711927550">Book A Space</a></Buttons>
    </Container>
  {
    show?(
      <>
      <Container2 onClick={()=>{setShow(!show)}}>
       <Wrapper2>
          <Top>
            <Cancel>
              <MdHighlightOff onClick={handleShow} />
            </Cancel>
          </Top>
          <Rest>
            <Logo2 src="/images/globaL.jpg" />
            <Nav2>
              {" "}
              <MyLink to="home">
               
                <span>Home</span>
              </MyLink>
              <MyLink to="home">
           
                <span>About</span>
              </MyLink>
              <MyLink to="about">
            
                <span>About</span>
              </MyLink>
              <MyLink to="host">
               
                <span>Hosts/Panelists</span>
              </MyLink>
              <MyLink to="speaker">
         
                <span>Speakers</span>
              </MyLink>
            </Nav2>
            <Name>Conference</Name>
          </Rest>
        </Wrapper2>
      {/* </Fade> */}
    </Container2>
      </>
    ):null
  }
     </>
  );
};

export default Header;
const Hold = styled.div`
display:none ;
@media screen and (max-width: 768px) {
 display:unset ;
  }

`
const Buttons = styled.div`
  color: white;
  font-weight: 600;
  background-color: #ea0763;
  border-radius: 5px;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 30px; */
  a{
  text-decoration:none;
  font-color:white;
  }
  @media screen and (max-width: 768px) {
 display:none ;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items:center;
 
  text-decoration:none;
  /* width:100%; */

  a {
   margin-left: 25px;
   padding-left:15px ;
    display: flex;
    align-items: center;
    text-decoration:none;
 
    /* opacity:0.8; */

    span {
      font-size:18px ;
      text-transform: uppercase;
      font-weight: bold;
      position: relative;
      color:white;

      &:after {
        height: 3px;
        content: "";
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        bottom: 0;
        background: darkorange;
        transition: all 350ms;
        transform: scaleX(1);
        transform-origin: center-left;
        opacity:0;
      }
    }
    &:hover {
      cursor: pointer;
      opacity:1;
      
     span{
       color:white;
       }
       span:after{
         background-color:white;
         scale:(1.02);
         opacity:1;
       }
      
      }
    }
    @media screen and (max-width: 768px) {
 display:none ;
  }
  
`;
const Logo = styled.div`
 
 img{
      height: 50px; 
   width: 50px;
 object-fit:contain ;
 border-radius:50%;

  cursor: pointer;

 }
`;
const Container = styled.div`
  /* padding: 0px 10px; */
  position: fixed;
  z-index: 1;
  height: 70px;
  width: 100vw;
  display: flex;
  color: white;
  background-color: none;
  align-items: center;
  /* margin-bottom:70px; */
    background-color: rgb(4, 4, 62);

  justify-content: space-around;
`;


const Container2 = styled.div`

  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
  top: 0;
  @media screen and (min-width: 769px) {
 display:none ;
  }
`;

const Wrapper2 = styled.div`
  width: 300px;
  height: 90vh;
  background: white;
  border-radius: 0 0 10px 0;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 30px;
`;

const Rest = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Logo2 = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: contain;
`;

const Nav2 = styled.div`
  width: 100%;
  flex: 0.8;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-family: lobster;
  color: rgba(0, 0, 0, 0.3);
  font-size: 25px;
  /* margin-top: 50px; */
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  transition: 350ms;
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
  padding: 13px;
  border-radius: 7px;
  :hover {
    /* color: #0995ff; */
    background: rgba(0, 0, 0, 0.1);
  }
  span {
    margin-left: 5px;
  }
`;

const Cancel = styled.div`
  display: flex;
  margin-right: 10px;
  cursor: pointer;
  opacity: 0.5;
`;

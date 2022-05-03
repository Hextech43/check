import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";

const Footer = ({ txtA }) => {
  return (
    <Container txtA={txtA}>
      <Left txtA={txtA}>
        <Logo>TECH CONGRESS</Logo>
//         <Write txtA={txtA}>
//           oth rest of know draw fond post as. It agreement defective to
//           excellent. Feebly do engage of narrow. Extensive repulsive belonging
//           depending if promotion be zealously as
//         </Write>
        <Icon>
          <FaFacebook />
          <AiOutlineTwitter />
          <AiOutlineInstagram />
          <FaLinkedinIn />
        </Icon>
      </Left>
      <Right txtA={txtA}>
        <ListHolder txtA={txtA}>
          <ListHead>Companies</ListHead>
          <Lists>
            <List>Home</List>
            <List>Product</List>
            <List>About</List>
            <List>Partners</List>
            <List>Press</List>
            <List>Contact us</List>
          </Lists>
        </ListHolder>
        <ListHolder txtA={txtA}>
          <ListHead>Resources</ListHead>
          <Lists>
            <List>WhyOfficeSpace</List>
            <List>Customers Stories</List>
            <List>Blogs</List>
            <List>Guilds</List>
          </Lists>
        </ListHolder>
        <Text txtA={txtA}>
          Copyright
          <br /> @2022 Surprise steepest recurred landlord mr wandered amounted
          of. Continuing devonshire but considered its. Rose
        </Text>
      </Right>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
   background-color: rgb(4, 4, 62);
  color: white;
  display: flex;
  flex-direction: ${({ txtA }) => (txtA ? "column" : "unset")};
  align-items: ${({ txtA }) => (txtA ? "center" : "unset")};

  padding: 50px 20px;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  text-align: ${({ txtA }) => (txtA ? "center" : "unset")};
  display: flex;
  flex-direction: column;
  align-items: ${({ txtA }) => (txtA ? "center" : "unset")};
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: ${({ txtA }) => (txtA ? "column" : "unset")};
  align-items: ${({ txtA }) => (txtA ? "center" : "unset")};
  text-align: ${({ txtA }) => (txtA ? "center" : "unset")};
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 25px;
`;

const Write = styled.div`
  margin-top: 14px;
  max-width: 320px;
  font-size: 14px;
  text-align: ${({ txtA }) => (txtA ? "center" : "justify")};
  font-weight: 500;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Icon = styled.div`
  margin-top: 20px;
  color: #ff5200;
  font-size: 25px;
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListHolder = styled.div`
  margin-right: ${({ txtA }) => (txtA ? "unset" : "60px")};
  margin-top: ${({ txtA }) => (txtA ? "40px" : "unset")};
  @media screen and (max-width: 768px) {
    margin-right: unset;
    margin-top: 40px;
  }
`;

const ListHead = styled.div`
  font-weight: 800;
  font-size: 18px;
`;

const Lists = styled.div`
  margin-top: 20px;
`;

const List = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;

const Text = styled.div`
  max-width: 250px;
  font-size: 15px;
  margin-top: ${({ txtA }) => (txtA ? "40px" : "unset")};
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  tranform: translateX(0vw);
`;

const Slide = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const handleClick = (direction, setIndex, index, length) => {
  if (direction === "left") {
    setIndex(index - 1);
  } else {
    setIndex(index + 1);
  }
};

const Slider = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
          <Slide bg="fbf0f4">
            <ImgContainer>
              <Image src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
            </ImgContainer>
            <InfoContainer>
              <Title>Summer Sale</Title>
              <Description>
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
              </Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
          <Slide bg="fcf1ed">
            <ImgContainer>
              <Image src="https://images.unsplash.com/photo-1618274158638-41d9f8d9279d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </ImgContainer>
            <InfoContainer>
              <Title>Winter Call</Title>
              <Description>
                LOOK CUTE FOR THE HOLIDAYS! GET FLAT 80% OFF FOR NEW ARRIVALS
              </Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;

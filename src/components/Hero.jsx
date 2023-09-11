import styled from "styled-components";
import Carousel from "./Carousel";
const Hero = () => {
  return (
    <Wrapper>
      <Carousel />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .carousel img {
    width: 100%;
    height: auto;
    max-height: 90vh;
  }
  .carousel {
    width: 100%;
    overflow: hidden;
  }
`;

export default Hero;

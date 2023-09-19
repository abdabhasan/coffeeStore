import { useState } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel({ slide1, slide2, slide3, text1, text2, text3 }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Wrapper>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={slide1} alt="قهوة" />
          <Carousel.Caption>
            <h3>{text1}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide2} alt="قهوة" />
          <Carousel.Caption>
            <h3>{text2}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide3} alt="قهوة" />
          <Carousel.Caption>
            <h3>{text3}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
}

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

export default ControlledCarousel;

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={slide1} alt="قهوة" />
        <Carousel.Caption>
          <h3>نصنع القهوة بحب</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide2} alt="قهوة" />
        <Carousel.Caption>
          <h3>أجود أنواع الحبوب</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide3} alt="قهوة" />
        <Carousel.Caption>
          <h3>قهوة مميزة</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

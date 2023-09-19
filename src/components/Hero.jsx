import Carousel from "./Carousel";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
const Hero = () => {
  return (
    <>
      <Carousel
        slide1={slide1}
        slide2={slide2}
        slide3={slide3}
        text1={"نصنع القهوة بحب"}
        text2={"أجود أنواع الحبوب"}
        text3={"قهوة مميزة"}
      />
    </>
  );
};

export default Hero;

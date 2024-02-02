import React, { useState, useEffect } from "react";
import { CarouselContainer, CarouselImg, NavButton } from "./CarouselStyles";
import Postes1 from '../assets/img/Postes1.jpg';
import Tubo2 from '../assets/img/Tubo1.jpg';
import Tubo3 from '../assets/img/Tubo2.jpg';
import Tubo1 from '../assets/img/Tubo3.jpg';

const images = [Postes1, Tubo2, Tubo3, Tubo1];

export default function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [selectedIndex, images]);

  const selectNewImage = (index, images, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <CarouselContainer>
      <NavButton left onClick={previous}>{"<"}</NavButton>
      <CarouselImg
        src={selectedImage}
        alt="tubos.jpg"
      />
      <NavButton right onClick={next}>{">"}</NavButton>
    </CarouselContainer>
  );
}

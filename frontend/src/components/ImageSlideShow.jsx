
import React from "react";

import Slider from "react-slick";
import Image1 from "../images/image1.webp";
import Image2 from "../images/image2.webp";
import Image3 from "../images/image3.webp";

import { Box } from "@mui/material";
export default function ImageSlideShow() {
    const images = [Image1, Image2, Image3];
    var setting1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      swipeToSlide: true,
    };
    var imgs = images.map((img) => (
      <img src={img} />
    ));
  return (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          width: "80vw",
          margin: " 10px auto 0 auto",
        }}
      >
        <Slider {...setting1}>{imgs}</Slider>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "block", md: "none" },
          width: "50vw",
          margin: " 10px auto 0 auto",
        }}
      >
        <Slider {...setting1}>{imgs}</Slider>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "30vw",
          margin: " 10px auto 0 auto",
        }}
      >
        <Slider {...setting1}>{imgs}</Slider>
      </Box>
    </>
  );
}

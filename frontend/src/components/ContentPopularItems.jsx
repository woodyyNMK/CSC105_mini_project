import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card2 from "./Card2";
export default function ContentPopularItems() {
  const items = [
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
    },
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
    },
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
    },
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
    },
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
    },
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
    },
  ];
  var setting1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
  };
  var setting2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
  };
  var setting3 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
  };

  return (
    <>
      <Grid container sx={{ p: 3, display: { xs: "block", sm: "none" } }}>
        <Typography component="div" variant="h4" style={{ color: "black" }}>
          Popular Items
        </Typography>
        <br />
        <Slider {...setting1}>
          {items.map((item) => (
            <div key={Math.random()}>
              <Card2 image={item.image} price={item.price} name={item.name} />
            </div>
          ))}
        </Slider>
      </Grid>
      <Grid
        container
        sx={{ p: 3, display: { xs: "none", sm: "block", md: "none" } }}
      >
        <Typography component="div" variant="h4" style={{ color: "black" }}>
          Popular Items
        </Typography>
        <br />
        <Slider {...setting2}>
          {items.map((item) => (
            <div key={Math.random()}>
              <Card2 image={item.image} price={item.price} name={item.name} />
            </div>
          ))}
        </Slider>
      </Grid>
      <Grid
        container
        sx={{ p: 3, display: { xs: "none", sm: "none", md: "block" } }}
      >
        <Typography component="div" variant="h4" style={{ color: "black" }}>
          Popular Items
        </Typography>
        <br />
        <Slider {...setting3}>
          {items.map((item) => (
            <div key={Math.random()}>
              <Card2 image={item.image} price={item.price} name={item.name} />
            </div>
          ))}
        </Slider>
      </Grid>
    </>
  );
}

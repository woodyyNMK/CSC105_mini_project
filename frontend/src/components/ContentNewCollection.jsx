import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "./Card1";
export default function ContentNewCollection() {
  const items = [
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis minima excepturi quas, vitae nobis atque? Earum deserunt veniam perferendis enim ex similique, iste atque mollitia quibusdam expedita amet quidem quaerat?"
    },
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis minima excepturi quas, vitae nobis atque? Earum deserunt veniam perferendis enim ex similique, iste atque mollitia quibusdam expedita amet quidem quaerat?"
    },
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis minima excepturi quas, vitae nobis atque? Earum deserunt veniam perferendis enim ex similique, iste atque mollitia quibusdam expedita amet quidem quaerat?"
    },
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis minima excepturi quas, vitae nobis atque? Earum deserunt veniam perferendis enim ex similique, iste atque mollitia quibusdam expedita amet quidem quaerat?"
    },
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis minima excepturi quas, vitae nobis atque? Earum deserunt veniam perferendis enim ex similique, iste atque mollitia quibusdam expedita amet quidem quaerat?"
    },
    {
      image: "./assets/card2.jpg",
      price: "$49.99",
      name: "Tonal Hoodie",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis minima excepturi quas, vitae nobis atque? Earum deserunt veniam perferendis enim ex similique, iste atque mollitia quibusdam expedita amet quidem quaerat?"
    },
  ];
  var setting1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  var setting2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

  };
  var setting3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

  };

  return (
    <>

      <Grid
        container
        sx={{ p: 3, display: { xs: "block", sm: "none"} }}
      >
        <Typography component="div" variant="h4" style={{ color: "black" }}>
          New Collections
        </Typography>
        <br />
        <Slider {...setting1}>
        {items.map((item) => (
            <div key={Math.random()}>
              <Card1 image={item.image} price={item.price} name={item.name} description={item.description} />
            </div>
          ))}
      </Slider>
      </Grid>
      <Grid
        container
        sx={{ p: 3, display: { xs:"none",sm: "block", md: "none"} }}
      >
        <Typography component="div" variant="h4" style={{ color: "black" }}>
          New Collections
        </Typography>
        <br />
        <Slider {...setting2}>
        {items.map((item) => (
            <div key={Math.random()}>
              <Card1 image={item.image} price={item.price} name={item.name} description={item.description} />
            </div>
          ))}
      </Slider>
      </Grid>
      <Grid
        container
        sx={{ p: 3, display: {xs: "none",sm:"none" ,md: "block"} }}
      >
        <Typography component="div" variant="h4" style={{ color: "black" }}>
          New Collections
        </Typography>
        <br />
        <Slider {...setting3}>
        {items.map((item) => (
            <div key={Math.random()}>
              <Card1 image={item.image} price={item.price} name={item.name} description={item.description} />
            </div>
          ))}
      </Slider>
      </Grid>
      
    </>
  );
}

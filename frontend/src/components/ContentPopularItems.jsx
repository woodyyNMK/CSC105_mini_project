import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card2 from "./Card2";
import { AxiosError } from "axios";
import Axios from "./AxiosFront";
import { useState } from "react";
export default function ContentPopularItems() {
  const [popularItems, setPopularItems] = useState([]);
  React.useEffect(() => {
    // 2. call API to get items
    Axios.get("/popular_items").then((res) => {
      // 3. set items to state
      setPopularItems(res.data.data);
    });
  }, []);
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
          {popularItems.map((item) => (
            <>
              <Card2
                name={item.product_name}
                image={item.product_image}
                price={item.product_price}
              />
            </>
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
          {popularItems.map((item) => (
            <>
              <Card2
                name={item.product_name}
                image={item.product_image}
                price={item.product_price}
              />
            </>
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
          {popularItems.map((item) => (
            <>
              <Card2
                name={item.product_name}
                image={item.product_image}
                price={item.product_price}
              />
            </>
          ))}
        </Slider>
      </Grid>
    </>
  );
}

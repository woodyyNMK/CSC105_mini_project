import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "./Card1";
import { AxiosError } from "axios";
import Axios from "./AxiosFront";
import { useState } from "react";
export default function ContentNewCollection() {
  const [newItems, setNewItems] = useState([]);
  React.useEffect(() => {
    // 2. call API to get items
    Axios.get("/new_items").then((res) => {
      // 3. set items to state
      setNewItems(res.data.data);
    });
  }, []);
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
      <Grid container sx={{ p: 3, display: { xs: "block", sm: "none" } }}>
        <Typography component="div" variant="h4" style={{ color: "black" }}>
          New Collections
        </Typography>
        <br />
        <Slider {...setting1}>
          {newItems.map((item) => (
            <>
              <Card1
                name={item.product_name}
                image={item.product_image}
                description={item.desc}
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
          New Collections
        </Typography>
        <br />
        <Slider {...setting2}>
          {newItems.map((item) => (
            <>
              <Card1
                name={item.product_name}
                image={item.product_image}
                description={item.desc}
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
          New Collections
        </Typography>
        <br />
        <Slider {...setting3}>
          {newItems.map((item) => (
            <>
              <Card1
                name={item.product_name}
                image={item.product_image}
                description={item.desc}
              />
            </>
          ))}
        </Slider>
      </Grid>
    </>
  );
}

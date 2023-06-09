import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import { AxiosError } from "axios";
import Axios from "../components/AxiosFront";
import GlobalContext from "../components/GlobalContext";
import Cookies from "js-cookie";
export default function ItemDetail() {
  const { user, setUser, setStatus, items, setItems } =
  React.useContext(GlobalContext);
  const { id } = useParams();
  const [details, setDetails] = useState({});
  React.useEffect(() => {
    // 2. call API to get items
    Axios.get(`/ItemDetail/${id}`).then((res) => {
      // 3. set items to state
      setDetails(res.data.data);
    });
  }, []);

  const product_id=id;
  const product_name=details.product_name;
  const product_price=details.product_price;
  const product_image=details.product_image; 
  // const userToken = Cookies.get('user');
  const itemAdd = () => {
      // 1. call API to delete item
    const userToken = Cookies.get('user');
    if (userToken !== undefined && userToken !== "undefined") {
    Axios.post(`/ItemDetail/${id}`,{product_id,product_name,product_price,product_image}
    ,{
      headers: { 
        "Authorization": `Bearer ${userToken}` 
      }
    }
    ).then((res) =>{
      setStatus({
        msg: 'Add Item successfully',
        severity: 'success'
      });
    });
  }
};
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
  const chips = {
    backgroundColor: "#BFACE2",
    "&:hover": {
      backgroundColor: "#BFACE2",
    },
    color: "black",
    border: "1px solid #BFACE2",
    borderRadius: "30px",
    textTransform: "none",
    padding: "8px 0 8px 0",
    boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
    fontWeight: "bolder",
  };
  return (
    <>
      <Box>
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            width: "80vw",
            margin: " 10px auto 0 auto",
          }}
        >
          <Slider {...setting1}>
            <img src={details.image1} />
            <img src={details.image2} />
            <img src={details.image3} />
          </Slider>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "block", md: "none" },
            width: "50vw",
            margin: " 10px auto 0 auto",
          }}
        >
          <Slider {...setting1}>
            <img src={details.image1} />
            <img src={details.image2} />
            <img src={details.image3} />
          </Slider>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "30vw",
            margin: " 10px auto 0 auto",
          }}
        >
          <Slider {...setting1}>
            <img src={details.image1} />
            <img src={details.image2} />
            <img src={details.image3} />
          </Slider>
        </Box>
      </Box>

      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
          backgroundColor: "#E5E0FF",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="div"
            variant="h4"
            style={{ color: "black", marginTop: "10px" }}
          >
            {details.product_name}
          </Typography>

          <Typography
            variant="body2"
            style={{
              color: "black",
              textAlign: "justify",
              fontWeight: "lighter",
            }}
          >
            Price : ${details.product_price}
            {/* {JSON.stringify(userToken)} */}
          </Typography>
        </Box>
        <Box sx={{ p: 3 }}>{details.product_desc}</Box>
        {user ? (<Button sx={chips} 
                style={{ marginBottom: "20px", minWidth: "50vw" }}
                onClick={itemAdd}
                >
          Add To Cart
        </Button>): (<Button sx={chips} 
                style={{ marginBottom: "20px", minWidth: "50vw" }}
                onClick={itemAdd}
                disabled
                >
          Add To Cart
        </Button>)}
        <hr
          style={{
            width: "80vw",
            height: "3px",
            margin: "auto",
            backgroundColor: "#BFACE2",
          }}
        />
        <Box sx={{ p: 3 }}>
          <Typography variant="h5">{details.desc1}</Typography>
          <Typography>{details.desc2}</Typography>
          <Typography>{details.desc3}</Typography>
          <br />
          <Typography sx={{ margin: "auto", width: "80vw" }}>
            {details.desc}
          </Typography>
        </Box>
        <hr
          style={{
            width: "80vw",
            height: "3px",
            margin: "auto",
            backgroundColor: "#BFACE2",
          }}
        />
        <Box sx={{ p: 3 }}>
          <Typography sx={{ margin: "auto", width: "80vw" }}>
            {details.desc}
            {details.desc}
            {details.desc}
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { AxiosError } from "axios";
import Axios from "./AxiosFront";
import { useState } from "react";
import GlobalContext from "./GlobalContext";
import Card4 from "./Card4";
import Cookies from "js-cookie";

const Cart = ({
  handleCartOpen = { handleCartOpen },
  openCartModal = false,
  setOpenCartModal = () => {},
}) => {
  const { user, setUser, setStatus,items,setItems} = React.useContext(GlobalContext);
  React.useEffect(() => {
    // TODO: Implement get notes by user's token
    // 1. check if user is logged in
    const userToken = Cookies.get("user");
    if (userToken !== undefined && userToken !== "undefined") {
      // 2. call API to get items
      Axios.get("/Cart_items", {
        headers: { Authorization: `Bearer ${userToken}` },
      }).then((res) => {
        // 3. set items to state
        setItems(res.data.data);
      });
    }
  }, [user]);

  const handleClose = () => {
    setOpenCartModal(false);
  };

  const modalStyle = {
    position: "absolute",
    bgcolor: "#E5D1FA",
    width: { xs: "100%", md: "60%" },
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    alignItems: "center",
    justifyContent: "center",
    direction: "column",
  };
  const headerTextStyle = {
    fontFamily: "Roboto",
    fontSize: { xs: "20px", md: "30px" },
  };
  return (
    <Box>
      <Modal open={openCartModal} onClose={handleClose}>
        <Box
          sx={modalStyle}
          style={{ borderRadius: "30px"}}
          minHeight={"50vh"}
          maxHeight={"100vh"}
        >
            {/* {JSON.stringify(items, 2, null)} */}
          <br />
          <IconButton onClick={handleClose} style={{ marginLeft: "10px" }}>
            <CloseIcon />
          </IconButton>
          <br />
          <Typography sx={headerTextStyle} style={{ textAlign: "center" }}>
            CART
          </Typography>
          {/* {JSON.stringify(userToken)} */}
          {/* <Card4 image={item.image} price={item.price} name={item.name}  /> */}
          {user ? (
            items.length === 0 ? (
              <Typography
                textAlign="center"
                fontSize={18}
                color="white"
                fontWeight={300}
                marginTop={8}
              >
                No Items to show... <br />
                Let's browse new items.
              </Typography>
            ) : (
              <Box>
                {items.map((item) => (
                    <>
                    <Card4
                      name={item.product_name}
                      price={item.product_price}
                      image={item.product_image}
                      itemId={item.id}
                    />
                    <br/>
                    </>
                ))}
              </Box>
            )
          ) : (
            <Typography
              textAlign="center"
              fontSize={18}
              color="white"
              fontWeight={300}
              marginTop={8}
            >
              Please login first to see items in cart.
            </Typography>
          )}
        </Box>
      </Modal>
    </Box>
  );
};
export default Cart;

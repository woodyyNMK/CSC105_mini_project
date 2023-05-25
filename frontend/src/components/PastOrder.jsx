import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import * as React from "react";
import GlobalContext from "./GlobalContext";
import Card5 from "./Card5";

const PastOrder = ({
  handlePastOrderOpen = { handlePastOrderOpen },
  openPastOrderModal = false,
  setOpenPastOrderModal = () => {},
}) => {
  const { user, setUser, setStatus, items, setItems,pastItems,setPastItems } =
    React.useContext(GlobalContext);
  const handleClose = () => {
    setOpenPastOrderModal(false);
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
    <Box>
      <Modal open={openPastOrderModal} onClose={handleClose}>
        <Box
          sx={modalStyle}
          style={{ borderRadius: "30px" }}
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
            Past Orders
          </Typography>
          {/* {JSON.stringify(userToken)} */}
          {user ? (
            pastItems.length === 0 ? (
              <Typography
                textAlign="center"
                fontSize={18}
                color="white"
                fontWeight={300}
                marginTop={8}
              >
                No Items to show... <br />
                Let's buy new items.
              </Typography>
            ) : (
              <Box sx={{display:"flex", flexDirection:"column",alignItems:"center"}}>
              <Box>
                {pastItems.map((item) => (
                  <>
                    <Card5
                      name={item.product_name}
                      price={item.product_price}
                      image={item.product_image}
                    />
                    <br />
                  </>
                ))}
              </Box>
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
              Please login first to see purchased items in cart.
            </Typography>
          )}
        </Box>
      </Modal>
    </Box>
  );
};
export default PastOrder;
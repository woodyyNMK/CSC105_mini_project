import {
  Button,
  AppBar,
  IconButton,
  Box,
  Toolbar,
  Drawer,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import {
  AccountCircle,
  Close,
  Home,
  Login,
  Logout,
  History,
  Menu,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import { useContext,useState } from "react";
import React from "react"
import LogIn from "./LogIn"
import Cart from "./Cart"
import PastOrder from "./PastOrder"
import GlobalContext from '../components/GlobalContext';
import Cookies from "js-cookie";
import { AxiosError } from "axios";
import Axios from "./AxiosFront";
import { useNavigate } from "react-router-dom";
export default function NavTop1() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpen = () => setOpenLoginModal(true);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openPastOrderModal, setOpenPastOrderModal] = useState(false);
  const {user,setUser,setStatus,items,setItems,pastItems,setPastItems} = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleCartOpen = () => {
    setOpenCartModal(true);
    const userToken = Cookies.get("user");
    if (userToken !== undefined && userToken !== "undefined") {
      // 2. call API to get items
      Axios.get("/Cart_items", {
        headers: { Authorization: `Bearer ${userToken}` },
      }).then((res) => {
        // 3. set items to state
        setItems(res.data.data);
        setStatus({
          msg : "loaded the items in cart"
        })
      });
    }
  }
  const handlePastOrderOpen = () => {
    setOpenPastOrderModal(true);
    const userToken = Cookies.get("user");
    if (userToken !== undefined && userToken !== "undefined") {
      // 2. call API to get items
      Axios.get("/Past_items", {
        headers: { Authorization: `Bearer ${userToken}` },
      }).then((res) => {
        // 3. set items to state
        setPastItems(res.data.data);
        setStatus({
          msg : "loaded the purchased items in cart"
        })
      });
    }
  }
  
  const buttonWrap = {
    backgroundColor: "#E3DFFD",
    border: "1px solid black",
    borderRadius: "30px",
  };
  const bL = {
    color: "black",
    "&:hover": {
      backgroundColor: "#E3DFFD",
    },
    borderRight: "1px solid black",
    backgroundColor: "#E3DFFD",
    borderRadius: "30px 0 0 30px",
  };
  const bR = {
    color: "black",
    "&:hover": {
      backgroundColor: "#E3DFFD",
    },
    backgroundColor: "#E3DFFD",
    borderRadius: "0 30px 30px 0",
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div>
      <AppBar style={{ backgroundColor: "#BFACE2" }} position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton edge="start" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
          <Box marginLeft={"60px"}>
            <img src="./assets/logo.svg" />
          </Box>
          <Box sx={buttonWrap}>
            <Button sx={bL} style={{ maxWidth: "40px", minWidth: "40px" }}>
              <Search />
            </Button>
            {/* {JSON.stringify(user)} */}
            {user ? (<Button sx={bR} style={{ maxWidth: "40px", minWidth: "40px" }} onClick={handleCartOpen}><ShoppingCart /></Button>) 
            : (<Button sx={bR} style={{ maxWidth: "40px", minWidth: "40px" }} onClick={handleOpen}><AccountCircle /></Button>)}
            <LogIn handleOpen={handleOpen} open={openLoginModal} setOpen={setOpenLoginModal} />
            <Cart handleCartOpen={handleCartOpen} openCartModal={openCartModal} setOpenCartModal={setOpenCartModal}/>
            <PastOrder handlePastOrderOpen={handlePastOrderOpen} openPastOrderModal={openPastOrderModal} setOpenPastOrderModal={setOpenPastOrderModal} />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block" },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          style={{
            height: "100%",
            background: "#E5D1FA",
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}></Box>
            <IconButton onClick={handleDrawerToggle}>
              <Close />
            </IconButton>
          </Toolbar>
          <List>
            <ListItem>
              <ListItemButton onClick={()=>navigate(`/`)}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={handleCartOpen}>
                <ListItemIcon>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary={"Cart"} />
              </ListItemButton>
            </ListItem>
            
            {user ?
              (<>
              <ListItem>
                <ListItemButton 
                  onClick={handlePastOrderOpen}
                >
                <ListItemIcon>
                  <History/>
                </ListItemIcon>
                <ListItemText primary={"Past Orders"} />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton 
                  // onClick={handleOpen}
                >
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary={"Log Out"} />
                </ListItemButton>
              </ListItem>
              </>
              )
              :
              (<ListItem>
                <ListItemButton
                  onClick={handleOpen}
                >
                <ListItemIcon>
                  <Login />
                </ListItemIcon>
                <ListItemText primary={"Log In"} />
                </ListItemButton>
              </ListItem>
              )
            }
            
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

import {
  Button,
  AppBar,
  IconButton,
  Box,
  Toolbar,
  Drawer,
  MenuList,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import {
  AccountCircle,
  Close,
  ExitToApp,
  Favorite,
  Home,
  Login,
  Logout,
  Menu,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import Login from "./Login"
export default function NavTop1() {
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
            <Button sx={bR} style={{ maxWidth: "40px", minWidth: "40px" }}>
              <ShoppingCart />
            </Button>
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
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary={"Cart"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Favorite />
                </ListItemIcon>
                <ListItemText primary={"WishList"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary={"Log Out"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

import { Box, Button, Grid, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import SearchBar1 from "./SearchBar1";
import Card3 from "./Card3";
import { AccountCircle, Search } from "@mui/icons-material";

export default function SeachContent() {

  return (
    <>
        <Box sx={{display: "flex",
    flexDirection: "column",
    alignItems:"center",marginTop:1}}> 
        <SearchBar1/>
        </Box>
        <Box
          style={{
            background: "#BFACE2",
            borderRadius :"30px 30px 0 0"
          }}
        >
        <Toolbar sx={{ justifyContent: "space-evenly", marginTop:3, padding:0 }}>
                <Button style={{color: "black"}}>New In</Button>
                <Button style={{color: "black"}}>Ready To Wear</Button>
        </Toolbar>
        <hr style={{width:"100vw",height:"4px", margin:"auto" , backgroundColor:"#E5E0FF"}}/>
        <Grid container sx={{ p: 3}}>
        <br />
        <Grid container rowSpacing={4} columnSpacing={3}>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card3 />
          </Grid>
        </Grid>
      </Grid>
        </Box>
        </>
  );
}

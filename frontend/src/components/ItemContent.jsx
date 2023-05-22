import { Box, Button, Grid, Typography } from "@mui/material";

export default function ItemContent() {
    const chipsW ={
        backgroundColor: "#655DBB",
        "&:hover": {
            backgroundColor: "#655DBB",
        },
        color: "white",
        border: "1px solid #655DBB",
        borderRadius: "30px",
        textTransform:"none",
        padding: "8px 0 8px 0",
        boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
        fontWeight:"bolder"
    }
    const chips ={
        backgroundColor: "#BFACE2",
        "&:hover": {
            backgroundColor: "#BFACE2",
        },
        color: "black",
        border: "1px solid #BFACE2",
        borderRadius: "30px",
        textTransform:"none",
        padding: "8px 0 8px 0",
        boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
        fontWeight:"bolder"
    }
  return (
    <>
    <Grid container sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
        backgroundColor:"#E5E0FF",
        borderRadius:"20px 20px 0 0",
      }} >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <Typography component="div" variant="h4" style={{ color: "black",marginTop:"10px" }}>
          Comfort Hoodie
        </Typography>
        
          <Typography
            variant="body2"
            style={{
              color: "black",
              textAlign: "justify",
              fontWeight: "lighter",
            }}
          >
             Price : $49.99
          </Typography>
          </Box>
          <Box sx={{p:3}}>
              <Typography sx={{margin:"auto" , width:"80vw"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Box>
          <Button sx={chipsW} style={{marginBottom:"20px", minWidth: "50vw"}}>Check Out</Button>
          <Button sx={chips} style={{marginBottom:"20px", minWidth: "50vw"}}>Add To Cart</Button>
          <hr style={{width:"80vw",height:"3px", margin:"auto" , backgroundColor:"#BFACE2"}}/>
          <Box sx={{p:3}}>
            <Typography variant="h5">Exclusive Service</Typography>
            <Typography>Complimentary Express Shipping & Returns</Typography>
            <Typography>Online Assistance</Typography>
            <br/>
          <Typography sx={{margin:"auto" , width:"80vw"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Box>
            <hr style={{width:"80vw",height:"3px", margin:"auto" , backgroundColor:"#BFACE2"}}/>
            <Box sx={{p:3}}>
          <Typography sx={{margin:"auto" , width:"80vw"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Box>
      </Grid>
    </>
  );
}

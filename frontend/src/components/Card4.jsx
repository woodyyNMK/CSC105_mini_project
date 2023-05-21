import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import DeleteIcon from '@mui/icons-material/Delete';
  
  export default function Card4({image, price, name}) {
    const chips = {
      backgroundColor: "#BFACE2",
      "&:hover": {
        backgroundColor: "#BFACE2",
      },
      color: "black",
      border: "1px solid #BFACE2",
      borderRadius: "15px",
      textTransform: "none",
      boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
    };
  
    return (
      <Card
        sx={{ display: "flex",flexGrow:1 }}
        style={{
          backgroundColor: "#655DBB",
          borderRadius: "10px",
          boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
          margin: "0 10px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "15%", padding: "15px 10px" }}
          style={{ borderRadius: "30px" }}
          image={image}
          alt="Hoodie Image"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            margin:"auto",
            alignItems:"center",    
            width:"75%",
            justifyContent: "space-around",
          }}
        >
          <CardContent sx={{display: "flex",
            flexDirection: "column",
            alignItems:"center"}}>
            <Typography
              variant="body1"
              style={{ color: "white", textAlign: "justify", fontWeight: "bold" }}
            >
              {name}
            </Typography>
            <br />
            <Typography
              variant="body2"
              style={{
                color: "white",
                textAlign: "justify",
                fontWeight: "lighter",
              }}
            >
              {price}
            </Typography>
          </CardContent>
          <Box >
          <Button sx={chips} style={{marginLeft:"50%"}} 
                // onClick={}
            >
            <DeleteIcon/>
          </Button>
        </Box>
        </Box>
        
      </Card>
    );
  }
  
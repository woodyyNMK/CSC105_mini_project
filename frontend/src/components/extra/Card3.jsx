import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Toolbar,
    Typography,
  } from "@mui/material";
  
  export default function Card3() {  
    return (
      <Card
        style={{
          backgroundColor: "#655DBB",
          borderRadius: "20px",
          boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
          margin: "0 10px",
        }}
      >
        <CardActionArea>
        <CardMedia
          component="img"
          sx={{ margin:"20px auto 0px auto",width:"80%"}}
          style={{ borderRadius: "30px" }}
          image="./assets/card2.jpg"
          alt="Hoodie Image"
        />
        <CardContent sx={{display: "flex",
          flexDirection: "column",
          justifyContent:"center", alignItems:"center"}}>
          <Typography
            variant="body1"
            style={{ color: "white", textAlign: "justify", fontWeight: "bold",fontSize:"small" }}
          >
            Tonal Hoodie
          </Typography>
          <br />
          <Typography
            variant="body2"
            style={{
              color: "white",
              textAlign: "justify",
              fontWeight: "lighter",
              fontSize:"small"
            }}
          >
            $49.99
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Card2({image, price, name}) {
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
      sx={{ display: "flex" }}
      style={{
        backgroundColor: "#655DBB",
        borderRadius: "10px",
        boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
        margin: "0 10px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "35%", padding: "15px 10px" }}
        style={{ borderRadius: "30px" }}
        image={image}
        alt="Hoodie Image"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
margin:"auto",
        }}
      >
        <CardContent sx={{display: "flex",
          flexDirection: "column",
          justifyContent:"center", alignItems:"center"}}>
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
        <Box sx={{margin:"auto"}}>
        <Button sx={chips} style={{ p:0,margin:0,minWidth:30,maxWidth:30,minHeight:20,maxHeight:20,marginBottom:"20px"  }}>
          ...
        </Button>
      </Box>
      </Box>
      
    </Card>
  );
}

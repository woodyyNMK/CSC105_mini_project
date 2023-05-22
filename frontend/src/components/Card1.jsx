import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Card1({image,name, description,product_id}) {
  const navigate = useNavigate();
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
    <Card
      sx={{ display: "flex" }}
      style={{
        backgroundColor: "#655DBB",
        borderRadius: "10px",
        boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",
        margin:"0 7px"
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "35%", padding: "15px 10px" }}
        style={{ borderRadius: "30px" }}
        image={image}
        alt="Hoodie Image"
      />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems:"center",margin:"0 -5px 0 -15px" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" style={{color:"white" }}>
            {name}
          </Typography>
          <br/>
          <Typography variant="body2" color="text.secondary" style={{color:"white", textAlign:"justify" , fontWeight:"lighter", overflow:"hidden",height:"70px"}}>
            {description}
          </Typography>
        </CardContent>
        <Box >
            <Button  sx={chips} 
            style={{marginBottom:"20px", minWidth: "100px"}}
            onClick={()=>navigate(`/ItemDetail/${product_id}`)}
            >View More</Button>
        </Box>
      </Box>
    </Card>
  );
}

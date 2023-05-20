import { Box, Typography } from "@mui/material";

export default function Brand(){
    return(
        <div style={{backgroundColor:"#BFACE2", marginTop:"15px"}}>
        <Box sx={{p:3}}>
        <Typography  component="div" variant="h4"> About Brand</Typography>
        <br/>
          <Typography variant="body2" color="text.secondary" margin={"0 20px"} style={{ textAlign:"justify" , fontWeight:"bold"}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis commodi, unde libero deserunt aliquid exercitationem eos fugiat aspernatur quisquam dignissimos odit accusantium reprehenderit totam illum quo corporis fugit at magnam.<br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aspernatur quae in necessitatibus veniam maxime sunt soluta impedit, nihil temporibus veritatis? Eveniet expedita quae veritatis unde animi itaque iure quaerat.<br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aspernatur quae in necessitatibus veniam maxime sunt soluta impedit, nihil temporibus veritatis? Eveniet expedita quae veritatis unde animi itaque iure quaerat.
          </Typography>
    </Box>
    </div>
    )
}
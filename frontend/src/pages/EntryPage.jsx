import {
  Box,
} from "@mui/material";
import Brand from "../components/Brand";
import ContentNewCollection from "../components/ContentNewCollection";
import ContentPopularItems from "../components/ContentPopularItems";
import ContentSaleItems from "../components/ContentSaleItems";

export default function EntryPage() {
  return (
    <Box>
        <ContentNewCollection />
        <Brand/>
        <ContentPopularItems/>
        <hr style={{width:"80vw",height:"4px", margin:"auto" , backgroundColor:"#655DBB"}}/>
        <ContentSaleItems/>
    </Box>
  );
}

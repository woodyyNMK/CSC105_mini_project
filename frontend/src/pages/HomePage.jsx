import { Box } from "@mui/material";
import NavTop2 from "../components/NavTop2";
import ContentNewCollection from "../components/ContentNewCollection";
import SearchBar1 from "../components/SearchBar1";
import SearchContent from "../components/SearchContent";
import { Grid } from "swiper";

export default function EntryPage() {
  return (
    <>
      <NavTop2 />
      <ContentNewCollection />
      <SearchContent/>
    </>
  );
}

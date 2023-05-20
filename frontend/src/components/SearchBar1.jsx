import { useState } from "react";

import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
export default function SearchBar1() {
  const [input, setInput] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
  };
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <Box sx={{display:"flex"}}>
        <TextField 
          id="search-bar"
          type="search"
          label="Search Item :"
          onChange={handleInput}
          variant="outlined"
          size="small"
          style={{width:"60vw", boxShadow: "-2px 4px 4px rgba(0, 0, 0, 0.1)",background:"#E5E0FF"}}
        />
        <Button style={{ maxWidth: "30px", minWidth: "30px", marginLeft:"5px"}}>
              <Search />
            </Button>
        </Box>

  );
}

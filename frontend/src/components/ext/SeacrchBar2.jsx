import { useState, useEffect } from 'react';

import { Typography, Box, TextField, Autocomplete } from '@mui/material'

export default function SearchBar2() {
    const [input, setInput] = useState('')
    const [list, setList] = useState([]);
   
    const handleInput = (e) => {
      setInput(e.target.value.toLowerCase())
    }
   
    return (
      <Box sx={{
          width: 400,
          height: 660,
          margin: '100px auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly'
        }}>
        <Typography variant='h4' component={'h1'}>React Search Bar</Typography>
        
   
          renderInput={(params) => <TextField {...params}
            label="Search title"
            onSelect={handleInput}
            sx={{
              width: 350,
              margin: '10px auto',
            }} />}

   
   
        {/* <FilterPrducts searchstring={input} list={list} /> */}
      </Box>
    );
   }
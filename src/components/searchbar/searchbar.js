import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  const [name, setName] = React.useState('');

  return (
    <div>
        <h1 className='destination'>Where would you like to fly to?</h1>
    <Box className='searchbar'
      component="form"
      sx={{
        '& > :not(style)': { m: 1.5, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="From"
        value={name}
        onChange={(event) => {
          setName(event.target.value); //Might be unique and need to change
          console.log('name:', name);
        }}
      />
      <br />
      <TextField
        id="outlined-controlled"
        label="To"
        value={name}
        onChange={(event) => {
          setName(event.target.value); //Might be unique and need to change
          console.log('name:', name);
        }}
      />
    </Box>
    </div>
  );
}


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FlightApi from '../cardapi/cardapi';
import { Grid } from '@mui/material';
import "./compsearch.css"

export default function CompleteSearch() {
  const [nameOne, setNameOne] = React.useState('');
  const [nameTwo, setNameTwo] = React.useState('');
  const [valueOne, setValueOne] = React.useState(dayjs(''));
  const [valueTwo, setValueTwo] = React.useState(dayjs(''));
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  

  const handleSearch = () => {
    // Here you can handle the inputs
    console.log('nameOne:', nameOne);
    console.log('nameTwo:', nameTwo);
    console.log('valueOne:', valueOne.format("YYYY-MM-DD"));
    console.log('valueTwo:', valueTwo.format("YYYY-MM-DD"));
    setIsButtonClicked(true);
  };

  return (
    <div className='searchbar'>
    <Grid container direction="column" spacing={0} xs={12} sm={12} md={4}  className="stupid">

      <h1 className='destination'>Pick your destination</h1>
      <Box
        className='searchbar1'
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
          value={nameOne}
          onChange={(event) => {
            setNameOne(event.target.value);
          }}
        />
        </Box>
        <Box
        className='searchbar1'
        component="form"
        sx={{
          '& > :not(style)': { m: 1.5, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-controlled"
          label="To"
          value={nameTwo}
          onChange={(event) => {
            setNameTwo(event.target.value);
          }}
        />
      </Box>
      <h1>When will you be flying?</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker
            label="Date of departure"
            value={valueOne}
            onChange={(newValue) => {
              setValueOne(newValue);
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker
            sx={{color: "black", borderColor:"black"}}
            label="Date of return"
            value={valueTwo}
            onChange={(newValue) => {
              setValueTwo(newValue);
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Stack spacing={2} direction="column">
        <Button variant="outlined" sx={{color: "black", borderColor:"black"}} className="button" onClick={handleSearch}>
          Go!
        </Button>
      </Stack>
      {isButtonClicked && (
      <FlightApi nameOne={nameOne} nameTwo={nameTwo} valueOne={valueOne} valueTwo={valueTwo} />
      )}
      
    </Grid>
    </div>
  );
}

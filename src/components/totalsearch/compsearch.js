import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
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
  const [airportOne, setAirportOne] = React.useState("");
  const [airportTwo, setAirportTwo] = React.useState("");
//   const [nameOne, setNameOne] = React.useState('');
//   const [nameTwo, setNameTwo] = React.useState('');
  const [valueOne, setValueOne] = React.useState(dayjs(''));
  const [valueTwo, setValueTwo] = React.useState(dayjs(''));
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);


  const londonProps = {
    options: airlonDetails,
    getOptionLabel: (option) => option ? option.airport : '',
  };
  const euroProps = {
    options: aireurDetails,
    getOptionLabel: (option) => option ? option.airport : '',
  };

 

  const handleSearch = () => {
    // console.log('nameOne:', nameOne);
    // console.log('nameTwo:', nameTwo);
    // console.log('valueOne:', valueOne.format("YYYY-MM-DD"));
    // console.log('valueTwo:', valueTwo.format("YYYY-MM-DD"));
    // console.log("airport:", airportOne.code);
    // console.log("airport:", airportTwo.code);
    setIsButtonClicked(true);
};

const handleClear = () => {
        setAirportOne("");
        setAirportTwo("");
        setValueOne(dayjs(""));
        setValueTwo(dayjs(""));
        setIsButtonClicked(false);
      };
    
    
  

  return (
    <div>
    <div className='searchbar'>
    <Grid container direction="column" spacing={0} item xs={12} sm={12} md={4}  className="stupid">

      <h1>Pick your destination</h1>
      <Autocomplete
        {...londonProps}
        id="controlled-demo"
        sx={{ m: 1.5, width: '30ch'}}
        value={airportOne}
        onChange={(event, newValue) => {
            setAirportOne(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="From" />
        )}
      />
      <Autocomplete
        {...euroProps}
        id="controlled-demo"
        sx={{m: 1.5, width: '30ch'}}
        value={airportTwo}
        onChange={(event, newValue) => {
            setAirportTwo(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="To" />
        )}
      /> 
      <h1>When will you be flying?</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker className='clocky'
            sx ={{m: 1.5, width: '30ch'}}
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
            sx ={{m: 1.5, width: '30ch'}}
            label="Date of return"
            value={valueTwo}
            onChange={(newValue) => {
              setValueTwo(newValue);
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Stack spacing={2} direction="column">
        <Button sx={{}} className="buttonboi" onClick={handleSearch}>
          Go!
        </Button>
        <Button sx={{}} className="buttonboi" onClick={handleClear}>
            Clear
          </Button>
      </Stack>
    </Grid>
    </div>
    {isButtonClicked && (
          <FlightApi airportOne={airportOne} airportTwo={airportTwo} valueOne={valueOne} valueTwo={valueTwo} />
        )}
    </div>
  );
}

const airlonDetails = [
    { airport: 'London Gatwick', code: "LGW" },
    { airport: 'London Luton', code: "LTN" },
    { airport: 'London Stansted', code: "STN" },
  ];

  const aireurDetails = [
    { airport: 'Dublin, Ireland', code: "DUB" },
    { airport: 'Cork, Ireland', code: "ORK" },
    { airport: 'Paphos, Cyprus', code: "PFO" },
    { airport: 'Vienna, Austria', code: "VIE" },
    { airport: 'Alicante, Spain', code: "ALC" },
    { airport: 'Barcelona, Spain', code: "BCN" },
    { airport: 'Madrid, Spain', code: "MAD" },
    { airport: 'Lisbon, Portugal', code: "LIS" },
    { airport: 'Porto, Portugal', code: "OPO" },
    { airport: 'Funchal, Madeira', code: "FNC" },
    { airport: 'Athens, Greece', code: "ATH" },
    { airport: 'Santorini, Greece', code: "JTR" },
    { airport: 'Nice, France', code: "NCE" },
    { airport: 'Tolouse, France', code: "TLS" },
    { airport: 'Eindhoven, Netherlands', code: "EIN" },
    { airport: 'Edinburgh, Scotland', code: "EDI" },
    { airport: 'Venice, Italy', code: "TSF" },
    { airport: 'Berlin, Germany', code: "BER" },
    { airport: 'Frankfurt, Germany', code: "HHN" },
    { airport: 'Rome, Italy', code: "CIA" },
  ];
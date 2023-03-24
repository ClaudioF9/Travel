import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DepartureDate() {
    const [valueOne, setValueOne] = React.useState(dayjs(''));
    
  return (
    <div>
        <h1>When will you be flying?</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="Date of departure"
          value={valueOne}
        //   onChange={(newValue) => setValueOne(newValue)} //check if this needs to be unique
          onChange={(newValue) => {
            setValueOne(newValue); 
          console.log('valueOne:', newValue.format());
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
}
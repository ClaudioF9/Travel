import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import "./cardapi.css"

function FlightApi(props) {
  const { airportOne, airportTwo, valueOne, valueTwo } = props;
  const [flightInfo, setFlightInfo] = useState(null);
  console.log(airportOne);
  console.log(airportTwo);
  console.log(valueOne);
  console.log('valueTwo:', valueTwo ? valueTwo.format("YYYY-MM-DD") : null);


  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://ryanair.p.rapidapi.com/flights',
      params: {
        origin_code: airportOne ? airportOne.code : null, 
        destination_code: airportTwo ? airportTwo.code : null, 
        origin_departure_date: valueOne ? valueOne.format("YYYY-MM-DD") : null, 
        destination_departure_date: valueTwo ? valueTwo.format("YYYY-MM-DD") : null
      },
      headers: {
        // 'X-RapidAPI-Key': 
        'X-RapidAPI-Host': 'ryanair.p.rapidapi.com'
      }
    };
    console.log(options.params);
    axios.request(options).then(function (response) {
      setFlightInfo(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  if (!flightInfo) {
    return <div>Loading flight data...</div>;
  }

  return (
    <div>
      <h2 className='flights'>Flight Data</h2>
      <FlightCard flightInfo={flightInfo} />
    </div>
  );
}

function FlightCard({ flightInfo }) {
  return (
    
    <div className="bigdivvy">
    <div className="divvy1">
    <Grid container spacing={0} columnSpacing={0} className="gridFormat">
      {flightInfo.origin_to_destination_trip.map((flightArray) =>
        flightArray.map((flightObj) => (
          <Grid item key={flightObj.flight_number} xs={12} sm={6} md={3}>
            <Card className="cardy"  sx={{ borderRadius: 8 }}>
              <CardContent>
                <Typography variant="h4" component="h2">
                  {flightObj.flight_number}
                </Typography>
                <Typography  color="text.secondary">
                  {flightObj.origin_code} to {flightObj.destination_code}
                </Typography>
                <Typography variant="body2">
                  <p>Departure time: {flightObj.departure_datetime_utc}</p>
                  <p>Arrival time: {flightObj.arrival_datetime_utc}</p>
                  <p>
                    Fare: {flightObj.regular_fare} {flightObj.currency}
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
    </div>
    <div className="divvy2">
    <Grid container spacing={0} columnSpacing={0} className="gridFormat">
      {flightInfo.destination_to_origin_trip.map((flightArray) =>
        flightArray.map((flightObj) => (
          <Grid item key={flightObj.flight_number} xs={12} sm={6} md={3}>
            <Card className="cardy"  sx={{ borderRadius: 8 }}>
              <CardContent>
                <Typography variant="h4" component="h2">
                  {flightObj.flight_number}
                </Typography>
                <Typography  color="text.secondary">
                  {flightObj.origin_code} to {flightObj.destination_code}
                </Typography>
                <Typography variant="body2">
                  <p>Departure time: {flightObj.departure_datetime_utc}</p>
                  <p>Arrival time: {flightObj.arrival_datetime_utc}</p>
                  <p>
                    Fare: {flightObj.regular_fare} {flightObj.currency}
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
    </div>
    </div>
  );
        }


export default FlightApi;
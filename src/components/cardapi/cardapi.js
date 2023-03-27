import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

function FlightApi() {
  const [flightInfo, setFlightInfo] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://ryanair.p.rapidapi.com/flights',
      params: {
        origin_code: "STN", 
        destination_code: "BER", 
        origin_departure_date: "2023-09-28", 
        destination_departure_date: "2023-10-28"
      },
      headers: {
        // 'X-RapidAPI-Key': 'Add key here',
        'X-RapidAPI-Host': 'ryanair.p.rapidapi.com'
      }
    };

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
      <h2>Flight Data</h2>
      <FlightCard flightInfo={flightInfo} />
    </div>
  );
}

function FlightCard({ flightInfo }) {
  return flightInfo.origin_to_destination_trip.map((flightArray) => {
    return flightArray.map((flightObj) => {
      return (
        <Card sx={{ minWidth: 300 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {flightObj.flight_number}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {flightObj.origin_code} to {flightObj.destination_code}
            </Typography>
            <Typography variant="body2">
              <p>Departure time: {flightObj.departure_datetime_utc}</p>
              <p>Arrival time: {flightObj.arrival_datetime_utc}</p>
              <p>Duration: {flightObj.duration_hours}</p>
              <p>Fare: {flightObj.regular_fare} {flightObj.currency}</p>
            </Typography>
          </CardContent>
        </Card>
      );
    });
  });
}

export default FlightApi;
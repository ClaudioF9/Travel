import React from "react";
import { Card, CardContent, Typography } from '@mui/material';
import flightDeets from "../../flightdeets.json";

function FlightCard() {
    return flightDeets.origin_to_destination_trip.map((flightArray) => {
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

export default FlightCard;


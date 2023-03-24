import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FlightData() {
  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://ryanair.p.rapidapi.com/flights',
      params: {
        origin_code: 'LGW', //add input value
        destination_code: 'DUB', //add input value
        origin_departure_date: '2023-09-28', //add input value
        destination_departure_date: '2023-10-28' //add input value
      },
      headers: {
        // 'X-RapidAPI-Key': 'f8bea1bbb1msh0f0fb2365bb7e6cp156bacjsn02ebc2142b44', //cancelled out to avoid usage of api
        'X-RapidAPI-Host': 'ryanair.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setFlightData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  if (!flightData) {
    return <div>Loading flight data...</div>;
  }

  return (
    <div>
      <h2>Flight Data</h2>
      <pre>{JSON.stringify(flightData, null, 2)}</pre>
    </div>
  );
}

export default FlightData;


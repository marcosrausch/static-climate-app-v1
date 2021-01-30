import React from 'react';
import Card from './Card';

export default function Cards(props) {
  const cities = props.cities;
  return (
    <div>      
      {cities.map((city) =>
        <Card
          max={city.main['temp_max']}
          min={city.main['temp_min']}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          />)}
    </div>
  )
};
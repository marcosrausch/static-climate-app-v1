import React from 'react';

export default function Card(props) {
  const image = `http://openweathermap.org/img/wn/${props.img}@2x.png`
  return (
    <div>  <br />
    <button onClick={props.onClose}>
      X
    </button>
      <h4>{props.name}</h4>    
      Max: {props.max} <br />
      Min: {props.min} <br />
      Name: {props.name} <br />
      <img src={image} alt={props.name}/> <br />
    </div>
  )
};


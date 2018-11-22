import React from 'react';
const Weather = (props) => {
  return(
       <div id="weather">
       {props.country && props.city && <h1>{props.city},    {props.country}</h1>}
      {props.temperature && <h2>{props.temperature} C</h2>}
      {props.icon && <p>{props.icon}</p>}
      {props.description && <p>{props.description}</p>}
      {props.error && <p>{props.error}</p>}
      {props.cod && <p>{props.cod}</p>}
       </div>
   )
}
export default Weather;

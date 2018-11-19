import React from 'react';
const Weather = (props) => {
  return(
       <div>
       {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
      {props.temperature && <p>Temperature: {props.temperature} &#8451;</p>}
      {props.icon && <p>{props.icon}</p>}
      {props.description && <p>Description:  {props.description}</p>}
      {props.error && <p>{props.error}</p>}
      {props.cod && <p>{props.cod}</p>}
       </div>
   )
}
export default Weather;

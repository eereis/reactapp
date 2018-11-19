import React from 'react';
const Search = (props) => {
  return (
      <form onSubmit={props.loadWeather}>
        <input className="form-control" type="text" name="city" />
        <div className="text-center">
        <button type="submit" className="btn">Get Weather</button>
        <button onClick={props.randomize} className="btn">Randomize</button>
        </div>
      </form>
  )
}
export default Search;

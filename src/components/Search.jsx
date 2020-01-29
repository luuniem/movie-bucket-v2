import React, { useState, useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";

import "./Search.scss";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();
  const { onLoadTVShows } = props;
  const [apiKey, url] = [
    process.env.REACT_APP_API_KEY,
    "https://api.themoviedb.org/3/"
  ];

  useEffect(() => {
    setTimeout(() => {
      if (searchValue === inputRef.current.value) {
      }

      const query = searchValue.length === 0 ? "" : `&query=${searchValue}`;
      Axios.get(`${url}search/multi?api_key=${apiKey}${query}`)
        .then(response => {
          onLoadTVShows(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }, 1000);
  }, [searchValue, onLoadTVShows, inputRef]);

  return (
    <form noValidate autoComplete="off" className="search__form">
      <TextField
        id="outlined-basic"
        label="Search Title"
        variant="outlined"
        className="input__form"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        ref={inputRef}
      />
    </form>
  );
};

export default Search;

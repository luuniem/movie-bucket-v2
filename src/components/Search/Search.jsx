import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";

import "./Search.scss";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");
  const { onLoadTitles } = props;

  const [apiKey, url] = [
    process.env.REACT_APP_API_KEY,
    "https://api.themoviedb.org/3/"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const query = searchValue.length === 0 ? "" : `&query=${searchValue}`;
      Axios.get(`${url}search/multi?api_key=${apiKey}${query}`)
        .then(response => {
          onLoadTitles(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, onLoadTitles]);

  return (
    <form noValidate autoComplete="off" className="search__form">
      <TextField
        id="outlined-basic"
        label="Search Title"
        variant="outlined"
        className="input__form"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
      />
    </form>
  );
};

export default Search;

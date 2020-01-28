import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Search.scss";

const Search = props => {
  return (
    <form noValidate autoComplete="off" className="search__form">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        className="input__form"
      />
    </form>
  );
};

export default Search;

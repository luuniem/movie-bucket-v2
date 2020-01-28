import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Search.scss";
import Button from "@material-ui/core/Button";

const Search = props => {
  return (
    <form noValidate autoComplete="off" className="search__form">
      <TextField
        id="outlined-basic"
        label="Search Title"
        variant="outlined"
        className="input__form"
      />
      {/* <Button variant="outlined">Submit</Button> */}
    </form>
  );
};

export default Search;

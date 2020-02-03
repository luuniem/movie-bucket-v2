import React, { useState, useEffect, useCallback, useRef } from "react";
import Axios from "axios";
import "./FilteredTitles.scss";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Search from "./../Search/Search";
import BucketList from "./../BucketList/BucketList";

const FilteredTitles = props => {
  const [titles, setTitles] = useState([]);

  //filter titles
  const filteredTitlesHandler = useCallback(filteredTitles => {
    setTitles(filteredTitles);
  }, []);

  //add title to bucket list
  const [buckeTitle, setBucketTitle] = useState([]);
  const addToBucketHandler = filteredTitles => {
    setBucketTitle(prevFilteredTitles => [
      ...prevFilteredTitles,
      filteredTitles
    ]);
  };
  const removeFromFilteredListHandler = titleId => {
    setTitles(prevTitles => prevTitles.filter(titles => titles.id !== titleId));
  };
  console.log(titles);
  //   console.log(buckeTitle);

  return (
    <section className="container">
      <br></br>
      <Search onLoadTitles={filteredTitlesHandler}></Search>
      <ul className="multi__show__list">
        {titles.map(flick => {
          const {
            id,
            poster_path,
            name,
            overview,
            title,
            backdrop_path
          } = flick;
          const poster = "https://image.tmdb.org/t/p/w500";
          return (
            <li className="card" key={id}>
              <CardActionArea>
                <CardMedia
                  className="card__image"
                  component="img"
                  alt={name ? name : title}
                  image={
                    poster_path
                      ? `${poster}${poster_path}`
                      : `${poster}${backdrop_path}`
                  }
                  title={name ? name : title}
                />

                <CardContent className="card__content">
                  <Typography gutterBottom variant="h6" component="h3">
                    {name ? name : title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className="add__btn"
                  size="medium"
                  onClick={() => {
                    addToBucketHandler(flick);
                    removeFromFilteredListHandler(id);
                  }}
                >
                  Add
                </Button>
                <Button className="more__info__btn" size="medium">
                  More Info
                </Button>
              </CardActions>
            </li>
          );
        })}
      </ul>
      <BucketList bucketList={buckeTitle} />
    </section>
  );
};

export default FilteredTitles;

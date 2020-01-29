import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import "./TV.scss";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Search from "./Search";

const TV = props => {
  const [tvData, setTvData] = useState([]);

  const [apiKey, url] = [
    process.env.REACT_APP_API_KEY,
    "https://api.themoviedb.org/3/"
  ];

  //Get list of Most popular TV Shows
  useEffect(() => {
    Axios.get(`${url}tv/popular?api_key=${apiKey}`)
      .then(response => {
        setTvData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const filteredTvShowHandler = useCallback(filteredShows => {
    setTvData(filteredShows);
  }, []);

  return (
    <section className="container">
      {/* <h4> Most Popular TV Shows</h4> */}
      <br></br>
      <Search onLoadTVShows={filteredTvShowHandler}></Search>
      <ul className="tv__show__list">
        {tvData.map(tvShow => {
          const { id, poster_path, name, overview } = tvShow;
          const poster = "https://image.tmdb.org/t/p/w500";
          return (
            <li className="card" key={id}>
              <CardActionArea>
                <CardMedia
                  className="card__image"
                  component="img"
                  alt={name}
                  image={`${poster}${poster_path}`}
                  title={name}
                />

                <CardContent className="card__content">
                  <Typography gutterBottom variant="h6" component="h3">
                    {name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text__content"
                  >
                    {overview}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className="add__btn" size="medium">
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
    </section>
  );
};

export default TV;

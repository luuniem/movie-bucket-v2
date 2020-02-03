import React, { useState, useEffect } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./BucketList.scss";

const BucketList = props => {
  const { bucketList } = props;

  return (
    <div className="bucket__list">
      <ul className="bucket__show__list">
        {bucketList.map(flick => {
          const { id, name, poster_path, backdrop_path, title } = flick;
          const poster = "https://image.tmdb.org/t/p/w500";
          const uniqueID = Math.random().toString();
          return (
            <li className="card" key={`${id}-${uniqueID}`}>
              <CardActionArea>
                {/* <CardMedia
                  className="card__image"
                  component="img"
                  alt={name ? name : title}
                  image={
                    poster_path
                      ? `${poster}${poster_path}`
                      : `${poster}${backdrop_path}`
                  }
                  title={name ? name : title}
                /> */}
                <CardContent className="card__content">
                  <Typography gutterBottom variant="h7" component="h6">
                    {name ? name : title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className="remove__btn" size="small">
                  Remove
                </Button>
                <Button className="more_info__btn" size="small">
                  More Info
                </Button>
                <Button className="watched__btn" size="small">
                  watched
                </Button>
              </CardActions>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BucketList;

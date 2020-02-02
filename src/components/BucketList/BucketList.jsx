import React, { useState, useEffect } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const BucketList = props => {
  const { bucketList } = props;

  return (
    <div className="bucket__list">
      <ul className="tv__show__list">
        {bucketList.map(title => {
          const { id, name, poster_path } = title;
          const poster = "https://image.tmdb.org/t/p/w500";
          const uniqueID = Math.random().toString();
          return (
            <li className="card" key={`${id}-${uniqueID}`}>
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
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className="remove__btn" size="medium">
                  Remove
                </Button>
                <Button className="more_info__btn" size="medium">
                  More Info
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

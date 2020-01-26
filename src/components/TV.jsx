import React, { useState, useEffect } from "react";
import Axios from "axios";

function TV() {
  const [tvData, setTvData] = useState([]);

  const [apiKey, url] = [
    process.env.REACT_APP_API_KEY,
    "https://api.themoviedb.org/3/"
  ];

  useEffect(() => {
    Axios.get(`${url}tv/popular?api_key=${apiKey}`)
      .then(response => {
        setTvData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <ul className="tv__show__list">
        {tvData.map(tvShow => (
          <li className="tv__show__card" key={tvShow.id}>
            <span>{tvShow.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TV;

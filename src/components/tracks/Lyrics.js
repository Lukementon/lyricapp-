import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import styled from "styled-components";
import Spinner from "../Spinner";

const Lyrics = props => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=2b91b5481c9b4ad9731e9babb52fd31f`
      )
      .then(res => {
        setLyrics(res.data.message.body.lyrics);

        return axios.get(
          `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=2b91b5481c9b4ad9731e9babb52fd31f`
        );
      })
      .then(res => {
        setTrack(res.data.message.body.track);
      })
      .catch(err => console.log(err));

    // eslint-disable-next-line
  }, []);

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />;
  } else {
    return (
      <>
        <StyledLyrics>
          <div>
            <h4>{track.track_name}</h4>
          </div>
          <div>
            <p>{lyrics.lyrics_body}</p>
          </div>
        </StyledLyrics>
        <StyledUL>
          <li>
            <strong>Album ID</strong>: {track.album_id}
          </li>
          <li>
            <strong>Genre</strong>:{" "}
            {
              track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
            }
          </li>
          <li>
            <strong>Explicit Lyrics</strong>:{" "}
            {track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li>
            <strong>Release Date</strong>:{" "}
            <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
          </li>
        </StyledUL>
        <StyledLink>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Go Back
          </Link>
        </StyledLink>
      </>
    );
  }
};

const StyledLyrics = styled.div`
  height: 30vh;
  width: 90%;
  margin: 2rem auto;
  border: 1px solid lightgrey;
  border-radius: 1rem;
  box-shadow: 0px 5px 20px rgba(120, 120, 120, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  h4 {
    padding: 1rem;
  }
`;

const StyledLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 2rem auto;
  width: 5%;
  color: white;
  text-decoration: none;
  background-color: rgb(30, 144, 255);
  text-decoration: none;
  border-radius: 1rem;
`;

const StyledUL = styled.ul`
  height: 25vh;
  width: 90%;
  margin: auto;
  list-style: none;
  li {
    width: 100%;
    min-height: 3rem;
    border: 1px solid lightgrey;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
`;

export default Lyrics;

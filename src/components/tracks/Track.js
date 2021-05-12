import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faMusic,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Track = ({ track }) => {
  return (
    <StyledTrack>
      <h4>{track.artist_name}</h4>
      <p>
        <FontAwesomeIcon
          icon={faMusic}
          style={{ color: "rgb(30, 144, 255)" }}
        />{" "}
        <strong>Track</strong>:{track.track_name}
      </p>
      <p>
        <FontAwesomeIcon icon={faPlay} style={{ color: "rgb(30, 144, 255)" }} />{" "}
        <strong>Album</strong>: {track.album_name}
      </p>
      <Link className="link" to={`lyrics/track/${track.track_id}`}>
        <FontAwesomeIcon icon={faAngleRight} style={{ color: "orange" }} /> View
        Lyrics
      </Link>
    </StyledTrack>
  );
};

const StyledTrack = styled.div`
  height: 20vh;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 1rem;
  box-shadow: 0px 5px 15px rgba(120, 120, 120, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;

  h4 {
    padding: 0.5rem;
  }
  p {
    padding: 0.5rem;
  }
  .link {
    padding: 0.5rem;
    margin-top: 0.5rem;
    width: 15%;
    color: white;
    background-color: rgb(30, 144, 255);
    text-decoration: none;
    border-radius: 0.8rem;
  }
`;

export default Track;

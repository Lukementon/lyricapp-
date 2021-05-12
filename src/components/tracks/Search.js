import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/GlobalState";
import styled from "styled-components";

const Search = () => {
  // eslint-disable-next-line
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=2b91b5481c9b4ad9731e9babb52fd31f`
      )
      .then(res => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: "Search Results" });
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line
  }, [trackTitle]);

  const findTrack = e => {
    e.preventDefault();
    setTrackTitle(userInput);
    setUserInput("");
  };

  const onChange = e => {
    setUserInput(e.target.value);
  };
  return (
    <SearchContainer>
      <h1>Search for a song </h1>
      <p>Get the lyrics for any song</p>
      <form onSubmit={findTrack}>
        <div className="form">
          <input
            type="text"
            className="input"
            placeholder="Song Title..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="submit">
          Get Track Lyrics
        </button>
      </form>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  min-height: 30vh;
  width: 90%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgrey;
  p {
    padding: 1rem 0rem 1rem 0rem;
  }
  .input {
    width: 20vw;
    padding: 1rem 0rem 1rem 0rem;
    height: 2rem;
    border: 1px solid lightgrey;
    border-radius: 1rem;
    padding-left: 1rem;

    &:focus {
      outline: none;
    }
  }
  .submit {
    margin-top: 1rem;
    width: 20vw;
    height: 2rem;
    border: 1px solid lightgrey;
    border-radius: 1rem;
    background-color: rgb(30, 144, 255);
    color: white;
    &:focus {
      outline: none;
    }
  }
`;

export default Search;

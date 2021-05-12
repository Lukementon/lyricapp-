import React, { useContext } from "react";
import { Context } from "../../context/GlobalState";
import Spinner from "../Spinner";
import Track from "./Track";
import styled from "styled-components";

const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <>
        <Heading>
          <h2>{heading}</h2>
        </Heading>
        <TrackGrid>
          {track_list.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </TrackGrid>
      </>
    );
  }
};

const Heading = styled.div`
  min-height: 5vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 1rem;
`;

const TrackGrid = styled.div`
  min-height: 85vh;
  width: 100%;
  padding: 2rem 5rem 2rem 5rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  grid-gap: 2rem;
`;

export default Tracks;

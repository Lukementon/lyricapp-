import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SEARCH_TRACKS':
//       return {
//         ...state,
//         track_list: action.payload,
//         heading: 'Search Results'
//       };
//     default:
//       return state;
//   }
// };

export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    heading: "Top 10 Tracks",
    // dispatch: action => this.setState(state => reducer(state, action))
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    const fetchTracks = async () => {
      const res = await axios(
        `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_LYRICS_KEY}`
      );

      setState({
        track_list: res.data.message.body.track_list,
        heading: "Top 10 Today",
      });
    };
    fetchTracks();
    // eslint-disable-next-line
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
import styled from "styled-components"
import { useEffect, useState } from "react"
import Login from "./components/Sections/Login"
import { getTokenFromUrl } from "./spotify"
import SpotifyWebApi from 'spotify-web-api-js'
import Player from "./components/Sections/Player"
import { useDataLayerValue } from './components/DataLayer'

const AppDiv= styled.section`

`
const spotify = new SpotifyWebApi()

function App(){

  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect (() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) =>{
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      
      spotify.getPlaylist('37i9dQZEVXcMgP8kap39RV?si=f0630a04da6f4535').then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }

  }, []);

  return(
    <AppDiv>
        {token? ( <Player spotify={spotify} /> ) : ( <Login/> )}        
    </AppDiv>
  )
}

export default App

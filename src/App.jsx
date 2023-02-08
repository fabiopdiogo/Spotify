import styled from "styled-components"
import { useEffect, useState } from "react"
import Login from "./components/Sections/Login"
import { getTokenFromUrl } from "./spotify"
import SpotifyWebApi from 'spotify-web-api-js'
import Player from "./components/Player"

const AppDiv= styled.section`

`
const spotify = new SpotifyWebApi()


function App(){
  const [token, setToken] = useState(null);


  useEffect (() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) =>{
        console.log(user);
      });
    }

    console.log(" Token recebido!! ", token);
  }, []);

  return(
    <AppDiv>
        {
          token? (
            <Player />
          ):
          (
            <Login/>
          )
        }
        
    </AppDiv>
  )
}
export default App

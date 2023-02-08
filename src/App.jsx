import styled from "styled-components"
import { useEffect, useState } from "react"
import Login from "./components/Sections/Login"
import { getTokenFromUrl } from "./spotify"


const AppDiv= styled.section`

`

function App(){
  const [token, setToken] = useState(null);

  useEffect (() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.acess_token;

    if(_token){
      setToken(_token)
    }

    console.log(" Token recebido!! ", token);
  }, []);

  return(
    <AppDiv>
        <Login/>
    </AppDiv>
  )
}
export default App

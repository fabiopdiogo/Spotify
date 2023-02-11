import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Body from "./Body";

const PlayerDiv = styled.section`

`
const PlayerBody = styled.section`
  display: flex;
`


function Player({ spotify }) {
  return (
    <PlayerDiv>
      <PlayerBody>
        <Sidebar />
        <Body/>
      </PlayerBody>

      <Footer/>
    </PlayerDiv>
  );
}

export default Player;
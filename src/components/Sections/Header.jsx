import React from "react";
import { useDataLayerValue } from '../DataLayer'
import { Avatar, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 1rem;
  background-color: #282828;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 0.5;
  min-width: 70px;
  background-color: white;
  color: gray;
  border-radius: 30px;
  padding: 10px;
  align-items: center;`
;

const RightContainer = styled.div`
  display: flex;
  align-items: center;

  h4{
    margin-left: 10px;
  }
`;

const Input = styled(InputBase)`
  border: none;
  width: 100%;
`
;

function Header({ spotify }) {

  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <HeaderContainer>

      <LeftContainer>
        <SearchIcon />
        <Input placeholder="Search for Artists, Songs, or Podcasts " type="text" />
      </LeftContainer>

      <RightContainer>
        <Avatar alt={user} src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </RightContainer>

    </HeaderContainer>
  );
}

export default Header;

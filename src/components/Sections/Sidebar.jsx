import styled from "styled-components";

import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"

import { getTokenFromResponse } from "../../spotify";
import { useStateValue } from "../../StateProvider";
import { useDataLayerValue } from "../DataLayer";

const SidebarDiv = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0.2;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 230px;
  height: 100vh;
  color: white;
  background-color: #040404;

  hr{
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
  }
`
const Image = styled.img`
  margin-right: auto;
  object-fit: contain;
  height: 70px;
  padding: 10px;
`
const SidebarTitle = styled.strong`

`

function Sidebar(){
  const [{ playlists }, dispatch] = useDataLayerValue();

  return(
    <SidebarDiv>
        <Image src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        <br />
        <SidebarTitle>PLAYLISTS</SidebarTitle>
        <hr />

        <SidebarOption title="Hip Hop"/>
        <SidebarOption title="Rock"/>
        <SidebarOption title="Pop"/>

    </SidebarDiv>
  )
}
export default Sidebar;
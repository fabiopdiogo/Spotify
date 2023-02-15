import styled from "styled-components";
import Header from "./Header";
import { useDataLayerValue } from '../DataLayer'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

import spotify from "../../spotify"

const BodyDiv = styled.section`
  flex: 0.8;
  background-color: rgb(91, 87, 115);
  background: linear-gradient(rgb(91, 87, 115), rgba(0,0,0,1));
  height: 100vh;
  color: white;
  overflow-y: overlay;

  ::-webkit-scrollbar{
    display: none;
  }
`
const BodyInfo = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;

  img{
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba (0, 0, 0, 0.5);
  }
`

const BodyInfoText = styled.div`
  flex: 1;

  h2{
    font-size: 48px;
    margin-bottom: 10px;
  }

  p{
    font-size: 14px;
  }
`
const BodySongs = styled.div`


`
const BodyIcons = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;

  .MuiSvgIcon-root {
    margin-right: 20px;
  }
  
  .body_shuffle:hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
  }
`
function Body(){

  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  
  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return(
    <BodyDiv>
      <Header spotify={spotify}/>
      <BodyInfo>
        <img src={discover_weekly?.images[0].url} alt="" />
        <BodyInfoText>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </BodyInfoText>
      </BodyInfo>

      <BodySongs>
        <BodyIcons>
          <PlayCircleFilledIcon className="body_shuffle"/>
          <FavoriteIcon fontSize="large"/>
          <MoreHorizIcon />
        </BodyIcons>  
        
        {discover_weekly?.tracks.items.map(item =>(
          <SongRow track={item.track} />
        ))}
      </BodySongs>

    </BodyDiv>
  )
}
export default Body;
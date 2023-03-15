import styled from "styled-components";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

import { currentTrackIdState, isPlayingState } from "../../../atoms/songAtom";
import useSongInfo from "../../../hooks/useSongInfo";
import useSpotify from "../../../hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { useCallback, useEffect, useState } from "react";


const FooterDiv = styled.section`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 97%;
  background-color: #282828;
  padding: 20px;
`
const FooterLeft = styled.section`
  flex: 0.3;  
  display: flex;
  align-items: center;
  color: white;
  width: 300px;

  .footer__albumLogo{
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
  }
  .footer__songInfo > h4 {
    margin-bottom: 5px;
  }

  .footer__songInfo > p {
    font-size: 12px;
  }


`

const FooterCenter= styled.section`
   flex: 0.4;
   padding: 0 100px;
   color: white;
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: 300px;

   .footer__green {
      color: #1ed15e;
    }

   .footer__icon:hover,
   .footer__green:hover {
      transition: transform 0.2s ease-in-out;
      transform: scale(1.2) !important;
   }
`
const FooterRight = styled.section`
    flex: 0.3;    

    .footer__right * .continuous-slider{
      color: green;
    }
`
const Img = styled.img`
    height: 50px;
    width: 50px;
`

function Footer(){

  const spotifyApi = useSpotify();

  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentIdTrack] = useRecoilState(currentTrackIdState);    
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);

  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if(!songInfo){
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        console.log("Now playing: ", data.body?.item);
        setCurrentIdTrack(data.body?.item?.id);

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing);
        })
      });
    }
  };

  useEffect(() => {
    if(spotifyApi.getAccessToken() && !currentTrackId)
    {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [currentTrackIdState, spotifyApi, session]);

  return(

    <FooterDiv>
        <FooterLeft>      
          <Img               
              src={songInfo?.album.images?.[0]?.url}
              alt=""
          />
          <div className="footer__songInfo">
          <h3>{songInfo?.name}</h3>
           <p>{songInfo?.artists?.[0]?.name}</p>
          </div>
        </FooterLeft>

        <FooterCenter>
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" />
          <PauseCircleOutlineIcon fontSize="large" className="footer__icon" />
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </FooterCenter>
        
        <FooterRight>
         <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
         </Grid>
        </FooterRight>
    </FooterDiv>

  )
}
export default Footer;
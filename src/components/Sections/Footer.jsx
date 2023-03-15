import styled from "styled-components";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

import useSongInfo from "../../../hooks/useSongInfo";

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
  img{
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba (0, 0, 0, 0.5);
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

function Footer(){

  const songInfo = useSongInfo();
  return(
    <FooterDiv>
        <FooterLeft>      
          <img 
              src={songInfo?.album.images?.[0]?.url}
              alt=""
          />
          <div className="footer__songInfo">
            <h4>Yeah!</h4>
            <p>Usher</p>
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
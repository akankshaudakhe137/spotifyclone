import React from "react";
import "./Footer.css";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider} from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="https://i.scdn.co/image/ab67616d0000b27349b9fbf2345c02ca2387a357" alt=""/>
        <div className="footer__songInfo">
            <h4>End of Time</h4>
            <p>K-391, Alan Walker, Ahrix</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green"></ShuffleIcon>
        <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon"></PlayCircleOutlineIcon>
        <SkipNextIcon className="footer__icon"></SkipNextIcon>
        <RepeatIcon className="footer__green"></RepeatIcon>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlayIcon/>
            </Grid>
            <Grid item>
                <VolumeDownIcon/>
            </Grid>
            <Grid item xs>
                <Slider/>
            </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="Videofooter__icon"/>
          <div className="VideofooterMusic__text">
          <p>{ music }</p>
          </div>
        </div>
      </div>
      <img className="videoFooter__record"
      alt="imagem de um vinil girando"
      src="https://cdn-icons-png.flaticon.com/128/13/13510.png"
       />
    </div>
  );
}

export default VideoFooter;
  
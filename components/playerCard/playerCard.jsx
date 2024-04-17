import React from "react";
import './playerCard.css';

export default function PlayerCard({name, dobAndLocation, age, batsmanType, bowlingType, imgSrc}){
    return(
        <div className="player-card">
            <img src={imgSrc} alt="Player image" title="image of player" className="player-image"/>
            <p className="player-name">{name}</p>
            <p className="player-dob">{dobAndLocation}</p>
            <p className="player-age">{age}</p>
            <p className="player-batsman-type">{batsmanType}</p>
            <p className="player-bowling-type">{bowlingType}</p>
        </div>
    );
}
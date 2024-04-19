import React from "react";
import './playerCard.css';
import { Link } from "react-router-dom";

export default function PlayerCard({id, name, dobAndLocation, age, batsmanType, bowlingType, imgSrc}){
    return(
        <div className="player-card">
            <img src="https://source.unsplash.com/random?cricket+sport" alt="Player image" title="image of player" className="player-image"/>
            <p className="player-name">{name}</p>
            <p className="player-dob">{dobAndLocation}</p>
            <p className="player-age">{age}</p>
            <p className="player-batsman-type">{batsmanType}</p>
            <p className="player-bowling-type">{bowlingType}</p>

            <Link to={`/stats?id=${id}`} className="statsLink">See Stats</Link>
        </div>
    );
}
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import './stats.css'


export default function Stats(){
    const search = useLocation().search
    const searchParams = new URLSearchParams(search)

// state for stats
const [stats, setStats] = useState([]);
const [bowlingStats, setBowlingStats] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [isBowlingLoading, setIsBowlingLoading] = useState(true);

useEffect(() => {
    var id = searchParams.get('id');
    console.log("Player ID:", id);

    fetch(`https://cric-stats-battle.onrender.com/api/stats/batting?playerID=${id}`)
        .then(response => response.json())
        .then(data => {
            console.log("Batting stats:", data);
            setStats(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error fetching batting stats:', error);
            setIsLoading(false);
        });

    fetch(`https://cric-stats-battle.onrender.com/api/stats/bowling?playerID=${id}`)
        .then(response => response.json())
        .then(data => {
            console.log("Bowling stats:", data);
            setBowlingStats(data);
            setIsBowlingLoading(false);
        })
        .catch(error => {
            console.error('Error fetching bowling stats:', error);
            setIsBowlingLoading(false);
        });
}, []);



    return(
        <div className="stats-container">
        
        <div className="batting-stats">
            <h2>Batting stats of T20 and ODI</h2>

            { isLoading ? (<p>Loading</p>) : (

                    <div>
                        <p>Player name: {stats.playerName || "no stats available"}</p>
                        <p>Matches: {stats.matches }</p>
                        <p>Innings: {stats.innings || "no stats available"}</p>
                        <p>No: {Math.round(stats.runs) || "no stats available"}</p>
                        <p>Runs: {stats.average || "no stats available"}</p>
                        <p>Highest: { Math.floor(stats.hundred/2)  || "no stats available"}</p>
                        <p>Fifties: {stats.fifty || "no stats available"}</p>
                    </div>

                )}
        </div>

        <div className="bowling-stats">
            <h2>Bowling stats of T20 and ODI</h2>

            { isBowlingLoading ? (<p>Loading</p>) : (

                
                <div>
                    <p>Player name: {bowlingStats.playerName || "no stats available"}</p>
                    <p>Matches: {bowlingStats.matches || "no stats available"}</p>
                    <p>Innings: {bowlingStats.innings || "no stats available"}</p>
                    <p>Overs: {bowlingStats.overs || "no stats available"}</p>
                    <p>Maidens: {bowlingStats.Mdns || "no stats available"}</p>
                    <p>Runs: {bowlingStats.runs || "no stats available"}</p>
                    <p>Wickets: {bowlingStats.wickets || "no stats available"}</p>
                    <p>Best Bowling Figure: {bowlingStats.bestBowlingFiguer || "no stats available"}</p>
                    <p>Average: {bowlingStats.avg || "no stats available"}</p>
                    <p>Economy: {bowlingStats.economy || "no stats available"}</p>
                    <p>Strike Rate: {bowlingStats.strikeRate || "no stats available"}</p>
                    <p>Fours: {bowlingStats.fours || "no stats available"}</p>
                    <p>Sixes: {bowlingStats.sixes|| "no stats available" }</p>
                </div>
                )}
        </div>
        </div>

    );
}

// {"Id":253802,"playerName":"V Kohli","span":"2008-2023 / 2010-2024","matches":409,"innings":389,"runs":75,"average":8942.5,"hundred":305,"fifty":109}
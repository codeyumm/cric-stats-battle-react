import React from "react";
import './about.css';

export default function About(){
    return(
        <section id="about">
        
        
        <div className="directory">
            <h1>About CircDirectory</h1>
            <p>Welcome to CircDirectory, your go-to destination for cricket player statistics! Our website is designed to provide cricket enthusiasts with easy access to player stats.</p>
        </div>  

        <div className="functionality">
            <h2>Basic Functionality</h2>
            <p>With CircDirectory, users can search for any cricket player and view their statistics by simply clicking on a button.</p>
        </div>  

        <div className="info">

            <h2>Understanding Cricket</h2>
            <p>If you're new to cricket, here are some basic concepts:</p>
            <ul>
                <li><strong>Player:</strong> A person who participates in cricket matches.</li>
                <li><strong>Teams:</strong> Cricket is typically played between two teams, each consisting of eleven players.</li>
                <li><strong>Matches:</strong> Cricket matches can take various forms, including Test matches, One Day Internationals (ODIs), and Twenty20 (T20) matches.</li>
                <li><strong>Statistics:</strong> Cricket statistics include information such as runs scored, wickets taken, batting average, bowling average, etc.</li>
            </ul>

        </div>

        </section>
    );
}
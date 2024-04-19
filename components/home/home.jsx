import React, { useState } from "react";
import { useEffect } from "react";
import PlayerCard from "../playerCard/playerCard";
import './home.css';
import { useLocation } from "react-router-dom";

export default function Home(){

    // set state to store the data coming from api
    const [players, setPlayers] = useState([]);

    // set state for loading to do conditional rendering
    // when the response is not yet recevide from the api
    const [isLoading, setIsLoading] = useState(true);

    

    const search = useLocation().search
    const searchParams = new URLSearchParams(search)


    // if user has searched something call api to search
    useEffect( () => {
         
        if(searchParams.get('searchInput')){
            var userInput = searchParams.get('searchInput');
            fetch(`https://cric-stats-battle.onrender.com/api/search/?searchQuery=${userInput}`)
            .then( response => response.json() )
            .then( data => 
                     {
                     setPlayers(data);
                     setIsLoading(false);
                     });
        } else {
            console.log(searchParams.get('searchInput') + "no");

            fetch('https://cric-stats-battle.onrender.com/api/players?limit=20')
            .then( response => response.json() )
            .then( data => 
                     {
                     setPlayers(data);
                     setIsLoading(false);
                     });
        }
    }, []);
    
   
    return(
        
        <section id="home-container">
        {isLoading ? (
          <p>Fetching the data.. please wait</p>
        ) : (
          players.map((player) => (
            

            <PlayerCard
              id={player.id} 
              imgSrc={""}
              name={player.name}
              dobAndLocation={player.age}
              age={player.batsmanType} 
              batsmanType={player.playerType}
              bowlingType={player.bowlingType}
              country={player.country}
            />
          ))
        )}
      </section>
    );
}

// {
//     "_id": "661827e90f74a3e8a24a8f84",
//     "id": 35320,
//     "name": "Sachin Tendulkar",
//     "dob": "Sachin Ramesh Tendulkar",
//     "age": "April 24, 1973, Bombay (now Mumbai), Maharashtra",
//     "batsmanType": "50y 306d",
//     "bowlerType": "Tendlya, Little Master",
//     "playerType": "Right hand Bat",
//     "country": "Right arm Offbreak, Legbreak Googly"
//   }
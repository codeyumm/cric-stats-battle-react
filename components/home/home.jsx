import React, { useState } from "react";
import { useEffect } from "react";
import PlayerCard from "../playerCard/playerCard";


export default function Home(){

    // set state to store the data coming from api
    const [players, setPlayers] = useState([]);

    // set state for loading to do conditional rendering
    // when the response is not yet recevide from the api
    const [isLoading, setIsLoading] = useState(true);

    const [counter, setCounter] = useState(0);


    useEffect( () => {

        console.log("hello api called");
        fetch('https://cric-stats-battle.onrender.com/api/players')
        .then( response => response.json() )
        .then( data => 
                 {
                 setPlayers(data);
                 setIsLoading(false);
                 });
        
     
    }, []);
    
   
    return(
        
        <section id="home-container">
        {isLoading ? (
          <p>Fetching the data.. please wait</p>
        ) : (
          players.map((player) => (
            

            <PlayerCard
              key={player.id} // Add a unique key for each player
              imgSrc={"https://images.unsplash.com/photo-1593766788306-28561086694e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              name={player.name}
              dobAndLocation={player.age} // Assuming 'age' property contains the desired data
              age={player.batsmanType} // Assuming 'batsmanType' property contains the desired data
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
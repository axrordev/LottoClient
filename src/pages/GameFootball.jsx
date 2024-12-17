// import { useEffect } from "react";

// export default function GameFootboll() {
// 	const url = "https://api-football-v1.p.rapidapi.com/v3/widgets/Games";
// 	const options = {
// 		method: "GET",
// 		headers: {
// 			"X-RapidAPI-Key": "772ee1838amsh1d89f155f36a00bp132ef0jsn2fd150d49a97",
// 			"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
// 		},
// 	};
//   useEffect(() => {
// 		const ulan = async() => {
// 			try {
// 				const response = await fetch(url, options);
// 				const result = await response.text();
// 				console.log(result);
// 			} catch (error) {
// 				console.error(error);
// 			}
			
// 		}
// 		ulan()
// 	},[])
	
	
// 	return (
// 		<div>
// 			<h2>sliva</h2>
// 		</div>
// 	);
// }

// import React, { useState } from 'react';
// import axios from 'axios';





// import React, { useEffect, useState } from "react";

// const GameFootball = () => {
//   // const [matches, setMatches] = useState([]);

//   fetch("https://v3.football.api-sports.io/fixtures?live=all", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "4639e660f567b1f055ce4779b6bbab58"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

//   return (
//     <div>
//       <h1>Football Matches</h1>
//       {/* {matches.length > 0 ? (
//         <ul>
//           {matches.map((match) => (
//             <li key={match.fixture.id}>
//               {match.teams.home.name} vs {match.teams.away.name}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading matches...</p>
//       )} */}
//     </div>
//   );
// };

// export default GameFootball;

// import React, { useEffect, useState } from "react";

// const GameFootball = () => {
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     const fetchMatches = async () => {
//       try {
//         const response = await fetch(
//           "https://v3.football.api-sports.io/fixtures",
//           {
//             headers: {
//               "x-apisports-key": "4639e660f567b1f055ce4779b6bbab58"
//             }
//           }
//         );
//         if (response.ok) {
//           const data = await response.json();
//           const fixtures = data.response;
// 					console.log(fixtures);
					
//           const premierLeagueFixtures = fixtures.filter(
//             (fixture) => fixture.league.name === "Botola Pro"
//           );
//           setMatches(premierLeagueFixtures);
//         } else {
//           console.error("Error:", response.status);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchMatches();
//   }, []);

//   return (
//     <div>
//       <h1>Today's Premier League Fixtures</h1>
//       {matches.length > 0 ? (
//         <ul>
//           {matches.map((match) => (
//             <li key={match.fixture.id}>
//               {match.teams.home.name} vs {match.teams.away.name}
//               <br />
//               Start: {match.fixture.date}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading fixtures...</p>
//       )}
//     </div>
//   );
// };

// export default GameFootball;


import React, { useEffect, useState } from "react";

const GameFootball = () => {
  const [matches, setMatches] = useState([]);

  fetch("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "4639e660f567b1f055ce4779b6bbab58"
	}
})
.then(response => response.json().then(data => {
	console.log(data);
	// let matchesList = data['response'];
	// let fixture = matchesList[0];
	// let goals = matchesList[0]['goals'];
	// let teams = matchesList[0]['teams']

	// console.log(teams['home']['name']);
	
	
}))
.catch(err => {
	console.log(err);
})



  return (
    <div>
      <h1>Arsenal vs Chelsea</h1>
      {/* <h1>{fixture}</h1> */}
    </div>
  );
};

export default GameFootball;

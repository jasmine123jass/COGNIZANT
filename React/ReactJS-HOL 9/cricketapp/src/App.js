import "./App.css";

import ListofPlayers from "./Components/ListofPlayers";
import Scorebelow70 from "./Components/Scorebelow70";

import {
  OddPlayers,
  EvenPlayers,
  IndianPlayers,
  ListofIndianPlayers
} from "./Components/IndianPlayers";

function App() {

  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin1", score: 95 },
    { name: "Dhoni2", score: 100 },
    { name: "Virat3", score: 84 },
    { name: "Rohit4", score: 80 },
    { name: "Yuvraj5", score: 90 },
    { name: "Raina6", score: 75 }
  ];

  const IndianTeam = [
    "Sachin1",
    "Dhoni2",
    "Virat3",
    "Rohit4",
    "Yuvraj5",
    "Raina6"
  ];

  const flag = false;

  if (flag === true) {

    return (
      <div>

        <h1>List of Players</h1>

        <ListofPlayers players={players} />

        <hr />

        <h1>List of Players having Scores Less than 70</h1>

        <Scorebelow70 players={players} />

      </div>
    );

  } else {

    return (
      <div>

        <h1>Indian Team</h1>

        <h2>Odd Players</h2>
        <OddPlayers IndianTeam={IndianTeam} />

        <hr />

        <h2>Even Players</h2>
        <EvenPlayers IndianTeam={IndianTeam} />

        <hr />

        <h2>List of Indian Players Merged</h2>

        <ListofIndianPlayers IndianPlayers={IndianPlayers} />

      </div>
    );

  }

}

export default App;
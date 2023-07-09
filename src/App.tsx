import './App.css';
import { useState } from 'react';
import { TeamRanking } from './TeamRanking';
import CareerSettings from './CareerSettings';
import { randomTeamAndDriver } from './FormulaOneData';
import { Event } from 'ws';

function App() {

  const [showResults, setShowResults] = useState(false);
  const [teamRank, setTeamRank] = useState(TeamRanking.any);
  const [races, setRaces] = useState(23);

  function settings(e: any){
    e.preventDefault();
    setShowResults(true);
  }

  let content;
  if(showResults){
    let randomTeam = randomTeamAndDriver(teamRank);
    //70/30 chance favoring the first driver
    let driverChoice: number = Math.floor(Math.random() * 10) + 1;

    content = <CareerSettings team={randomTeam} teammate={driverChoice <= 7 ? randomTeam.driver1 : randomTeam.driver2}/>;
  }else{
    content =
    <form onSubmit={(e) => settings(e)} className="form">
      <div className="select">
          <select onChange={(e) => setRaces(parseInt(e.target.value))}>
            <option value="23">23 Races (full calendar)</option>
            <option value="16">16 Races</option>
            <option value="10">10 Races</option>
          </select>
      </div>

      <div className="select">
          <select onChange={(e) => setTeamRank(TeamRanking[e.target.value as keyof typeof TeamRanking])}>
            <option value="any">Any team</option>
            <option value="frontrunner">Frontrunners</option>
            <option value="midfield">Midfield</option>
            <option value="backmarker">Backmarkers</option>
          </select>
      </div>
      <input type="submit" />
    </form>
  }

  return (
    <div className="App">
      <div className="background"></div>
      {content}
    </div>
  );
}

export default App;

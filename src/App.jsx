import './styles/App.css';
import { useState } from 'react';
import { getTracks, randomTeamAndDriver } from './utils/FormulaOneData';
import CareerSettings from './CareerSettings';

function App() {

  const [showResults, setShowResults] = useState(false);
  const [teamRank, setTeamRank] = useState("any");
  const [races, setRaces] = useState(23);

  function settings(e){
    e.preventDefault();
    setShowResults(true);
  }

  function selectTracks(){
    let tracks = [...getTracks()];
    for(let i = 0; i < 23 - races; i++){
      let index = Math.floor(Math.random() * tracks.length);
      tracks.splice(index, 1);
    }
    return tracks;
  }

  let content;
  if(showResults){
    let randomTeam = randomTeamAndDriver(teamRank);
    //70/30 chance favoring the first driver
    let driverChoice = Math.floor(Math.random() * 10) + 1;
    let tracks = selectTracks();

    content = <CareerSettings tracks={tracks} team={randomTeam} teammate={driverChoice <= 7 ? randomTeam.driver1 : randomTeam.driver2}/>;
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
          <select onChange={(e) => setTeamRank(e.target.value)}>
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

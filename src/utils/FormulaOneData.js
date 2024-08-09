let tracks = [];
tracks.push("Bahrain International Circuit");
tracks.push("Jeddah Corniche Circuit");
tracks.push("Albert Park");
tracks.push("Baku City Circuit");
tracks.push("Miami International Autodrome");
tracks.push("Imola");
tracks.push("Monaco");
tracks.push("Circuit Paul Ricard");
tracks.push("Shanghai International Circuit");
tracks.push("Algarve International Circuit");
tracks.push("Circuit de Barcelona-Catalunya");
tracks.push("Circuit Gilles Villenueve");
tracks.push("Hungaroring");
tracks.push("Circuit de Spa-Francorchamps");
tracks.push("Monza");
tracks.push("Singapore Marina Bay");
tracks.push("Suzuka");
tracks.push("Losail International Circuit");
tracks.push("Circuit of the Americas");
tracks.push(" Autódromo Hermanos Rodríguez");
tracks.push("Interlagos");
tracks.push("Las Vegas Strip Street Circuit");
tracks.push("Yas Marina Circuit");

export function getTracks(){
    return tracks;
}

export class Team{
    constructor(name, driver1, driver2, ranking, imgLink){
        this.name = name;
        this.driver1 = driver1;
        this.driver2 = driver2;
        this.ranking = ranking;
        this.imgLink = imgLink;
    }
}

let teams = [];
teams.push(new Team("Mercedes", "Lewis Hamilton", "George Russell", "frontrunner", "mercedes.png"));
teams.push(new Team("Red Bull", "Max Verstappen", "Sergio Perez", "frontrunner", "rbr.png"));
teams.push(new Team("Ferrari", "Charles Leclerc", "Carlos Sainz", "frontrunner", "ferrari.png"));
teams.push(new Team("Mclaren", "Lando Norris", "Oscar Piastri", "frontrunner", "mclaren.png"));
teams.push(new Team("Aston Martin", "Fernando Alonso", "Lance Stroll", "midfield", "astonmartin.png"));
teams.push(new Team("Alpine", "Esteban Ocon", "Pierre Gasly", "midfield", "alpine.png"));
teams.push(new Team("Alpha Tauri", "Yuki Tsunoda", "Nick De Vries", "backmarker", "alphatauri.png"));
teams.push(new Team("Alpha Romeo", "Valterri Bottas", "Guanyu Zhou", "backmarker", "alpharomeo.png"));
teams.push(new Team("Haas", "Nico Hulkenburg", "Kevin Magnussen", "midfield", "haas.png"));
teams.push(new Team("Williams", "Alex Albon", "Logan Saergant", "midfield", "williams.png"));

export function randomTeamAndDriver(teamRanking = "any"){
    if(teamRanking === "any"){
        const index = Math.floor(Math.random() * teams.length);
        return teams[index];
    }else{
        let filteredTeams = teamByRanking(teamRanking);
        const index = Math.floor(Math.random() * filteredTeams.length);
        return filteredTeams[index];
    }
}

function teamByRanking(teamRanking){
    return teams.filter((team) => team.ranking === teamRanking);
}

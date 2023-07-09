let tracks: string[] = [];
tracks.push("Bahrain International Circuit");
tracks.push("Jeddah Corniche Circuit");
tracks.push("Albert Park");
tracks.push("Baku City Circuit");
tracks.push("Miami International Autodrome");
tracks.push("Imola");
tracks.push("Monaco");
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
tracks.push("Circuit Paul Ricard");
tracks.push("Shanghai International Circuit");
tracks.push("Algarve International Circuit");

class Team{
    name: string;
    driver1: string;
    driver2: string;
    imgLink: string;

    constructor(name: string, driver1: string, driver2: string, imgLink: string){
        this.name = name;
        this.driver1 = driver1;
        this.driver2 = driver2;
        this.imgLink = imgLink;
    }
}

let teams: Team[] = [];
teams.push(new Team("Mercedes", "Lewis Hamilton", "George Russell", ""));

export default {};

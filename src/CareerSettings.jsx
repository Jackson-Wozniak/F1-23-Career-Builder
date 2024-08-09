import './styles/CareerSettings.css';

const CareerSettings = (props) => {

    return ( 
        <div className="career-settings">
            <h3>Start your career with...</h3>

            <img src={require('./images/' + props.team.imgLink)} alt="logo" className="team-logo"/>

            <h4>Teammate: {props.teammate}</h4>

            <h3>Season Overview</h3>
            <div className="track-container">
                {props.tracks.map((track, index) => {
                    return <p key={track} className="tracks"> {(index + 1) + ".) " + track} <br /></p>
                })}
            </div>
        </div>
    );
}

export default CareerSettings;
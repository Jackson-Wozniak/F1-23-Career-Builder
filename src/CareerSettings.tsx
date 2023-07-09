import './CareerSettings.css';

const CareerSettings = (props: any) => {
    return ( 
        <div className="career-settings">
            <h3>Start your career with...</h3>

            <img src={require('./images/' + props.team.imgLink)} alt="logo" className="team-logo"/>

            <h4>Teammate: {props.teammate}</h4>
            
        </div>
    );
}

export default CareerSettings;
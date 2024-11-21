const CurrentWeather = ({ CurrentWeather }) => {
    return (
        <div className="current-weather">
          <img src="icons/clouds.svg" className="weather-icon" />
              <h2 className="temperature"> 
                 <span>°C</span> </h2>
                <p className="discription">{CurrentWeather.description}</p>
      </div> 
    );
};

export default CurrentWeather; 

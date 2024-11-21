import { useState } from "react";
 import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import SearchSection from "./components/SearchSection";

 const App = () => {
  const [currentWeather, setCurrentWeather]  = useState({});
   
    //Fetches weather details based on the API URL
   const getWeatherDetails = async (API_URL) => {
   try  {
       const response = await fetch (API_URL);
       const data = await response.json(); 
       
       const temperature = data.current.temp_c;
       const description = data.current.condition.text;

     setCurrentWeather({ temperature , description});
   }   catch(error) {
        console.log(error);
      }
   };
      
   return (
     <div className="container">
       {/* search section */}
         <SearchSection  getWeatherDetails={getWeatherDetails}/>

        {/* search section */}    
       <div className="weather-section">
        <CurrentWeather   getWeatherDetails={getWeatherDetails} /> 

             {/* hourly forecast list */}
            <div className="hourly-forecast">
               <ul className="weather-list">
                   <HourlyWeatherItem  />
               </ul>
            </div>
       </div>
   </div> 
  )
};

export default App;


  const SearchSection = ({getWeatherDetails}) => {
   const API_KEY  = import.meta.env.VITE_API_KEY;
    
     // Handles city search from submission
    const handleCitySearch = (e) =>   { 
      e.preventDefault();
      const searchInput = e.target.querySelector(".search-input");
      const API_URL = ` http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}`;
      getWeatherDetails(API_URL);  // Fetches weather details for the entered city
    };


    
    return ( 
     <div className="search-section">
        <form action="#" className="search-form"  onSubmit={handleCitySearch}> 
        <span className="material-symbols-rounded"> search</span>
         <input type="search" placeholder="Enter a city name" className="search-input" required />
        </form>               
          <button className="location-button">
            <span className="material-symbols-rounded">my_location</span>
          </button>                                                          
      </div>
    );
};

export default SearchSection;
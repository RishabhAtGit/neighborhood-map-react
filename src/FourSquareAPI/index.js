

//support code for connecting to FourSquare API for data

class APISupport {
     
    //function to setup header for fetch request
    static headers(){
        return {
            Accept: "application/json"
        };
    }

    // function to generate url using parameters
    static urlGenerator(url_parameters){
        if(url_parameters){
            return Object.keys(url_parameters).map(key => `${key}=${url_parameters[key]}`).join("&");
        }else{
            return "";
        }
    }

    // function performing simple data fetch
    static simpleDataFetch(endpoint,method, url_parameters){
        let requestData = {method, headers:APISupport.headers()};

        return fetch(`https://api.foursquare.com/v2${endpoint}?client_id=YCNK34PKLXEQG1TDRMIW21DANPBGRZ5NTE55NL2HQYPUUOZR&client_secret=0A11CTI0QZA5P3IKYU14F3YHPKN4OFWG2Y2KX5XY4LQAFKT5&v=20181212&${APISupport.urlGenerator(
            url_parameters
        )}`, requestData).then(response => response.json());
    }
}

//class for providing API functionality 
class FourSquareAPI {
    //function to search venues data
    static searchData(url_parameters){
        return APISupport.simpleDataFetch("/venues/search","GET",url_parameters);
    }

    //function to fetch venues details 
    static getVenuesDetails(venue_id){
        return APISupport.simpleDataFetch(`/venues/${venue_id}`,"GET");
    }

    //function to fetch venues picture 
    static getVenuePicture(venue_id){
        return APISupport.simpleDataFetch(`/venues/${venue_id}`,"GET");
    }
}

export default FourSquareAPI;
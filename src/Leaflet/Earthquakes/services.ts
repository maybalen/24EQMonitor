import axios from 'axios';

const getEarthquakes = async () => {

    try {
        const response = await axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");
        const { data } = response;
        return data; 
    } catch (error) {
        console.log('There was an error, please try again later', error);
        return false;
    }
};

export default getEarthquakes;

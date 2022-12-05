import axios from 'axios';

export const getGeoDataURL = (address) => {
    return `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_API_KEY}&location=${address}`;
};

export async function getLatAndLong(address) {
    let data = [];
    await axios
      .get(getGeoDataURL(address))
      .then((resp) => {
        console.log('Response received');
        console.log(resp);
        try {
          const longitude = resp.data.results[0].locations[0].displayLatLng.lng;
          const latitude = resp.data.results[0].locations[0].displayLatLng.lat;
          data = [latitude, longitude];
        } catch (error) {
          console.error(
            `Error: ${error}. Error in extracting latitude and/or longitude. Please ensure that a valid address was entered.`
          );
        }
      })
      .catch((err) => {
        console.error(`Fetch failed with error ${err.message}`);
        this.setState({ fetchError: true, isLoading: false });
      });
  
    return data;
}
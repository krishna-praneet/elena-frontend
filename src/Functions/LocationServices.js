import axios from 'axios';

export const getGeoDataURL = (address) => {
    return `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_API_KEY}&location=${address}`;
};

export async function getLatAndLong(address) {
    let data = [];
    await axios
      .get(getGeoDataURL(address))
      .then((resp) => {
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

export async function getMaxPath(startAddress, endAddress, offset) {
    let start = await getLatAndLong(startAddress);
    let end = await getLatAndLong(endAddress);
    console.log("start",start);
    console.log("end",end);
    const request = {
      start: {
        coordinates: start,
      },
      end: {
        coordinates: end
      },
      percentage: offset,
    };

    const headers = {
      "Content-Type": "application/json",
    }

    var response = {};
    await axios
      .post(`${process.env.REACT_APP_BACKEND_BASE_URL}${process.env.REACT_APP_CALC_MAX_ENDPOINT}`, JSON.stringify(request), {headers: headers})
      .then((resp) => {
        console.log("response",resp);
        response = resp;
      })
      .catch((err) => {
        console.log("error",err);
      })
    
    return response;
}


export async function getMinPath(startAddress, endAddress, offset) {
    let start = await getLatAndLong(startAddress);
    let end = await getLatAndLong(endAddress);
    console.log("start",start);
    console.log("end",end);
    const request = {
      start: {
        coordinates: start,
      },
      end: {
        coordinates: end
      },
      percentage: offset,
    };

    const headers = {
      "Content-Type": "application/json",
    }

    var response = {}; 
    await axios
      .post(`${process.env.REACT_APP_BACKEND_BASE_URL}${process.env.REACT_APP_CALC_MIN_ENDPOINT}`, JSON.stringify(request), {headers: headers})
      .then((resp) => {
        console.log("response",resp);
        response = resp;
      })
      .catch((err) => {
        console.log("error",err);
      })

    return response;
}
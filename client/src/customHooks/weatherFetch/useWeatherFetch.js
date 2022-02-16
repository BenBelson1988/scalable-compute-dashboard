import { useState } from "react";
import axios from "axios";

export const useWeatherFetch = () => {
  const [state, setState] = useState({
    cityName: "",
    countryName: "",
    condition: "",
    nowTemp: "",
    precipitation: "",
    humidity: "",
    wind: "",
    tempByHours: [],
    location: {},
    isLoading: false,
    error: "",
  });

  const searchCity = async (cityName) => {
    setState({ ...state, isLoading: true });
    const resp = await axios.get(`http://localhost:3000/${cityName}`);
    if (resp.data.error)
      setState({
        ...state,
        error: resp.data.error.message,
        cityName: "",
        countryName: "",
        condition: "",
        nowTemp: "",
        precipitation: "",
        humidity: "",
        wind: "",
        tempByHours: [],
        location: {},
        isLoading: false,
      });
    else
      setState({
        ...state,
        error: "",
        isLoading: false,
        condition: resp.data.current.condition.text,
        wind: resp.data.current.wind_kph + " km/h",
        cityName: resp.data.location.name,
        countryName: resp.data.location.country,
        nowTemp: resp.data.current.temp_c,
        precipitation: resp.data.current.precip_mm + " mm",
        humidity: resp.data.current.humidity + "%",
        location: resp.data.location,
        tempByHours: resp.data.forecast.forecastday[0].hour,
      });
  };
  return { state, searchCity };
};

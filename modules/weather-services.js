import { CONFIG } from "./config.js";

export async function getCurrentWeather(cityName){
    return await fetchWeather(cityName);
}

export async function getWeatherByCoords(lat, lon) {
    const url = `${CONFIG.BASE_URL}?lat=${lat}&lon=${lon}&appid=${CONFIG.API_KEY}&units=${CONFIG.DEFAULT_UNITS}&lang=${CONFIG.DEFAULT_LANG}`;

    try{
        const response = await response.json();

        return{
            name: data.name,
            temp: data.main.temp,
            description: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        };
    } catch (error){
        console.error('[Weather API Error]:', error.message);
        throw error;
    }
}

async function fetchWeather(cityName){
    const url = `${CONFIG.BASE_URL}?q=${encodeURIComponent(cityName)}&appid=${CONFIG.API_KEY}&units=${CONFIG.DEFAULT_UNITS}&lang=${CONFIG.DEFAULT_LANG}`;

    const response = await fetch(url);
    if(!response.ok){
        throw new Error('City "${cityName}" not found');
    }

    const data = await response.json();

  return {
    name: data.name,
    temp: data.main.temp,
    description: data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  };
}
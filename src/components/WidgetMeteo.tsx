import WeatherData from '@/@types/weather';
import { useEffect } from 'react';

interface WidgetProps {
  city: string;
  code: string;
}

const fetchData = async (city: string) => {
  const API_KEY = '47840f4f526d9cc69b4b575c52495860';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
  const result = await response.json();
  return result;
}

// si je ne precise rien ce composant est un server components
// il est executé coté server , il peut etre asynchrone
async function WidgetMeteo({ city, code }: WidgetProps) {

  const data = await fetchData(city) as WeatherData;
  console.log(data);
  // les console.log des server components se font dans la console coté server : le terminal
  const temp = Math.round(data.main.temp);
  const icon = data.weather[0].icon;

  return (
    <div className="bg-white/20 p-5 rounded-md border-solid border-white border-2 m-4 w-8/12 flex items-center justify-between">
      <div>
        <div className="font-bold text-xl">{city}</div>
        <div className="text-sm">{code}</div>
        <div className="font-bold text-2xl">{temp}°C</div>
      </div>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
    </div>
  )
}

export default WidgetMeteo;
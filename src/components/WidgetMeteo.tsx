import WeatherData from '@/@types/weather';
import Link from 'next/link';
import { useEffect } from 'react';

interface WidgetProps {
  city: string;
  code: string;
}

const fetchData = async (city: string) => {

  console.log('environnemnt : ', process.env.NODE_ENV);
  const API_KEY = process.env.API_KEY;

  // on va chercher l'url dans le fichier .env.development.local car process.env.NODE_ENV vaut developement
  // en prod on ira chercher dans .env.production.local
  const API_URL = process.env.API_URL;
  const response = await fetch(`${API_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
  const result = await response.json();
  return result;
}

// si je ne precise rien ce composant est un server components
// il est executé coté server , il peut etre asynchrone
async function WidgetMeteo({ city, code }: WidgetProps) {

  const data = await fetchData(city) as WeatherData;
  // console.log(data);
  // les console.log des server components se font dans la console coté server : le terminal
  const temp = Math.round(data.main.temp);
  const icon = data.weather[0].icon;

  return (
    <Link href={`/city/${city}`} className="bg-white/20 p-5 rounded-md border-solid border-white border-2 m-4 w-8/12 flex items-center justify-between">
      <div>
        <div className="font-bold text-xl">{city}</div>
        <div className="text-sm">{code}</div>
        <div className="font-bold text-2xl">{temp}°C</div>
      </div>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
    </Link>
  )
}

export default WidgetMeteo;
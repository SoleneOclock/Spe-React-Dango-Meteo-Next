import { useEffect } from 'react';

interface WidgetProps {
  city: string;
  code: string;
}

// si je ne precise rien ce composant est un server components
function WidgetMeteo({ city, code }: WidgetProps) {

  const fetchData = async () => {
    const API_KEY = '47840f4f526d9cc69b4b575c52495860';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const result = await response.json();
    console.log(result);
  }

  // on veut recuperer la temperature correspondante aux props
  useEffect(() => {
    // on fetch la temperature
    // on va  l'enregistrer dans le state : ça va redeclancher un rendu et l'afficher
    fetchData();
  }, []);

  return (
    <div className="bg-white/20 p-5 rounded-md border-solid border-white border-2 m-4 w-8/12">
      <div className="font-bold text-xl">{city}</div>
      <div className="text-sm">{code}</div>
      <div className="font-bold text-2xl">10°C</div>
    </div>
  )
}

export default WidgetMeteo;
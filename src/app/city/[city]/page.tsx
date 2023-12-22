import WeatherData from '@/@types/weather';

const fetchData = async (city: string) => {

  const API_KEY = process.env.API_KEY;
  const API_URL = process.env.API_URL;
  try {
    const response = await fetch(`${API_URL}/weather?q=${city}&units=metric&appid=${API_KEY}&lang=fr`);
    const result = await response.json();
    console.log(result)
    return result;
  } catch (e) {
    return undefined;
  }
}

async function City({ params }: {
  params: {
    city: string;
  }
}) {
  const data = await fetchData(params.city) as WeatherData;
  // recuperer la ville du param dynamique de l'URL 
  console.log(params);

  if (data.cod === 200) {    
    return (
      <main className="flex min-h-screen flex-col items-center p-5 bg-gradient-to-bl from-sky-800 to-sky-200">
        <div className="bg-white/20 p-5 rounded-md border-solid border-white border-2 m-4 w-8/12 flex items-center justify-between">
          <h1>{params.city}</h1>
          <div>{data.main.temp}</div>
          <div>{data.weather[0].description}</div>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
        </div>
      </main>
    )
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-5 bg-gradient-to-bl from-sky-800 to-sky-200">
      Cette ville n'existe pas !!
    </main>
  )

}

export default City;

import useGetWeather from "../api/useGetWeather";

type WeatherPropsType = {
  coordinates: { lat: number; lon: number };
  unit: "metric" | "imperial";
};

function Weather({ coordinates, unit }: WeatherPropsType) {
  const units = {
    imperial: {
      temperature: "F",
      speed: "Miles/hr",
    },
    metric: {
      temperature: "C",
      speed: "Km/hr",
    },
  };
  const { data, isLoading, isError, error } = useGetWeather(coordinates, unit);

  return (
    <main className="w-full grid py-4">
      <div>
        {isLoading && "loading"}
        {isError && <p>{error.message}</p>}
        {data ? (
          <>
            <p>
              <span className="font-bold">
                {data.data.name}, {data.data.sys.country}
              </span>{" "}
              | <span>{data.data.weather[0]?.description}</span>
            </p>
            <p className="text-xl md:text-xl">
              Temperature : {data?.data.main.temp} &deg;
              {units[unit].temperature}
            </p>
            <p>
              Wind speed : {data?.data.wind.speed} {units[unit].speed}
            </p>
          </>
        ) : null}
      </div>
    </main>
  );
}

export default Weather;

import { useAppContext } from "../context/AppContext";
import useGetWeather from "../api/useGetWeather";
import Loader from "./Loader";

type WeatherPropsType = {
  coordinates: { lat: number; lon: number };
};

function Weather({ coordinates }: WeatherPropsType) {
  const { unit } = useAppContext()!;
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
  const { data, isLoading, isError, error } = useGetWeather(coordinates);

  return (
    <main className="w-full grid py-4">
      <div>
        {isLoading && <Loader />}
        {isError && <p>{error.message}</p>}
        {data ? (
          <section className="flex flex-col gap-3">
            <p>
              <span className="font-bold text-xl">
                {data.data.name}, {data.data.sys.country}
              </span>
              {"  "}| <span>{data.data.weather[0]?.description}</span>
            </p>
            <div>
              <p className="text-xl md:text-xl">
                Temperature : {data?.data.main.temp} &deg;
                {units[unit].temperature}
              </p>
              <p className="">
                Wind speed : {data?.data.wind.speed} {units[unit].speed}
              </p>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}

export default Weather;

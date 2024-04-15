import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios/axios";
import { useUnitContext } from "../context/UnitsContext";

export default function useGetWeather(coordinates: {
  lat: number;
  lon: number;
}) {
  const { unit } = useUnitContext()!;
  function getWeather() {
    return instance.get(
      `data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=${unit}`
    );
  }
  return useQuery({
    queryFn: getWeather,
    queryKey: [`getWeather${coordinates.lat}${coordinates.lon}${unit}`],
  });
}

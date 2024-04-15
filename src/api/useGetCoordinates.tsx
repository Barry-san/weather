import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios/axios";

export default function useGetCoordinates(city: string) {
  function getCoordinates() {
    return instance.get(
      `geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_API_KEY}`
    );
  }
  return useQuery({
    queryFn: () => getCoordinates(),
    queryKey: [`getCoords${city.toLowerCase()}`],
    enabled: !!city,
    staleTime: 180000,
  });
}

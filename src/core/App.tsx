import { useState } from "react";
import Header from "../components/Header";
import Weather from "../components/Weather";
import Loader from "../components/Loader";
import useGetCoordinates from "../api/useGetCoordinates";
import LocationNotFound from "../components/LocationNotFound";
import RecentSearches from "../components/RecentSearches";
import { useSearchContext } from "../context/SearchContext";

function App() {
  const [city, setCity] = useState<string>("");
  const [formData, setFormData] = useState<string>("");
  const { data, refetch, isError, error, isFetching } = useGetCoordinates(city);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const { recentSearches, setRecentSearches } = useSearchContext()!;
  return (
    <>
      <Header />
      <main className="max-w-2xl p-4 mx-auto grid grid-rows-2 gap-4 ">
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setCity(() => formData);
              refetch();
              setRecentSearches(() => [
                formData,
                ...recentSearches.slice(0, 4),
              ]);
            }}
            className="flex flex-col gap-3 py-6"
          >
            <input
              id="city"
              type="text"
              placeholder="Enter your city e.g London"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
              className="border border-black py-2 px-3 rounded"
            />
            <button
              role="form"
              className="bg-blue-300 border border-black py-2 rounded"
            >
              Get forecast
            </button>
          </form>
          {isFetching && <Loader />}
          {isError && (
            <p className="md:text-2xl font-semibold">{error.message}</p>
          )}
          {data?.data.length === 0 && <LocationNotFound location={formData} />}
          {data?.data.length > 0 && (
            <Weather
              coordinates={{ lat: data?.data[0]?.lat, lon: data?.data[0]?.lon }}
              unit={unit}
            />
          )}
        </div>
        <RecentSearches />
      </main>
    </>
  );
}

export default App;

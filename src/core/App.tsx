import Header from "../components/Header";
import Weather from "../components/Weather";
import Loader from "../components/Loader";
import useGetCoordinates from "../api/useGetCoordinates";
import LocationNotFound from "../components/LocationNotFound";
import RecentSearches from "../components/RecentSearches";
import Form from "../components/Form";
import { useAppContext } from "../context/AppContext";

function App() {
  const { location } = useAppContext()!;
  const { data, isError, error, isFetching } = useGetCoordinates(location);

  return (
    <>
      <Header />
      <main className="max-w-2xl p-4 mx-auto grid grid-rows-2 gap-4 ">
        <div>
          <Form />
          {isFetching && <Loader />}
          {isError && (
            <p className="md:text-2xl font-semibold">{error.message}</p>
          )}
          {data?.data.length === 0 && <LocationNotFound location={location} />}
          {data?.data.length > 0 && (
            <Weather
              coordinates={{ lat: data?.data[0]?.lat, lon: data?.data[0]?.lon }}
            />
          )}
        </div>
        <RecentSearches />
      </main>
    </>
  );
}

export default App;

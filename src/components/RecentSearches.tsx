import { useAppContext } from "../context/AppContext";

export default function RecentSearches() {
  const { recentSearches, setRecentSearches, setLocation } = useAppContext()!;

  localStorage.setItem("recent_searches", JSON.stringify(recentSearches));
  return (
    <div className="flex flex-col">
      <h2 className="text-lg underline font-semibold">Recent Searches:</h2>
      {recentSearches.length === 0 ? (
        <p className="text-sm md:text-base">
          Your recently searched locations will appear here
        </p>
      ) : (
        <div className="flex flex-col items-start py-3">
          {recentSearches.map((location) => (
            <button
              key={location}
              onClick={() => setLocation(location)}
              className="md:text-lg"
            >
              {location}
            </button>
          ))}
          <button
            onClick={() => setRecentSearches([])}
            className="my-4 border border-black px-4"
          >
            Clear search history
          </button>
        </div>
      )}
    </div>
  );
}

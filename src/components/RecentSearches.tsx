import { useAppContext } from "../context/AppContext";

export default function RecentSearches() {
  const { recentSearches, setRecentSearches, setLocation } = useAppContext()!;

  localStorage.setItem("recent_searches", JSON.stringify(recentSearches));
  return (
    <div className="flex flex-col">
      <h2 className="text-lg md:text-2xl underline font-semibold">
        Recent Searches:
      </h2>
      {recentSearches.length === 0 ? (
        <p className="text-sm md:text-lg">
          Your recently searched locations will appear here.
        </p>
      ) : (
        <section className="flex flex-col items-start py-3 gap-2">
          <div className="flex flex-col md:flex-row gap-3 flex-wrap items-start">
            {recentSearches.map((location) => (
              <button
                key={location}
                onClick={() => setLocation(location)}
                className="md:text-lg border rounded-full px-4 bg-white capitalize overflow-clip text-clip"
              >
                {location}
              </button>
            ))}
          </div>
          <button
            onClick={() => setRecentSearches([])}
            className="my-6 border border-black px-4 bg-white"
          >
            Clear search history
          </button>
        </section>
      )}
    </div>
  );
}

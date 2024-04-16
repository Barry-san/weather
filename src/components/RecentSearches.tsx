import { useAppContext } from "../context/AppContext";

export default function RecentSearches() {
  const { recentSearches, setRecentSearches } = useAppContext()!;

  localStorage.setItem("recent_searches", JSON.stringify(recentSearches)); // whenever a new item is added, component is rerendered and localstorage is updated
  return (
    <div className="flex flex-col">
      <h2 className="text-lg underline font-semibold">Recent Searches:</h2>
      {recentSearches.length === 0 ? (
        <p className="text-sm md:text-base">
          Your recently searched locations will appear here
        </p>
      ) : (
        <>
          {recentSearches.map((location) => (
            <p key={location}>{location}</p>
          ))}
          <button onClick={() => setRecentSearches([])}>
            Clear search history
          </button>
        </>
      )}
    </div>
  );
}

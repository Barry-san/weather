import { useSearchContext } from "../context/SearchContext";

export default function RecentSearches() {
  const { recentSearches } = useSearchContext()!;
  localStorage.setItem("recent_searches", JSON.stringify(recentSearches));
  return (
    <div className="flex flex-col">
      <h2 className="text-lg underline font-semibold">Recent Searches:</h2>
      {recentSearches.length === 0 ? (
        <>Your recently searched locations will appear here</>
      ) : (
        <>
          {recentSearches.map((location) => (
            <p key={location}>{location}</p>
          ))}
        </>
      )}
    </div>
  );
}

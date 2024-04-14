import { useSearchContext } from "../context/SearchContext";

export default function RecentSearches() {
  const { recentSearches } = useSearchContext()!;
  return (
    <div className="flex flex-col p-4 ">
      <h2 className="text-lg underline font-semibold">Recent Searches:</h2>
      {recentSearches.length === 0 ? (
        <>Your recently searched locations will appear here</>
      ) : (
        <>
          {recentSearches.map((location) => (
            <p>{location}</p>
          ))}
        </>
      )}
    </div>
  );
}

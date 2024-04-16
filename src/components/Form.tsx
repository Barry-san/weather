import { useState } from "react";
import { useAppContext } from "../context/AppContext";

export default function Form() {
  const [city, setCity] = useState<string>("");
  const { setLocation, recentSearches, setRecentSearches } = useAppContext()!;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocation(city);
    if (!recentSearches.includes(city.toLowerCase())) {
      setRecentSearches(() => [
        city.toLowerCase(),
        ...recentSearches.slice(0, 4),
      ]);
    }
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 py-6">
        <input
          required
          id="city"
          type="text"
          placeholder="Enter your city e.g London"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-black py-2 px-3 rounded shadow-md"
          maxLength={60}
        />
        <button
          role="form"
          className="bg-blue-300 border border-black py-2 rounded text-lg shadow-md"
        >
          Get forecast
        </button>
      </form>
    </>
  );
}

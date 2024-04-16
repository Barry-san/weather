import { useAppContext } from "../context/AppContext";

export default function Header() {
  const { setUnit } = useAppContext()!;
  return (
    <header className="sticky top-0 w-full border-b p-4 font-serif italic flex flex-wrap gap-4 justify-between">
      <h1 className="text-2xl text-blue-500">Weather app</h1>
      <div className="flex items-center gap-3">
        <span>Units: </span>
        <select
          name="units"
          id=""
          onChange={(e) => setUnit(e.target.value as "metric" | "imperial")}
          className="font-sans p-2 bg-white border border-black"
        >
          <option value="metric">Metric (&deg;C, Km/h)</option>
          <option value="imperial">Imperial (&deg; F, Mile/h)</option>
        </select>
      </div>
    </header>
  );
}

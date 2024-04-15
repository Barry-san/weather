import { useUnitContext } from "../context/UnitsContext";

export default function Header() {
  const { setUnit } = useUnitContext()!;
  return (
    <header className="sticky top-0 w-full border-b p-4 font-serif italic flex flex-wrap gap-4 justify-between">
      <h1 className="text-2xl text-blue-500">Weather app</h1>
      <div className="flex items-center">
        <span>Units: </span>
        <select
          name="units"
          id=""
          onChange={(e) => setUnit(e.target.value as "metric" | "imperial")}
          className="font-sans text-xs md:text-sm p-2"
        >
          <option value="metric">Metric (&deg; C, Km/h)</option>
          <option value="imperial">Imperial (&deg; F, Mile/h)</option>
        </select>
      </div>
    </header>
  );
}

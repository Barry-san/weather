export default function LocationNotFound({ location }: { location: string }) {
  return (
    <div>
      <h1 className="text-md md:text-2xl">
        No locations matched <span className="italic">{location}</span>
      </h1>
      <p className="text-sm md:text-base">
        Try checking that your spelling is correct and try again.
      </p>
    </div>
  );
}

export default function ErrorComponent({ error }: { error: Error }) {
  return (
    <div>
      <p className="md:text-2xl font-semibold">{error.message}</p>
    </div>
  );
}

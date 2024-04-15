export default function Loader() {
  return (
    <section className="flex items-center  gap-2">
      <p className="text-lg md:text-xl">Loading...</p>
      <div className="h-8 w-8 border-4 border-white border-t-blue-400  rounded-full animate-spin"></div>
    </section>
  );
}

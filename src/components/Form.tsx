// import { useState } from "react";
// import useGetCoordinates from "../api/useGetCoordinates";
// import { useLocationContext } from "../context/LocationContext";

// export default function Form() {
//   const [city, setCity] = useState<string>("");
//   const { data, refetch, isError, error, isFetching } = useGetCoordinates(city);
//   return (
//     <>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           refetch();
//         }}
//         className="flex  items-center gap-3 p-6"
//       >
//         <label htmlFor="city" className="flex gap-3 items-center">
//           City:
//           <input
//             id="city"
//             type="text"
//             placeholder="Enter your city e.g London"
//             value={city}
//             onSubmit={(e) => setCity(e.currentTarget.value)}
//             className="outline outline-1 py-1 px-3"
//           />
//         </label>
//         <button role="form" className="bg-blue-200 px-5 py-1">
//           Get forecast
//         </button>
//       </form>
//       ;
//     </>
//   );
// }

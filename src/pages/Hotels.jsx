import { useState } from "react";
import { HotelCard } from "../components";
import { hotels } from "../data/hotelsData";

const Hotels = () => {
  const [visibleHotels, setVisibleHotels] = useState(6);

  const showMoreHotels = () => {
    setVisibleHotels(visibleHotels + 3);
  };

  return (
    <main className="w-full h-full flex flex-col gap-5 my-5 px-10">
      <section className="w-full flex justify-between items-center">
        <ul className="flex items-center justify-center gap-5 text-sm">
          <li className="list-item">New York</li>
          <li className="list-item">Mumbai</li>
          <li className="list-item">Paris</li>
          <li className="list-item">London</li>
        </ul>
        <button className="list-item">Favorites</button>
      </section>

      <section className="grid grid-cols-3 gap-10 my-5">
        {hotels.slice(0, visibleHotels).map((hotel) => (
          <section key={hotel.id}>
            <HotelCard hotel={hotel} />
          </section>
        ))}
      </section>
      <section className="flex items-center justify-center">
        {visibleHotels < hotels.length && (
          <button
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-white hover:text-blue-600 hover:border-[1px] border-blue-600 transition-all duration-300 ease-in-out"
            onClick={showMoreHotels}
          >
            Show More
          </button>
        )}
      </section>
    </main>
  );
};

export default Hotels;

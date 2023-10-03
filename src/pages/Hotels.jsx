import { useState } from "react";
import { HotelCard, Seo } from "../components";
import { hotels } from "../data/hotelsData";

const Hotels = () => {
  const [visibleHotels, setVisibleHotels] = useState(6);
  const [selectedTag, setSelectedTag] = useState("New York");

  const showMoreHotels = () => {
    setVisibleHotels(visibleHotels + 3);
  };

  const filterHotelByTag = (tag) => {
    setSelectedTag(tag);
    setVisibleHotels(6);
  };

  const filterdHotels = selectedTag
    ? hotels.filter((hotel) => hotel.tag === selectedTag)
    : hotels;

  return (
    <>
    <Seo title="Finder - Your Gateway to Premium Stays"/>
    <main className="w-full h-full flex flex-col gap-5 my-5 px-10">
      <section className="w-full flex justify-between items-center">
        <ul className="flex items-center justify-center gap-5 text-sm">
          <li
            className={`list-item ${
              selectedTag === "New York" ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => filterHotelByTag("New York")}
          >
            New York
          </li>
          <li
            className={`list-item ${
              selectedTag === "Mumbai" ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => filterHotelByTag("Mumbai")}
          >
            Mumbai
          </li>
          <li
            className={`list-item ${
              selectedTag === "Paris" ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => filterHotelByTag("Paris")}
          >
            Paris
          </li>
          <li
            className={`list-item ${
              selectedTag === "London" ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => filterHotelByTag("London")}
          >
            London
          </li>
        </ul>
      </section>

      <section className="grid grid-cols-3 gap-10 my-5">
        {filterdHotels.slice(0, visibleHotels).map((hotel) => (
          <section key={hotel.id}>
            <HotelCard hotel={hotel} />
          </section>
        ))}
      </section>
      <section className="flex items-center justify-center">
        {visibleHotels < filterdHotels.length && (
          <button
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-white hover:text-blue-600 hover:border-[1px] border-blue-600 transition-all duration-300 ease-in-out"
            onClick={showMoreHotels}
          >
            Show More
          </button>
        )}
      </section>
    </main>
    </>
  );
};

export default Hotels;

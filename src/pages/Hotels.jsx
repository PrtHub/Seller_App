import { HotelCard } from "../components";
import { hotels } from "../data/hotelsData";

const Hotels = () => {
  return (
    <main className="w-full h-full flex flex-col gap-5 my-5 px-10">
      <section className="w-full flex justify-between items-center">
        <ul className="flex items-center justify-center gap-5 text-sm">
          <li className="list-item">Mumbai</li>
          <li className="list-item">New York</li>
          <li className="list-item">Paris</li>
          <li className="list-item">London</li>
        </ul>
        <button className="list-item">Favorites</button>
      </section>

      <section className="grid grid-cols-3 gap-10 my-5">
        {hotels.map((hotel) => (
          <section key={hotel.id}>
            <HotelCard hotel={hotel} />
          </section>
        ))}
      </section>
    </main>
  );
};

export default Hotels;

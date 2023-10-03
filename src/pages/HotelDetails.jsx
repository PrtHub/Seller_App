import { useParams } from "react-router-dom";
import { hotels } from "../data/hotelsData";

const HotelDetails = () => {
  const { id } = useParams();
  console.log(id);
  const properties = hotels.find((hotel) => hotel.id === parseInt(id));
  console.log(properties);

  return (
    <main>
      <h1>{properties?.name}</h1>
    </main>
  );
};

export default HotelDetails;

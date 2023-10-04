import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useParams } from "react-router-dom";
import { hotels } from "../data/hotelsData";
import { CiLocationOn } from "react-icons/ci";
import { Seo } from "../components";

const HotelDetails = () => {
  const { id } = useParams();
  console.log(id);
  const property = hotels.find((hotel) => hotel.id === parseInt(id));

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Seo title={`${property.name} - Finder`} />
      <main className="w-full h-full flexStart gap-5 my-20 px-10">
        <LazyLoadImage
          alt={property.name}
          effect="blur"
          src={property.img}
          className="w-full h-72 object-cover rounded-xl"
        />
        <section className="flex flex-col gap-2">
          <p className="flex items-center gap-1 text-xs">
            <CiLocationOn className="text-orange-400" />{" "}
            <span className="text-gray-600">{property.location}</span>
          </p>
          <h1 className="text-gray-600 text-base font-medium">
            {property.name}
          </h1>
        </section>
        <p className="flex flex-col text-gray-600 text-lg font-semibold">
          About
          <span className="text-gray-500 text-sm leading-6 font-normal">
            {property.des}
          </span>
        </p>
        <button
          onClick={goBack}
          className="blueBtn mt-10"
        >
          &larr; Back
        </button>
      </main>
    </>
  );
};

export default HotelDetails;

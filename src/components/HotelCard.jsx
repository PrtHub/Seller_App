/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CiLocationOn } from "react-icons/ci";
import { RiHotelLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { FaArrowsAlt } from "react-icons/fa";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

  const redirect = () => {
    window.scrollTo(0, 0);
    navigate(`/property/${hotel.id}`);
  };
  return (
    <main className="w-full h-[490px] bg-blue-50 flex flex-col gap-4 rounded-xl shadow-lg p-4">
      <section className="w-full h-64 relative">
        <LazyLoadImage
          alt={hotel.name}
          effect="blur"
          src={hotel.img}
          className="w-full h-64 object-cover rounded-xl"
        />
        <div className="absolute top-2 left-2 bg-white text-blue-600 px-3 py-2 font-semibold text-xs rounded-xl ">
          For Rent
        </div>
        {!favorite ? (
          <div className="favorite">
            <MdOutlineFavoriteBorder
              onClick={() => setFavorite(true)}
              className="cursor-pointer"
            />
          </div>
        ) : (
          <div className="favorite">
            <MdOutlineFavorite
              onClick={() => setFavorite(false)}
              className="text-red-500 cursor-pointer"
            />
          </div>
        )}
      </section>
      <article className="w-full h-full flex flex-col justify-between gap-5">
        <section className="w-full flexStart gap-1">
          <p className="flex items-center gap-1 text-xs">
            <CiLocationOn className="text-orange-400" />{" "}
            <span className="text-gray-600">{hotel.location}</span>
          </p>
          <h1 className="text-gray-600 text-base font-medium">{hotel.name}</h1>
        </section>
        <section className="flex items-center justify-between px-5">
          <div className="flexStart gap-1">
            <RiHotelLine className="text-gray-600" />
            <span className="text-gray-600 text-sm font-medium">
              {hotel.room} Room
            </span>
          </div>
          <div className="flexStart gap-1">
            <IoBedOutline className="text-gray-600" />
            <span className="text-gray-600 text-sm font-medium">
              {hotel.bed} Bed
            </span>
          </div>
          <div className="flexStart gap-1">
            <GiBathtub className="text-gray-600" />
            <span className="text-gray-600 text-sm font-medium">
              {hotel.bath} Bath
            </span>
          </div>
          <div className="flexStart gap-1">
            <FaArrowsAlt className="text-gray-600" />
            <span className="text-gray-600 text-sm font-medium">732 sft</span>
          </div>
        </section>
        <section className="flex justify-between items-center">
          <p className="text-blue-600 font-medium">
            {hotel.price}
            <span className="text-gray-600 text-sm">/month</span>
          </p>
          <button
            onClick={redirect}
            className="readBtn"
          >
            Read More
          </button>
        </section>
      </article>
    </main>
  );
};

export default HotelCard;

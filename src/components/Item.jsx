import React from "react";
import { FaHeart } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { TbDroplet } from "react-icons/tb";
import { GiGrain } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Item = ({ property }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`../listing/${property.id}`)}
      className="rounded-lg overflow-hidden bg-white ring-1 ring-slate-900/5"
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="h-[13rem] w-full aspect-square object-cover"
        />
      </div>
      {/* INFO */}
      <div className="m-3">
        <div className="flexBetween">
          <h5 className="bold-16 my-1 text-secondary">{property.city}</h5>
          <h4 className="h4">₦{property.price?.toLocaleString()}</h4>
        </div>
        <h4 className="medium-18 line-clamp-1">{property.title}</h4>
        <div className="flex gap-x-2 py-2">
          <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
            <GiWeight /> {property.details?.weight_kg ?? property.area ?? "N/A"}
            kg
          </div>
          <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
            <TbDroplet /> {property.details?.moisture_percent ?? "N/A"}%
          </div>
          <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
            <GiGrain /> {property.details?.grade ?? property.category ?? "N/A"}
          </div>
        </div>
        <p className="pt-2 mb-4 line-clamp-2">{property.description}</p>

        {/* WhatsApp Contact */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(
                `https://wa.me/2348027928841?text=Hi Speedlix, I'm interested in ${property.title} in ${property.city}, ${property.state} State, Nigeria. Price: ₦${property.price?.toLocaleString()}. Can we discuss?`,
              );
            }}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-3 rounded-lg transition-colors duration-200 font-medium"
          >
            💬 WhatsApp Speedlix
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

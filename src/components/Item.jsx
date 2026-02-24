import React from "react";
import { FaHeart } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { TbDroplet } from "react-icons/tb";
import { GiGrain } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`../products/${product.id}`)}
      className="rounded-lg overflow-hidden bg-white ring-1 ring-slate-900/5"
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-[13rem] w-full aspect-square object-cover"
        />
      </div>
      {/* INFO */}
      <div className="m-3">
        <div className="flexBetween">
          <h5 className="bold-16 my-1 text-green-600">{product.category}</h5>
        </div>
        <h4 className="medium-18 line-clamp-1">{product.title}</h4>
        <div className="flex gap-x-2 py-2">
          <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
            <GiWeight /> {product.details?.weight_kg ?? product.area ?? "N/A"}
            kg
          </div>
          <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
            <TbDroplet /> {product.details?.moisture_percent ?? "N/A"}%
          </div>
          <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
            <GiGrain /> {product.details?.grade ?? product.category ?? "N/A"}
          </div>
        </div>
        <p className="pt-2 mb-4 line-clamp-2">{product.description}</p>

        {/* WhatsApp Order Button */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              const weight = product.details?.weight_kg ?? "N/A";
              const grade = product.details?.grade ?? product.category ?? "N/A";
              const msg = `Hi IROHBEST, I'm interested in ordering ${product.title} (category: ${product.category}, weight: ${weight}kg, grade: ${grade}). Please advise on bulk pricing and delivery.`;
              window.open(`https://wa.me/2348027928841?text=${encodeURIComponent(msg)}`);
            }}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-3 rounded-lg transition-colors duration-200 font-medium"
          >
            💬 Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

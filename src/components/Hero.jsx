import React from "react";
import { Link } from "react-router-dom";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat relative overflow-hidden w-full min-h-[680px] py-20 md:py-28 flex items-center">
      <div className="max-w-[45rem]">
        <h1 className="h1 capitalize">
          Discover Your Perfect Home <br /> with Speelix Ideal Homes
        </h1>

        <p className="my-5 max-w-[33rem] text-gray-700">
          From luxury apartments in Lekki to serene family homes across Nigeria,
          <strong> SPEELIX IDEAL HOME (NIG) LTD </strong> makes property buying, selling, or renting
          simple, transparent, and stress-free.
        </p>

        {/* CTA */}
        <div className="inline-flex items-center justify-center gap-4 bg-white rounded ring-1 ring-slate-900/5 mt-4">
          <div className="text-center regular-14 leading-tight pl-5 cursor-default">
            <p className="regular-14">
              <span className="uppercase font-bold text-[#008274]">Limited Offer</span> – Get up to <strong>10% off</strong> select properties
            </p>
          </div>
          <Link to="/listing" className="btn-dark !rounded-tl-none !rounded-bl-none !rounded-lg">
            Explore
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-10 mb-5">
          <div className="flex items-center">
            {/* Overlapping avatars without absolute */}
            <div className="flex -space-x-3">
              <img src={client1} alt="" className="h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm" />
              <img src={client2} alt="" className="h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm" />
              <img src={client3} alt="" className="h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm" />
              <img src={client1} alt="" className="h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm" />
              <img src={client2} alt="" className="h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm" />
              <div className="h-12 w-12 rounded-full ring-2 ring-white bg-slate-500/70 text-white flex items-center justify-center text-xs font-semibold shadow-sm">
                1k+
              </div>
            </div>

          
          </div>

          <div className="mt-4">
            <div className="flex gap-1 text-yellow-500 text-sm">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className="bold-14 sm:bold-16 mt-1">
              2k <span className="regular-14 sm:regular-16">Excellent Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

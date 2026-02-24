import React from "react";
import { Link } from "react-router-dom";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat relative overflow-hidden w-full min-h-screen py-20 md:py-28 flex items-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="max-w-[45rem] z-10 pl-6 md:pl-12 lg:pl-20 text-white">
        <h1 className="h1 capitalize text-white leading-tight text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl drop-shadow-lg">
          Premium Cassava Products
          <br /> from IROHBEST Mill & Farm
        </h1>

        <p className="my-5 max-w-[33rem] text-white/90 drop-shadow-lg">
          From fresh cassava roots to premium garri, cassava flour, and fufu
          flour,
          <strong> IROHBEST Mill & Farm Ltd </strong> delivers hygienic, quality
          agricultural products direct from farm to your table.
        </p>

        {/* CTA */}
        <div className="inline-flex items-center justify-center gap-4 bg-white/90 rounded ring-1 ring-slate-900/5 mt-4">
          <div className="text-center regular-14 leading-tight pl-5 cursor-default">
            <p className="regular-14">
              <span className="uppercase font-bold text-green-600">
                Farm Fresh
              </span>{" "}
              – Order bulk products at competitive prices
            </p>
          </div>
          <Link
            to="/products"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
          >
            View Products
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-10 mb-5">
          <div className="flex items-center">
            {/* Overlapping avatars without absolute */}
            <div className="flex -space-x-3">
              <img
                src={client1}
                alt=""
                className="h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm"
              />
              <img
                src={client2}
                alt=""
                className="h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm"
              />
              <img
                src={client3}
                alt=""
                className="h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm"
              />
              <img
                src={client1}
                alt=""
                className="h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm"
              />
              <img
                src={client2}
                alt=""
                className="h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm"
              />
              <div className="h-12 w-12 rounded-full ring-2 ring-white bg-slate-500/70 text-white flex items-center justify-center text-xs font-semibold shadow-sm">
                500+
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex gap-1 text-yellow-500 text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="bold-14 sm:bold-16 mt-1">
              450+{" "}
              <span className="regular-14 sm:regular-16">
                Customer Reviews on Product Quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

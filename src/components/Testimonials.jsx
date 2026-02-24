import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import product1 from "../assets/img1.png";
import product2 from "../assets/img2.png";
import product3 from "../assets/img3.png";
import product4 from "../assets/img4.png";

const Testimonials = () => {
  return (
    <section className="max-padd-container bg-white py-16 xl:pt-28">
      {/* CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] gap-20 mb-16 rounded-2xl">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between gap-10">
          <div>
            <h2 className="h2 text-green-600">What Our Customers Say</h2>
            <p className="text-gray-700 mt-2 max-w-sm">
              Real feedback from satisfied customers who trust{" "}
              <strong>IROHBEST Mill & Farm Ltd</strong> for quality products.
            </p>
          </div>

          <div className="flex flex-col gap-1 bg-white p-4 rounded-xl shadow-sm ring-1 ring-slate-200 max-w-xs">
            <div className="flex text-yellow-500 gap-1 text-lg">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="medium-14 text-gray-600">
              Showing <b>1–2</b> of <b>450+</b> verified reviews
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          {/* CARD 1 */}
          <div className="rounded-xl p-5 bg-white ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="flexBetween mb-2">
              <div className="flexCenter gap-x-3">
                <img
                  src={user2}
                  alt="client photo"
                  height={44}
                  width={44}
                  className="rounded-full border border-slate-200"
                />
                <div>
                  <h5 className="bold-14">Chukwu Emeka</h5>
                  <p className="text-gray-500 text-xs">Port Harcourt, Rivers</p>
                </div>
              </div>
              <div className="bg-[#008274] text-white rounded-full flexCenter gap-x-2 p-1 px-2 text-xs font-semibold">
                <FaCheck />
                Verified
              </div>
            </div>

            <hr className="h-[1px] w-full my-2 border-slate-100" />

            <div className="flex gap-x-1 text-yellow-500 text-xs mt-3 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <h4 className="h4 mb-1">Premium Quality Garri</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              "IROHBEST garri is the best I've ever tasted! Finely processed,
              pure cassava, and so fresh. My family asks for it by name now.
              Highly recommended!"
            </p>

            <div className="flex gap-x-1 mt-4">
              <img
                src={product1}
                alt="product"
                height={44}
                width={44}
                className="rounded object-cover aspect-square"
              />
              <img
                src={product2}
                alt="product"
                height={44}
                width={44}
                className="rounded object-cover aspect-square"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl p-5 bg-white ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="flexBetween mb-2">
              <div className="flexCenter gap-x-3">
                <img
                  src={user1}
                  alt="client photo"
                  height={44}
                  width={44}
                  className="rounded-full border border-slate-200"
                />
                <div>
                  <h5 className="bold-14">Ngozi Okonkwo</h5>
                  <p className="text-gray-500 text-xs">Lagos, Nigeria</p>
                </div>
              </div>
              <div className="bg-green-600 text-white rounded-full flexCenter gap-x-2 p-1 px-2 text-xs font-semibold">
                <FaCheck />
                Verified
              </div>
            </div>

            <hr className="h-[1px] w-full my-2 border-slate-100" />

            <div className="flex gap-x-1 text-yellow-500 text-xs mt-3 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <h4 className="h4 mb-1">Best Bulk Supplier</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              "Running a food business became easy with IROHBEST. Their bulk
              supplies are consistent, hygienic, and the WhatsApp ordering is so
              convenient. Perfect wholesale partner!"
            </p>

            <div className="flex gap-x-1 mt-4">
              <img
                src={product3}
                alt="product"
                height={44}
                width={44}
                className="rounded object-cover aspect-square"
              />
              <img
                src={product4}
                alt="product"
                height={44}
                width={44}
                className="rounded object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

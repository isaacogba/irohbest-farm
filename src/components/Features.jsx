import React from "react";
import { FaSeedling } from "react-icons/fa";
import { GiGrain } from "react-icons/gi";
import { BiSolidStar } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Features = () => {
  return (
    <section className="max-padd-container py-10 bg-white">
      {/* CONTAINER */}
      <div className="max-padd-container flexBetween flex-wrap gap-8">
        <div className="flex items-start gap-x-3">
          <FaSeedling className="text-3xl text-green-600" />
          <h4 className="medium-18">Farm-to-Mill Processing</h4>
        </div>
        <div className="flex items-start gap-x-3">
          <BiSolidStar className="text-3xl text-green-600" />
          <h4 className="medium-18">Hygienic Production</h4>
        </div>
        <div className="flex items-start gap-x-3">
          <GiGrain className="text-3xl text-green-600" />
          <h4 className="medium-18">Bulk Supply Available</h4>
        </div>
        <div className="flex items-start gap-x-3">
          <FaWhatsapp className="text-4xl text-green-600 relative bottom-1" />
          <h4 className="medium-18">Quick WhatsApp Orders</h4>
        </div>
      </div>
    </section>
  );
};

export default Features;

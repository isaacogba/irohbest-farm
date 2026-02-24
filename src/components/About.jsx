import React from "react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import {
  FaLeaf,
  FaShieldAlt,
  FaTruck,
  FaPhone,
  FaCheckCircle,
  FaStar,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="max-padd-container pb-16 xl:pb-28">
      {/* FIRST CONTAINER */}
      <div className="flex items-center flex-col lg:flex-row gap-12">
        {/* IMAGE - LEFT SIDE */}
        <div className="flex-1">
          <div className="relative">
            <img
              src={about1}
              alt="IROHBEST Farm Processing"
              className="rounded-3xl"
            />
            <span className="absolute top-8 left-8 bg-white px-3 py-1 rounded-full medium-14 shadow">
              Abia State
            </span>
          </div>
        </div>

        {/* INFO - RIGHT SIDE */}
        <div className="flex-1">
          <h2 className="h2">
            From Farm to Table—Premium Cassava Products You Can Trust
          </h2>
          <p className="mt-3 text-muted">
            At <strong>IROHBEST Mill & Farm Ltd</strong>, we cultivate quality
            cassava using sustainable farming practices, process it with
            hygienic standards, and deliver premium garri, cassava flour, and
            fufu flour directly to your wholesale business. Bulk orders,
            guaranteed freshness, WhatsApp convenience.
          </p>

          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3 items-start">
              <FaLeaf className="text-green-600 mt-1" />
              <p>
                Farm-to-Mill processing—from harvest to packaging in our
                facility.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FaShieldAlt className="text-green-600 mt-1" />
              <p>
                Hygienic production standards with quality control at every
                stage.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FaTruck className="text-green-600 mt-1" />
              <p>
                Bulk supply capability—wholesale rates for retailers and
                distributors.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FaPhone className="text-green-600 mt-1" />
              <p>
                Quick WhatsApp ordering—place bulk orders and get instant
                replies.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-600 mt-1" />
              <p>
                Consistent quality—each batch tested for moisture, purity, and
                grade.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND CONTAINER */}
      <div className="flex items-center flex-col lg:flex-row gap-12 mt-36">
        {/* INFO - LEFT SIDE */}
        <div className="flex-1">
          <h2 className="h2">
            Why Businesses Choose IROHBEST for Cassava Products
          </h2>
          <p className="mt-3 text-muted">
            Whether you run a food business, restaurant, or distribute
            agricultural products, IROHBEST offers reliable partnerships.
            Transparent pricing, flexible bulk orders, and direct farm access
            mean you get the best value for your business.
          </p>

          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3 items-start">
              <FaStar className="text-green-600 mt-1" />
              <p>
                Grade A & Organic cassava varieties available—choose what suits
                your market.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FaHandshake className="text-green-600 mt-1" />
              <p>
                Distributor partnerships with competitive wholesale rates &
                volume discounts.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-600 mt-1" />
              <p>Fast turnaround—order today, ship within 24-48 hours.</p>
            </div>
            <div className="flex gap-3 items-start">
              <FaTruck className="text-green-600 mt-1" />
              <p>Flexible delivery options—nationwide shipping available.</p>
            </div>
            <div className="flex gap-3 items-start">
              <FaGlobe className="text-green-600 mt-1" />
              <p>
                Sustainable farming practices—support local, quality
                agriculture.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE - RIGHT SIDE */}
        <div className="flex-1">
          <div className="relative flex justify-end">
            <img
              src={about2}
              alt="Premium Garri Production"
              className="rounded-3xl"
            />
            <span className="absolute top-8 right-8 bg-white px-3 py-1 rounded-full medium-14 shadow">
              Premium Quality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

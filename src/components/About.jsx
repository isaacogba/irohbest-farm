import React from 'react';
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import {
  FaVideo,
  FaChartLine,
  FaEnvelope,
  FaInbox,
  FaList,
  FaMap,
  FaMapMarkedAlt,
  FaUser,
} from 'react-icons/fa';

const About = () => {
  return (
    <section className="max-padd-container pb-16 xl:pb-28">
      {/* FIRST CONTAINER */}
      <div className="flex items-center flex-col lg:flex-row gap-12">
        {/* IMAGE - LEFT SIDE */}
        <div className="flex-1">
          <div className="relative">
            <img src={about1} alt="Speelix Agent Showing Property" className="rounded-3xl" />
            <span className="absolute top-8 left-8 bg-white px-3 py-1 rounded-full medium-14 shadow">
              Lekki Phase 1
            </span>
          </div>
        </div>

        {/* INFO - RIGHT SIDE */}
        <div className="flex-1">
          <h2 className="h2">Empowering You to Find Your Ideal Home—Without the Stress</h2>
          <p className="mt-3 text-muted">
            At <strong>SPEELIX IDEAL HOME (NIG) LTD</strong>, we turn complex real estate decisions into simple,
            confident moves. Whether you’re buying, selling, leasing, or hosting a short-let, our verified listings,
            transparent fees, and hands-on support keep you informed at every step.
          </p>

          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3 items-start">
              <FaVideo className="text-secondary mt-1" />
              <p>Virtual tours & live video viewings—see every detail before you commit.</p>
            </div>
            <div className="flex gap-3 items-start">
              <FaChartLine className="text-secondary mt-1" />
              <p>Real-time market insights to guide pricing, offers, and negotiations.</p>
            </div>
            <div className="flex gap-3 items-start">
              <FaMap className="text-secondary mt-1" />
              <p>Interactive maps & area guidance—schools, security, traffic, and utilities.</p>
            </div>
            <div className="flex gap-3 items-start">
              <FaMapMarkedAlt className="text-secondary mt-1" />
              <p>Early access to select off-market and exclusive listings.</p>
            </div>
            <div className="flex gap-3 items-start">
              <FaEnvelope className="text-secondary mt-1" />
              <p>Direct messaging with agents & owners for fast, transparent communication.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND CONTAINER */}
      <div className="flex items-center flex-col lg:flex-row gap-12 mt-36">
        {/* INFO - LEFT SIDE */}
        <div className="flex-1">
          <h2 className="h2">Simplifying Your Real Estate Journey—From Enquiry to Keys-in-Hand</h2>
          <p className="mt-3 text-muted">
            We combine neighborhood expertise with clean documentation and timely updates. Schedule inspections,
            compare options, and close with confidence—no hidden charges, no last-minute surprises.
          </p>

          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3 items-start">
              <FaList className="text-secondary mt-1" />
              <p>In-app scheduling for inspections with automated reminders.</p>
            </div>
            <div className="flex gap-3 items-start">
              <FaChartLine className="text-secondary mt-1" />
              <p>Up-to-date pricing trends across Lagos Mainland & Island.</p>
            </div>
            <div className="flex gap-3 items-start">
              <FaInbox className="text-secondary mt-1" />
              <p>Clean, user-friendly interface for browsing, saving, and sharing listings.</p>
            </div>
            <div className="flex gap-3 items-start">
              <FaUser className="text-secondary mt-1" />
              <p>Detailed agent profiles—reviews, specialties, and recent closings.</p>
            </div>
            <div className="flex gap-3 items-start">
              <FaMapMarkedAlt className="text-secondary mt-1" />
              <p>Short-let/Airbnb management: setup, pricing, guest support, and cleaning.</p>
            </div>
          </div>
        </div>

        {/* IMAGE - RIGHT SIDE */}
        <div className="flex-1">
          <div className="relative flex justify-end">
            <img src={about2} alt="Modern Apartment Exterior" className="rounded-3xl" />
            <span className="absolute top-8 right-8 bg-white px-3 py-1 rounded-full medium-14 shadow">
              Victoria Island
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

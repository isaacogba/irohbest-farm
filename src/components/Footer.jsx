import React from 'react';
import { FaMailBulk, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-white border-t">
      {/* Top helper strip */}
      <div className="max-padd-container flex items-start justify-between flex-col lg:flex-row gap-8 py-6 mb-7 bg-gradient-to-r from-primary via-white to-white rounded-b-xl">
        <div className="max-w-2xl">
          <h4 className="h4">We’re always here to help</h4>
          <p className="text-gray-700">
            SPEELIX IDEAL HOME (NIG) LTD provides transparent support for Property Purchase, Sales, Lease/Rent, and Airbnb/Short-Let Management.
          </p>
        </div>

        <div className="flexStart flex-wrap gap-8">
          <div className="flexCenter gap-x-4">
            <FaLocationDot aria-hidden="true" className="text-xl" />
            <div>
              <h5 className="h5">Location</h5>
              <p className="text-gray-700">Lekki Phase 1, Lagos, Nigeria</p>
            </div>
          </div>

          <div className="flexCenter gap-x-4">
            <FaPhone aria-hidden="true" className="text-xl" />
            <div>
              <h5 className="h5">Phone / WhatsApp</h5>
              <p className="text-gray-700">
                <a href="tel:+2348027928841" className="hover:underline">0802 792 8841</a> /{' '}
                <a href="tel:+2348073433054" className="hover:underline">0807 343 3054</a>
              </p>
            </div>
          </div>

          <div className="flexCenter gap-x-4">
            <FaMailBulk aria-hidden="true" className="text-xl" />
            <div>
              <h5 className="h5">Email Support</h5>
              <p className="text-gray-700">
                <a href="mailto:speelixidealhome@gmail.com" className="hover:underline">speelixidealhome@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-padd-container flex items-start justify-between flex-wrap gap-12 mt-12">
        {/* Brand block */}
        <div className="flex flex-col max-w-sm gap-y-5">
          <Link to="/" aria-label="Go to Speelix home">
            <img src={logo} alt="SPEELIX IDEAL HOME (NIG) LTD logo" className="h-24 mix-blend-multiply" />
          </Link>
          <p className="text-gray-700">
            At <strong>SPEELIX IDEAL HOME (NIG) LTD</strong>, we match clients with verified properties across Lagos & beyond,
            guiding you from enquiry to keys-in-hand—clear pricing, clean paperwork, and timely updates.
          </p>
          <p className="text-gray-600 text-sm">Office Hours: Mon–Sat, 9:00–18:00 (WAT)</p>
          {/* Optional social links */}
          <div className="flex items-center gap-4">
            {/* Replace with real URLs when ready */}
            {/* <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary">Instagram</a>
            <a href="https://x.com/yourhandle" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary">X (Twitter)</a>
            <a href="https://www.facebook.com/yourhandle" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary">Facebook</a> */}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation" className="flexStart gap-7 xl:gap-x-36 flex-wrap">
          <ul>
            <h4 className="h4 mb-3">Explore</h4>
            <li className="my-2">
              <Link to="/listings" className="text-gray-700 regular-14 hover:underline">Browse Listings</Link>
            </li>
            <li className="my-2">
              <Link to="/buy" className="text-gray-700 regular-14 hover:underline">Buy a Property</Link>
            </li>
            <li className="my-2">
              <Link to="/rent" className="text-gray-700 regular-14 hover:underline">Lease / Rent</Link>
            </li>
            <li className="my-2">
              <Link to="/shortlet" className="text-gray-700 regular-14 hover:underline">Airbnb / Short-Let</Link>
            </li>
            <li className="my-2">
              <Link to="/sell" className="text-gray-700 regular-14 hover:underline">Sell Your Property</Link>
            </li>
          </ul>

          <ul>
            <h4 className="h4 mb-3">Company</h4>
            <li className="my-2">
              <Link to="/about" className="text-gray-700 regular-14 hover:underline">About Us</Link>
            </li>
            <li className="my-2">
              <Link to="/services" className="text-gray-700 regular-14 hover:underline">Our Services</Link>
            </li>
            <li className="my-2">
              <Link to="/faqs" className="text-gray-700 regular-14 hover:underline">FAQs</Link>
            </li>
            <li className="my-2">
              <Link to="/contact" className="text-gray-700 regular-14 hover:underline">Contact</Link>
            </li>
            <li className="my-2">
              <Link to="/careers" className="text-gray-700 regular-14 hover:underline">Careers</Link>
            </li>
          </ul>

          <ul>
            <h4 className="h4 mb-3">Legal</h4>
            <li className="my-2">
              <Link to="/privacy" className="text-gray-700 regular-14 hover:underline">Privacy Policy</Link>
            </li>
            <li className="my-2">
              <Link to="/cookies" className="text-gray-700 regular-14 hover:underline">Cookie Settings</Link>
            </li>
            <li className="my-2">
              <Link to="/terms" className="text-gray-700 regular-14 hover:underline">Terms &amp; Conditions</Link>
            </li>
            <li className="my-2">
              <Link to="/cancellation" className="text-gray-700 regular-14 hover:underline">Cancellation</Link>
            </li>
            <li className="my-2">
              <Link to="/imprint" className="text-gray-700 regular-14 hover:underline">Imprint</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <p className="max-padd-container medium-14 py-2 px-8 rounded flexBetween mt-6 bg-gradient-to-r from-primary via-white to-white">
        <span>&copy; {year} SPEELIX IDEAL HOME (NIG) LTD</span>
        <span>All rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;

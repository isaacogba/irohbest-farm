import React from "react";
import { FaMailBulk, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-white border-t">
      {/* Top helper strip */}
      <div className="max-padd-container flex items-start justify-between flex-col lg:flex-row gap-8 py-6 mb-7 bg-gradient-to-r from-green-50 via-white to-white rounded-b-xl">
        <div className="max-w-2xl">
          <h4 className="h4">Premium Cassava Products & Bulk Supply</h4>
          <p className="text-gray-700">
            IROHBEST Mill & Farm Ltd delivers quality cassava products—garri,
            cassava flour, fufu flour, and palm oil—directly from our farms to
            your door.
          </p>
        </div>

        <div className="flexStart flex-wrap gap-8">
          <div className="flexCenter gap-x-4">
            <FaLocationDot
              aria-hidden="true"
              className="text-xl text-green-600"
            />
            <div>
              <h5 className="h5">Location</h5>
              <p className="text-gray-700">Abia State, Nigeria</p>
            </div>
          </div>

          <div className="flexCenter gap-x-4">
            <FaWhatsapp aria-hidden="true" className="text-xl text-green-600" />
            <div>
              <h5 className="h5">Order via WhatsApp</h5>
              <p className="text-gray-700">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  +234 802 792 8841
                </a>
              </p>
            </div>
          </div>

          <div className="flexCenter gap-x-4">
            <FaMailBulk aria-hidden="true" className="text-xl text-green-600" />
            <div>
              <h5 className="h5">Email</h5>
              <p className="text-gray-700">
                <a href="mailto:irohbest@gmail.com" className="hover:underline">
                  irohbest@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-padd-container flex items-start justify-between flex-wrap gap-12 mt-12">
        {/* Brand block */}
        <div className="flex flex-col max-w-sm gap-y-5">
          <Link to="/" aria-label="Go to IROHBEST home">
            <img
              src={logo}
              alt="IROHBEST Mill & Farm Ltd logo"
              className="h-24 mix-blend-multiply"
            />
          </Link>
          <p className="text-gray-700">
            At <strong>IROHBEST Mill & Farm Ltd</strong>, we grow, process, and
            supply premium cassava products with guaranteed quality, hygiene,
            and competitive bulk pricing.
          </p>
          <p className="text-gray-600 text-sm">
            Available for bulk orders & distributor partnerships
          </p>
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/irohbest"
              target="_blank"
              rel="noreferrer"
              className="text-green-600 hover:text-green-700 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="text-green-600 hover:text-green-700 text-2xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav
          aria-label="Footer navigation"
          className="flexStart gap-7 xl:gap-x-36 flex-wrap"
        >
          <ul>
            <h4 className="h4 mb-3">Products</h4>
            <li className="my-2">
              <Link
                to="/products"
                className="text-gray-700 regular-14 hover:underline"
              >
                Browse Products
              </Link>
            </li>
            <li className="my-2">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 regular-14 hover:underline"
              >
                Place Order
              </a>
            </li>
            <li className="my-2">
              <Link to="/" className="text-gray-700 regular-14 hover:underline">
                Bulk Supply
              </Link>
            </li>
            <li className="my-2">
              <Link to="/" className="text-gray-700 regular-14 hover:underline">
                Wholesale Pricing
              </Link>
            </li>
          </ul>

          <ul>
            <h4 className="h4 mb-3">Company</h4>
            <li className="my-2">
              <Link to="/" className="text-gray-700 regular-14 hover:underline">
                About Us
              </Link>
            </li>
            <li className="my-2">
              <Link to="/" className="text-gray-700 regular-14 hover:underline">
                Our Farm
              </Link>
            </li>
            <li className="my-2">
              <Link to="/" className="text-gray-700 regular-14 hover:underline">
                Quality Standards
              </Link>
            </li>
            <li className="my-2">
              <Link to="/" className="text-gray-700 regular-14 hover:underline">
                Contact
              </Link>
            </li>
          </ul>

          <ul>
            <h4 className="h4 mb-3">Legal</h4>
            <li className="my-2">
              <Link to="/" className="text-gray-700 regular-14 hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="my-2">
              <Link to="/" className="text-gray-700 regular-14 hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
            <li className="my-2">
              <Link to="/" className="text-gray-700 regular-14 hover:underline">
                Return Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <p className="max-padd-container medium-14 py-2 px-8 rounded flexBetween mt-6 bg-gradient-to-r from-green-50 via-white to-white">
        <span>&copy; {year} IROHBEST Mill & Farm Ltd</span>
        <span>All rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;

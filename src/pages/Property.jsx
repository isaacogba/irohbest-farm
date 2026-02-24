import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../utils/api";
import { PuffLoader } from "react-spinners";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { GiWeight } from "react-icons/gi";
import { TbDroplet } from "react-icons/tb";
import { GiGrain } from "react-icons/gi";
// Map removed — not required for product pages
import { Button } from "@mantine/core";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const { data, isError, isLoading } = useQuery(["resd", id], () =>
    getProperty(id),
  );

  if (isLoading) {
    return (
      <div className="h-64 flexCenter">
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#555"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <span>Error while fetching property details</span>
      </div>
    );
  }

  return (
    <section className="max-padd-container my-[99px]">
      {/* IMAGE */}
      <div className="pb-2 relative">
        <img
          src={data?.image}
          alt={data?.title}
          className="rounded-tr-3xl rounded-tl-3xl max-h-[27rem] w-full object-cover aspect-square"
        />
      </div>
      {/* CONTAINER */}
      <div className="xl:flexBetween gap-8">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <p className="flexStart gap-x-2">
            <FaLocationDot />
            <div>
              {data?.address}, {data?.city}, {data?.state || ""}{" "}
              {data?.state ? "State," : ""} Nigeria
            </div>
          </p>
          <div className="pt-3">
            <h4 className="bold-20 line-clamp-1">{data?.title}</h4>
          </div>
          <div className="flexBetween py-1">
            <h5 className="bold-16 my-1 text-secondary">{data?.city}</h5>
            <div className="flex items-baseline gap-2 text-secondary">
              <h4 className="bold-18 relative bottom-0.5 text-black">5.0</h4>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="flex gap-x-4">
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <GiWeight /> {data?.details?.weight_kg ?? data?.area ?? "N/A"}kg
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <TbDroplet /> {data?.details?.moisture_percent ?? "N/A"}%
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <GiGrain /> {data?.details?.grade ?? data?.category ?? "N/A"}
            </div>
          </div>
          <h4 className="h4 mt-3">Product Details</h4>
          <p className="mb-4">{data?.description}</p>
          <div className="pt-7">
            <Button
              onClick={() =>
                window.open(
                  `https://wa.me/2348027928841?text=${encodeURIComponent(
                    `Hi, I'm interested in your product: ${data?.title} from ${data?.city || ""} ${data?.state || ""}. Please share bulk pricing and delivery options.`,
                  )}`,
                )
              }
              variant="filled"
              w={"100%"}
              color="green"
              size="lg"
            >
              💬 Contact Seller on WhatsApp
            </Button>
          </div>
        </div>
        {/* RIGHT SIDE removed (map not needed) */}
      </div>
    </section>
  );
};

export default Property;

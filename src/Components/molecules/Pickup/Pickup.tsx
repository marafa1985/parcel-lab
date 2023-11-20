import { Meta } from "../../../shared/types/types";

export const Pickup = ({
  pickup_address,
  pickup_address_link,
  pickup_address_map_url,
}: Meta) => {
  return (
    <p className="relative">
      {pickup_address && (
        <span className="absolute right-4 top-6 font-bold w-36">
          {pickup_address}
        </span>
      )}
      {pickup_address_map_url && (
        <img
          src={pickup_address_map_url}
          className="bg-gray-400 p-0 m-0"
          alt="pickup address"
        ></img>
      )}
      {pickup_address_link && (
        <a
          href="#/"
          className="flex items-center justify-center w-full bg-indigo-900 text-white text-center p-3 m-0 rounded-b-lg"
          onClick={() => window.open(pickup_address_link, "_blank")}
        >
          Get directions
        </a>
      )}
    </p>
  );
};

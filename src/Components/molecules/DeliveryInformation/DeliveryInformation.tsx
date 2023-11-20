import { Meta } from "shared/types/types";
import { formatDateForLocale } from "shared/util/localeFormatter";

export const DeliveryInformation = ({
  delivery_date,
  delivery_time_frame_from,
  delivery_time_frame_to,
}: Meta) => {
  return (
    <ul className="list-none text-lg py-2 px-4 ">
      <li className="flex">
        <div className="w-36 font-bold">Delivery date:</div>
        {delivery_date && (
          <div className="text-gray-500">
            {formatDateForLocale(new Date(delivery_date))}
          </div>
        )}
      </li>
      <li className="flex">
        <div className="w-36 font-bold">from:</div>
        <div className="text-gray-500">{delivery_time_frame_from}</div>
      </li>
      <li className="flex">
        <div className="w-36 font-bold">to:</div>
        <div className="text-gray-500">{delivery_time_frame_to}</div>
      </li>
    </ul>
  );
};

import { Checkpoint } from "../../../shared/types/types";
import { formatDateForLocale } from "../../../shared/util";

export const CheckPointItem = ({
  status_details,
  event_timestamp,
  status,
  city,
}: Checkpoint) => {
  return (
    <div className="flex flex-col font-semibold mb-6">
      <h3>{status}</h3>
      <p className="text-gray-500">{status_details}</p>
      <p className="flex justify-between items-center text-gray-500">
        <span>{city}</span>
        <span>{formatDateForLocale(new Date(event_timestamp))}</span>
      </p>
    </div>
  );
};

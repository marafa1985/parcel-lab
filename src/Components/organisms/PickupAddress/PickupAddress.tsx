import { Card } from "components/atoms";
import { DeliveryInformation, Pickup } from "components/molecules";
import { Checkpoint } from "shared/types/types";

export const PickupAddress = ({ status, status_details, meta }: Checkpoint) => {
  return (
    <Card className="flex flex-col justify-between">
      <header className="py-2 px-4 font-bold">
        <h1 className="pb-5 text-5xl">{status}</h1>
        <h2 className="pb-3 text-2xl">{status_details}</h2>
      </header>

      {meta &&
        (status === "Ready for collection" ? (
          <Pickup {...meta} />
        ) : (
          <DeliveryInformation {...meta} />
        ))}
    </Card>
  );
};

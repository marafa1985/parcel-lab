import { Card } from "Components/atoms";
import { CheckPoints } from "../CheckPoints/CheckPoints";
import { ProgressBar } from "Components/molecules";
import { Checkpoint } from "shared/types/types";

type ShippingDetailsProps = {
  checkpoints: Checkpoint[];
};

export const ShippingDetails = ({ checkpoints }: ShippingDetailsProps) => {
  return (
    <Card className="h-full py-2 px-4">
      <header>
        <h2 className="mt-8 mb-4 text-left text-2xl text-bold leading-9 tracking-tight text-gray-900">
          Shipping updates
        </h2>
        <ProgressBar progress={checkpoints.length} base={5} />
      </header>

      <CheckPoints checkpoints={checkpoints} />
    </Card>
  );
};

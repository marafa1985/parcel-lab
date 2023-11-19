import { OrderDetailsHeader } from "Components/molecules/OrderDetailsHeader/OrderDetailsHeader";
import { ArticlesDetails } from "Components/organisms/ArticlesDetails/ArticlesDetails";
import { PickupAddress } from "Components/organisms/PickupAddress/PickupAddress";
import { ShippingDetails } from "Components/organisms/ShippingDetails/ShippingDetails";

export const OderView = () => {
  return (
    <article className="flex flex-col m-auto">
      <OrderDetailsHeader />
      <ol className="flex justify-between items-stretch flex-col flex-wrap mt-14 gap-5 sm:flex-row sm:flex-nowrap">
        <li className="flex-1">
          <PickupAddress
            link="https://www.google.com/maps"
            url="https://raw.githubusercontent.com/parcelLab/challenge-frontend-engineer/main/map.png"
          />
        </li>
        <li className="flex-1">
          <ShippingDetails />
        </li>
        <li className="flex-1">
          <ArticlesDetails />
        </li>
      </ol>
    </article>
  );
};

import { OrderDetailsHeader } from "components/molecules/OrderDetailsHeader/OrderDetailsHeader";
import { ArticlesDetails } from "components/organisms/ArticlesDetails/ArticlesDetails";
import { PickupAddress } from "components/organisms/PickupAddress/PickupAddress";
import { ShippingDetails } from "components/organisms/ShippingDetails/ShippingDetails";
import { OrderDetailsContext } from "context/OrderDetailsContext";
import { useContext } from "react";
import { orderUtil } from "shared/util";

export const OderView = () => {
  const { order } = useContext(OrderDetailsContext);

  if (!order) return <p>Order Details not found</p>;

  const { lastCheckpoint, checkpoints, articles } = orderUtil(order);

  return (
    <article className="flex flex-col m-auto h-screen">
      <OrderDetailsHeader />

      <section className="flex justify-between gap-4 h-[52%] sm:flex-row sm:flex-nowrap">
        <PickupAddress {...lastCheckpoint} />
        <ShippingDetails checkpoints={checkpoints} />
        <ArticlesDetails articles={articles} />
      </section>
    </article>
  );
};

import { useContext } from "react";
import { OrderDetailsContext } from "../../../context/OrderDetailsContext";
import { orderUtil } from "../../../shared/util";
import { OrderDetailsHeader } from "../../molecules";
import { ArticlesDetails } from "../../organisms/ArticlesDetails/ArticlesDetails";
import { PickupAddress } from "../../organisms/PickupAddress/PickupAddress";
import { ShippingDetails } from "../../organisms/ShippingDetails/ShippingDetails";

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

import { Card, Label } from "Components/atoms";

type ShippingDetailsProps = {};

export const ShippingDetails = (props: ShippingDetailsProps) => {
  return (
    <Card className="h-full py-2 px-4">
      <header>
        <h2 className="mt-8 mb-4 text-left text-2xl text-bold leading-9 tracking-tight text-gray-900">
          Shipping updates
        </h2>
        <div>
          <div className="w-full bg-gray-200 rounded">
            <div className="h-4 w-2/4 bg-indigo-900 rounded"></div>
          </div>
          <p className="flex justify-between text-base text-gray-400">
            <Label>Processed</Label>
            <Label>Delivered</Label>
          </p>
        </div>
      </header>
      <ul className="list-none">
        <li className="flex flex-col font-semibold mb-6">
          <h3>Ready for collection</h3>
          <p className="text-gray-500">
            The goods will be ready for collection on the next working day.
          </p>
          <p className="flex justify-between items-center text-gray-500">
            <Label>Munich</Label>
            <Label>07.01.2023 21:02</Label>
          </p>
        </li>
        <li className="flex flex-col font-semibold mb-6">
          <h3>Ready for collection</h3>
          <p className="text-gray-500">
            The goods will be ready for collection on the next working day.
          </p>
          <p className="flex justify-between items-center text-gray-500">
            <Label>Munich</Label>
            <Label>07.01.2023 21:02</Label>
          </p>
        </li>
        <li className="flex flex-col font-semibold mb-6">
          <h3>Ready for collection</h3>
          <p className="text-gray-500">
            The goods will be ready for collection on the next working day.
          </p>
          <p className="flex justify-between items-center text-gray-500">
            <Label>Munich</Label>
            <Label>07.01.2023 21:02</Label>
          </p>
        </li>
      </ul>

      <a
        href="#/"
        className="flex items-center justify-center w-full text-gray-400"
      >
        more
      </a>
    </Card>
  );
};

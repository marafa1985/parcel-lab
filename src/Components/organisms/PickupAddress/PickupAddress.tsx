import { Card } from "Components/atoms";

type PickupAddressProps = {
  link: string;
  url: string;
};

export const PickupAddress = ({ link, url }: PickupAddressProps) => {
  return (
    <Card>
      <header className="h-full py-2 px-4 font-bold">
        <h1 className="pb-5 text-5xl">Ready for collection</h1>
        <h2 className="pb-3 text-2xl">
          The goods will be ready for collection on next working day.
        </h2>
      </header>
      <p>
        <img
          src={url}
          className="bg-gray-400 p-0 m-0"
          alt="pickup address"
        ></img>
        <a
          href="#/"
          className="flex items-center justify-center w-full bg-indigo-900 text-white text-center p-3 m-0 rounded-b-lg"
          onClick={() => window.open(link, "_blank")}
        >
          Get directions
        </a>
      </p>
    </Card>
  );
};

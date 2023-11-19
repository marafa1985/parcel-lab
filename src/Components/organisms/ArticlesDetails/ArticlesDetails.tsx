import { Card, Label } from "Components/atoms";

type ArticlesDetailsProps = {};

export const ArticlesDetails = (props: ArticlesDetailsProps) => {
  return (
    <Card className="h-full py-2 px-4">
      <header>
        <h2 className="mt-8 mb-4 text-2xl text-bold leading-9 tracking-tight text-gray-900">
          Articles
        </h2>
      </header>
      <ul className="list-none">
        <li className="flex items-center mb-6 gap-x-4 text-gray-900">
          <img
            className=" flex-none h-16 rounded-xl bg-gray-50"
            src={`https://images.unsplash.com/photo-1639249227523-78502e9bb8b7`}
            alt="article link "
          />
          <div className="flex-auto">
            <p className="font-semibold">Macbook Pro M2 Max 16inch</p>
            <p className="text-gray-500">Article number: AB30M216</p>
            <p>4199,00 €</p>
          </div>
        </li>
        <li className="flex items-center mb-6 gap-x-4 text-gray-900">
          <img
            className=" flex-none h-16 rounded-xl bg-gray-50"
            src={`https://images.unsplash.com/photo-1639249227523-78502e9bb8b7`}
            alt="article link "
          />
          <div className="flex-auto">
            <p className="font-semibold">Macbook Pro M2 Max 16inch</p>
            <p className="text-gray-500">Article number: AB30M216</p>
            <p>4199,00 €</p>
          </div>
        </li>
      </ul>
    </Card>
  );
};

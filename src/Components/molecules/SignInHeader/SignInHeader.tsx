import { Logo } from "Components/atoms";

export const SignInHeader = () => {
  return (
    <header className="relative flex flex-col items-center">
      <Logo className="absolute flex m-auto -top-16" />

      <h2 className="mt-12 text-center text-2xl text-bold leading-9 tracking-tight text-gray-900">
        Track your Order
      </h2>
      <p className="mt-8 max-w-2xl text-center text-sm leading-6 text-gray-500">
        Enter your order number and zip code combination to see your order
        details and shipping updates.
      </p>
    </header>
  );
};

import React from "react";

export type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <section className="max-w-sm mx-auto bg-white rounded-xl md:shadow-lg space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      {children}
    </section>
  );
};

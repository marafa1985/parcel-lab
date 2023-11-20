import React from "react";

export type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card = ({ className, children }: CardProps) => {
  return (
    <section
      className={`${
        className ?? ""
      } flex-1 max-w-sm mx-auto bg-white rounded-xl md:shadow-lg space-y-2 items-center`}
    >
      {children}
    </section>
  );
};

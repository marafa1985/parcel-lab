import React from "react";

type Props = {
  progress: number;
  base: number;
};

export const ProgressBar = ({ progress, base }: Props) => {
  return (
    <div>
      <div className="w-full bg-gray-200 rounded">
        <div
          className={`h-4  bg-indigo-900 rounded `}
          style={{ width: `${(progress / base) * 100}%` }}
        ></div>
      </div>
      <p className="flex justify-between text-base text-gray-400">
        <span>Processed</span>
        <span>Delivered</span>
      </p>
    </div>
  );
};

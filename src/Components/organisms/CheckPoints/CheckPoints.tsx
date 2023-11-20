import { CheckPointItem } from "components/molecules/CheckPointItem/CheckPointItem";
import { useState } from "react";
import { Checkpoint } from "shared/types/types";

type CheckPointsProps = {
  checkpoints: Checkpoint[];
};

export const CheckPoints = ({ checkpoints }: CheckPointsProps) => {
  const [showMoreToggle, setShowMoreToggle] = useState(false);
  const displayedCheckPoints = showMoreToggle
    ? checkpoints.slice(2, 5)
    : checkpoints.slice(0, 3);

  const handleCheckPointsToggle = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowMoreToggle(!showMoreToggle);
  };

  return (
    <div>
      <ol className="list-none">
        {displayedCheckPoints.map((checkpoint) => (
          <li key={checkpoint.event_timestamp}>
            <CheckPointItem {...checkpoint} />
          </li>
        ))}
      </ol>
      {checkpoints.length > 2 && (
        <a
          href="#/"
          className="flex items-center justify-center w-full text-gray-400"
          onClick={handleCheckPointsToggle}
        >
          {showMoreToggle ? "latest" : "more"}
        </a>
      )}
    </div>
  );
};

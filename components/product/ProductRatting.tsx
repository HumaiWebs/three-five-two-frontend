'use client'

import { useState } from "react";
import { PiStar } from "react-icons/pi";

type Props = {
  rating: number;
};

const ProductRatting = ({ rating }: Props) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <PiStar
          key={star}
          className={`w-6 h-6 cursor-pointer ${
            star <= (hoveredStar ?? rating) ? "text-gold" : "text-gray-300"
          }`}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(null)}
        />
      ))}
      <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default ProductRatting;

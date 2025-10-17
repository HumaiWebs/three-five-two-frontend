import { ProductReview } from "@/types/product";
import React from "react";

type Props = {
  reviews: ProductReview[];
};

const ProductReviews = ({ reviews }: Props) => {
  return (
    <div>
      {reviews.length === 0 ? (
        <div className="w-full text-center text-gray-400">No reviews yet.</div>
      ) : (
        reviews.map((review) => (
          <div key={review._id}>
            <h4>{review.user.name}</h4>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductReviews;

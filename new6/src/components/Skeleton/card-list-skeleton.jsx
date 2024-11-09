import React from "react";
import CardSkeleton from "./card-skeletion.jsx";

const CardListSkeletion = ({ number }) => {
  return new Array(number).fill(0).map((_, idx) => <CardSkeleton />);
};

export default CardListSkeletion;

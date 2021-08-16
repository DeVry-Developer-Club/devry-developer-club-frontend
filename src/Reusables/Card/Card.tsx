import React from "react";
import { CardStyle } from "./CardStyle";

type CardProps = {
  children: any;
};

export const Card = ({ children }: CardProps) => {
  return <CardStyle>{children}</CardStyle>;
};

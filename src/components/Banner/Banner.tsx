import React from "react";
import { BannerStyle, Title } from "./BannerStyle";

type BannerProps = {
  title: string;
};

export const Banner = ({ title }: BannerProps) => {
  return (
    <BannerStyle>
      <Title>{title}</Title>
    </BannerStyle>
  );
};

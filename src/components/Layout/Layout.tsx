import React from "react";
import { DiscordLink } from "../DiscordLink/DiscordLink";
import { Flex, LayoutStyle } from "./LayoutStyle";
import { Banner } from "../Banner/Banner";

type LayoutProps = {
  children: any;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyle>
      <Banner title={"DeVry Developer Club"} />
      {children}
      <Flex />
      <DiscordLink discordLink={"https://discord.gg/ud4rkGAe9z"} />
    </LayoutStyle>
  );
};

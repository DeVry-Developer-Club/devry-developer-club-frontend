import React from "react";
import {
  BubbleDiv,
  Pair,
  DiscordLinkStyle,
  BubbleJoin,
} from "./DiscordLinkStyle";

type DiscordLinkProps = {
  discordLink: string;
};

export const DiscordLink = ({ discordLink }: DiscordLinkProps) => {
  return (
    <DiscordLinkStyle>
      <h3>Don't Wait Join the Discord</h3>
      <Pair>
        <BubbleDiv bColor={"#ffffff"} tColor={"#050505"}>
          204 Members
        </BubbleDiv>
        <BubbleDiv bColor={"#037ABA"} tColor={"#ffffff"}>
          56 Online
        </BubbleDiv>
      </Pair>
      <a href={discordLink}>
        <BubbleJoin bColor={"#FEC221"} tColor={"#050505"}>
          Join
        </BubbleJoin>
      </a>
      <div>C 2021 DeVry Developer Club</div>
    </DiscordLinkStyle>
  );
};

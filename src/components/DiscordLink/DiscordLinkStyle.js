import styled from "styled-components";

export const DiscordLinkStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #414244;
  color: #fff;

  * {
    padding: 4px 16px;
  }

  a {
    text-decoration: none;
  }
`;

export const BubbleDiv = styled.div`
  padding: 4px 8px;
  border-radius: 4px;
  background: ${(props) => props.bColor};
  color: ${(props) => props.tColor};
  text-align: center;
  box-shadow: inset -1px -1px 0 1px rgba(0, 0, 0, 0.25);
  width: 120px;
`;

export const BubbleJoin = styled(BubbleDiv)`
  padding: 8px 16px;
  width: fit-content;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  align-items: center;
  min-height: 36px;
`;

export const Pair = styled.div`
  display: flex;

  div {
    margin-left: 8px;
    &:first-child {
      margin: 0;
    }
  }
`;

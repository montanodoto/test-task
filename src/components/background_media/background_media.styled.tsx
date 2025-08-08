import styled from "styled-components";

export const Layer = styled.div`
  position: absolute;
  width: 100%;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  padding: 4rem;
`;

export const Vid = styled.video`
  position: absolute;
  inset: 0;
  width: 50%;
  // height: 100%;
  object-fit: fill;
  filter: brightness(.9) saturate(1.05);
  left: 40px;
`;
import styled from "styled-components";

export const Hero = styled.section<{ bg: string }>`
  position: relative;

  &::before{
    content: "";
    position: absolute; 
    inset: 0;
    background: url(${p => p.bg}) top/cover no-repeat;
  }
  &::after{
    content: "";
    position: absolute; 
    inset: 0;
    background: radial-gradient(1200px 100% at 20% 30%, rgba(0,0,0,.0), rgba(0,0,0,.65) 55%, rgba(0,0,0,.85) 70%),
                linear-gradient(90deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.4) 45%, rgba(0,0,0,.1) 60%, rgba(0,0,0,.0) 100%);
  }
`;

export const HeroBody = styled.div`
  position: relative; 
  z-index: 2;
  display: flex; 
  align-items: flex-end; 
  padding: 60px 48px; 
  gap: 24px;
  @media (max-width: 900px) { padding: 40px 20px; }
`;

export const HeroContent = styled.div`
  max-width: 760px;
`;
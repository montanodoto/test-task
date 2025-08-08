import { type ReactNode } from "react";
import styled from "styled-components";
import { COLLAPSED } from "../sidebar/sidebar.styled";

export const CARD_W = 120;
export const VISIBLE = 8;

export const Page = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Kicker = styled.div`
letter-spacing: .35em; color: var(--muted); font-size: 12px; margin-bottom: 10px; text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0 0 10px; font-size: clamp(36px, 6vw, 72px); line-height: 1.05; font-weight: 800;
  text-shadow: 0 6px 24px rgba(0,0,0,.6);
`;

export const Meta = styled.div`
  display: flex; flex-wrap: wrap; gap: 14px; align-items: center; color: var(--muted); margin-bottom: 16px;
  & > span { opacity: .95; }
`;

export const Summary = styled.p`
  max-width: 60ch; color: #e5e7eb; line-height: 1.65; margin: 0 0 24px;
`;

export const Actions = styled.div`
  display: flex; 
  gap: 12px; 
  align-items: center;
  min-width: 400px;
`;

export const Button = styled.button<{ variant?: "primary" | "ghost" }>`
  appearance: none; border: 1px solid transparent; cursor: pointer; border-radius: 999px;
  padding: 12px 18px; font-size: 16px; font-weight: 600; display: inline-flex; align-items: center; gap: 10px;
  transition: transform .08s ease, background .2s ease, border-color .2s ease;
  ${({ variant }) => variant === "ghost"
    ? `background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.14); color: white;`
    : `background: white; color: black;`}
  &:active{ transform: translateY(1px); }
`;

export const IconPlay: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const IconInfo: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M11 9h2V7h-2v2zm0 8h2v-6h-2v6zm1-14C6.48 3 2 7.48 2 13s4.48 10 10 10 10-4.48 10-10S17.52 3 12 3z" />
  </svg>
);

export const Row = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 2;
  margin-top: 48px;
  padding: 0 48px 42px;
  @media (max-width: 900px) { padding: 0 20px 36px; }
`;

export const RowTitle = styled.h2`
  font-size: 20px; font-weight: 700; margin: 0 0 14px; color: #e5e7eb;
`;

export const Scroller = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 4px;

  scroll-snap-type: inline mandatory;
  overscroll-behavior-inline: contain;
  -webkit-overflow-scrolling: touch;
  cursor: grab;

  &[data-dragging="true"] {
    cursor: grabbing;
    user-select: none;
  }
`;

export const Card = styled.button`
  flex: 0 0 180px;      
  position: relative;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 12px;
  overflow-x: auto; 
  background: #11131a;
   aspect-ratio: 2/3;
  box-shadow: 0 10px 24px rgba(0,0,0,.35);
  transition: transform .2s ease, box-shadow .2s ease, outline-color .2s ease;
  outline: 1px solid rgba(255,255,255,.08);
  &:hover { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(0,0,0,.5); }
  img { width: 100%; height: 100%; object-fit: cover; display: block; }
`;

export const SidebarIcon: React.FC<{ label: string; children: ReactNode }> = ({ label, children }) => (
  <div className="pill" role="button" aria-label={label} title={label}>
    {children}
  </div>
);


export const SidebarSlot = styled.div`
  position: relative;
  width: ${COLLAPSED}px;
`;

export const Shell = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: ${COLLAPSED}px minmax(0, 1fr);
  height: 100vh;
  color: #fff;
  overflow-x: hidden;
  will-change: width, transform, backdrop-filter;
`;

export const Main = styled.main`
  position: absolute;
  overflow-x: hidden;
  left: 50px;
`;
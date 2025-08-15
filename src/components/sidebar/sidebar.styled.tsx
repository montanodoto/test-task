import styled, { css } from "styled-components";

export const COLLAPSED = 60;
export const EXPANDED = 300;

export const motion = css`
  transition: 220ms cubic-bezier(.2,.8,.2,1);
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

export const PinButton = styled.button<{ $open: boolean }>`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.06);
  color: #fff;
  cursor: pointer;
  ${motion};

  svg {
    transform: rotate(${({ $open }) => ($open ? 0 : 180)}deg);
    ${motion};
  }

  &:hover { background: rgba(255,255,255,.12); }
  &:active { transform: translateY(1px); }
`;

export const Nav = styled.nav`
  display: grid;
  gap: 16px;
  margin-top: 16px;
  padding: 32px 8px;
`;

export const Bottom = styled.div`
  display: grid;
  gap: 6px;
  padding-bottom: 8px;
`;

export const Aside = styled.aside<{ $open: boolean }>`
  position: ${({ $open }) => ($open ? "absolute" : "relative")};
  inset: 0 auto 0 0;
  height: 100%;
  z-index: 50;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 14px;
  overflow: hidden;
  ${motion};

  right: 0;
  width: 24px;
  padding: ${({ $open }) => ($open ? "16px 12px" : "16px 0")};

  /* keep the content above pseudo layers */
  & > * { position: relative; z-index: 1; }

  /* collapsed: simple dark panel */
  ${({ $open }) => !$open && css`
    background: linear-gradient(90deg, rgba(0,0,0,.88), rgba(0,0,0,.65));
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  `}

  /* expanded: transparent base + separate blur and color fade layers */
  ${({ $open }) => $open && css`

    &::after{
      content:"";
      position: absolute; inset:0;
      background: linear-gradient(
        to right,
        rgba(0,0,0,.99) 0%,
        rgba(0,0,0,.80) 80%,
        rgba(0,0,0,.00) 100%
      );
      z-index: 0;
      pointer-events: none;
    }
  `}
`;

export const NavItem = styled.button<{ $active?: boolean; $open: boolean }>`
  --bg: ${({ $active }) => ($active ? "rgba(78,140,255,.22)" : "transparent")};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({ $open }) => ($open ? "flex-start" : "center")};
  gap: ${({ $open }) => ($open ? "14px" : "0")};
  width: 100%;
  padding: 12px ${({ $open }) => ($open ? 16 : 0)}px;
  border-radius: ${({ $open }) => $open ? '8px' : '100%'};
  border: 1px solid var(--border);
  background: var(--bg);
  color: #fff;
  cursor: pointer;
  ${motion};

  .label {
    display: ${({ $open }) => ($open ? "inline" : "none")};
    white-space: nowrap;
  }

  &:hover {
    background: ${({ $active }) => ($active ? "rgba(78,140,255,.28)" : "rgba(255,255,255,.15)")};
  }

  &[data-tooltip]:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    left: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,.85);
    border: 1px solid rgba(255,255,255,.08);
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 12px;
    pointer-events: none;
    white-space: nowrap;
    z-index: 999;
  }
`;

export const AvatarWrapper = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => $open ? "flex" : 'none'};
  align-items: center;
  gap: 12px;
  padding: 0 20px;
  justify-content: ${({ $open }) => ($open ? "flex-start" : "center")};
  ${motion};

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    object-fit: cover;
  }
  .name {
    display: ${({ $open }) => ($open ? "inline" : "none")};
    font-weight: 600;
    color: #fff;
  }
`;

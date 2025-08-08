import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --bg: #0b0b0f;
  --fg: #f3f4f6;
  --muted: #cfd2d7;
  --accent: #3b82f6;
  --accent-2: #111827;
  --glass: rgba(15,15,20,.55);
}
* { box-sizing: border-box; }
html, body, #root { height: 100%; }
body { margin: 0; background: var(--bg); color: var(--fg); font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
`;
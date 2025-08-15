import styled from "styled-components";

export const Sidebar = styled.nav`
position: relative; 
z-index: 2;
display: flex; 
flex-direction: column;
align-items: center; 
gap: 18px;
padding: 16px 0;
backdrop-filter: blur(6px);

& > .pill{
  width: 44px;
   height: 44px;
  border-radius: 999px; 
  display: grid;
  place-items: center;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.1);
  cursor: pointer; 
  transition: transform .15s ease, background .2s ease;
}

& > .pill:hover {
 transform: translateY(-1px);
  background: rgba(255,255,255,.12);
}
`;

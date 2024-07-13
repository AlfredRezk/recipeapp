import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

export const Logo = styled.img.attrs({ src: "img/logo.png" })`
  height: 60px;
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    display: flex;
    font-size: 36px;
    color: white;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    max-height: ${({show})=> (show.toString()==='true'?"300px": '0')};
    transition: max-height 0.3s ease-in-out;
  }
`;
export const MenuLink = styled(NavLink)`
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.palette.secondary.light};
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-size: 20px;
  &:hover{
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
  &.active{
    font-weight: bold;
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    width: 100%;
  }
`;

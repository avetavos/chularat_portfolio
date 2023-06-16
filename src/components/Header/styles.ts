import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = styled.nav`
  ${tw`
    flex 
    items-center 
    justify-between 
    flex-wrap 
    py-4
    xl:px-40
    lg:px-28
    md:px-14
    sm:px-2
    p-5
  `};
  font-weight: 300;
`

interface IItem {
  isOnlyDesktop?: boolean;
  isOnlyMobile?: boolean;
}

export const Item = styled.div<IItem>`
  ${tw`
    items-center
    cursor-pointer
  `}
  ${({ isOnlyDesktop }) => isOnlyDesktop && css`
    @media (max-width: 768px) {
      display: none;
    }
  `}
  ${({ isOnlyMobile }) => isOnlyMobile && css`
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  `}
`

export const Logo = styled.img`
  ${tw`
    rounded-full
  `}
  width: 40px;
  height: 40px;
`

export const Menu = styled.ul`
  ${tw`
    inline-flex
  `}
  margin: 0;
`

export const MenuItem = styled.li`
  ${tw`
    flex
    flex-col
    px-5
    py-2
    justify-center
    items-center
  `};
  font-size: 0.8rem;
  &.active {
    font-weight: 700;
  }
`

export const MenuLink = styled(Link)`
  ${tw`
    text-black
  `}
  text-decoration: none;
`;

export const ActiveDot = styled.div`
  ${tw`
    bg-black
    rounded-full
    absolute
  `}
  top: 60px;
  height: 4px;
  width: 4px;
`

export const MenuIcon = styled(FontAwesomeIcon)`
  ${tw`
    mx-3
  `}
`;
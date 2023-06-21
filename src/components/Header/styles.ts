import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg from '../../assets/footer-mobile.png';

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
`;

interface IItem {
  isOnlyDesktop?: boolean;
  isOnlyMobile?: boolean;
}

export const Item = styled.div<IItem>`
  ${tw`
    items-center
    cursor-pointer
  `}
  ${({ isOnlyDesktop }) =>
    isOnlyDesktop &&
    css`
      @media (max-width: 768px) {
        display: none;
      }
    `}
  ${({ isOnlyMobile }) =>
    isOnlyMobile &&
    css`
      display: none;
      @media (max-width: 768px) {
        display: flex;
      }
    `}
`;

interface ILogo {
  size?: number;
}

export const Logo = styled.img`
  ${tw`
    rounded-full
  `}
  width: ${({ size }: ILogo) => (size ? size : 40)}px;
  height: ${({ size }: ILogo) => (size ? size : 40)}px;
`;

export const Menu = styled.ul`
  ${tw`
    inline-flex
  `}
  margin: 0;
`;

export const MenuItem = styled.li`
  ${tw`
    flex
    flex-col
    px-5
    py-2
    justify-center
    items-center
  `};
  font-size: 0.95rem;
  &.active {
    font-weight: 700;
  }
`;

export const MenuLink = styled.a`
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
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  ${tw`
    mx-3
  `}
`;

interface IMobileMenuWindow {
  isOpen: boolean;
}

export const MobileMenuWindow = styled.div<IMobileMenuWindow>`
  ${tw`
    fixed
    flex
    bg-white
    z-50
    flex-col
  `}
  top: 0;
  left: -105%;
  width: 100vw;
  height: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0 100%;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  overflow: hidden;
  ${({ isOpen }) =>
    isOpen &&
    css`
      left: 0;
    `}
`;

export const MobileContainer = styled.div`
  ${tw`
    m-5
  `}
`;

interface IMobileItem {
  isIcon?: boolean;
}

export const MobileItem = styled.div`
  ${tw`
    flex
    justify-center
  `}
  ${({ isIcon }: IMobileItem) => isIcon && tw`gap-4`}
`;

export const HandleBrawerBtn = styled.button`
  ${tw`
    border-none
    bg-transparent
    p-2
    text-black
  `}
`;

export const MobileMenu = styled.ul`
  ${tw`
    pt-10
    flex
    flex-col
    items-center
    justify-center
    text-center
    mt-3
    p-0
  `}
`;

export const MobileMenuItem = styled.li`
  ${tw`
    my-7
    mb-7
    list-none
  `}
  &.active {
    font-weight: 700;
  }
`;
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import bg from '../../assets/about-bg.png';

interface IProjectListContainer {
  isLoadMore?: boolean;
}

export const ProjectListContainer = styled.div<IProjectListContainer>`
  ${tw`
    flex
    h-full
    items-center
    overflow-x-hidden
    flex-col
    xl:px-40
    xl:py-32
    lg:px-28
    lg:py-24
    md:px-14
    md:py-14
    sm:px-2
    sm:py-8
    p-5
    mt-24
    md:mt-0
  `}
  background-repeat: no-repeat;
  background-image: url(${bg});
  ${({ isLoadMore }) => isLoadMore ? css`background-size: 6000px;` : css`background-size: 3000px;`}
  background-position: center;
  background-origin: content-box;
  background-clip: padding-box;
  background-color: transparent;
  @media (min-width: 768px) {
    background-size: 800px;
  }
  @media (min-width: 1024px) {
    background-size: 800px;
  }
  @media (min-width: 1280px) {
    background-size: 1000px;
  }
`;

export const PortFolioTitle = styled.p`
  ${tw`
    text-sm
    text-center
    mb-3
  `}
  color: #334155;
`

export const SectionTitle = styled.h1`
  ${tw`
    text-3xl
    md:[font-size:2.5rem]
    text-center
    mt-0
    mb-3
    text-black
  `}
  font-weight: 800;
`;

export const TabContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    w-full
    h-full
    mt-0
  `}
`;

export const TabList = styled.ul`
  ${tw`
    flex
    flex-row
    flex-wrap
    items-center
    justify-center
    w-full
    md:w-3/5
    h-full
    mt-5
    p-0
  `}
`;

export const Tab = styled.li`
  ${tw`
    flex
    flex-row
    items-center
    justify-center
    w-full
    h-full
    md:my-5
    text-sm
    text-black
    hover:font-bold
    basis-1/3
    md:basis-1/6
`}
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:nth-child(1) {
    ${tw`
      mt-5
    `}
  }
  &:nth-child(2) {
    ${tw`
      mt-5
    `}
  }
  &:nth-child(3) {
    ${tw`
      mt-5
    `}
  }
  &:nth-child(4) {
    ${tw`
      mt-3
      mb-5
    `}
  }
  &:nth-child(5) {
    ${tw`
      mt-3
      mb-5
    `}
  }
  &.active {
    font-weight: 700;
  }
`;

export const PowerNumber = styled.sub`
  ${tw`
    mb-3
    hover:font-bold
  `}
  &.active {
    font-weight: 700;
  }
`

interface ICardContainer {
  isMobile?: boolean;
  isDesktop?: boolean;
}

export const CardContainer = styled.div<ICardContainer>`
  ${tw`
    flex
    flex-row
    flex-wrap
    items-start
    justify-start 
    my-5
    p-0
    gap-6
  `}
  ${({ isMobile }) => isMobile && tw`md:hidden`}
  ${({ isDesktop }) => isDesktop && tw`md:flex hidden`}
  width: 100%;
`;

interface ICardItem {
  isDesktop?: boolean;
}

export const CardItem = styled.div<ICardItem>`
  ${tw`
    flex
    flex-wrap
    flex-row
    px-3
  `}
`;

export const Card = styled.div`
  ${tw`
    p-5
    cursor-pointer
    basis-full
    md:[max-width:33%]
    md:[flex-basis:25%]
    lg:[flex-basis:27%]
  `}
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 22px;
`;

export const ProjectThumbnail = styled.img`
  ${tw`
    w-full
  `}
  border-radius: 22px;
`;

export const ProjectTitle = styled.h3`
  ${tw`
    text-lg
    mt-3
    mb-3
    text-black
  `}
`;

export const ProjectDescription = styled.p`
  ${tw`
    text-sm
    mb-0
  `}
  color: #334155;
`;

export const TagSection = styled.div`
  ${tw`
    flex 
    flex-wrap
    gap-2
    mt-3
  `}
`;

export const ProjectTag = styled.p`
  ${tw`
    p-1
    text-black
    m-0
  `}
  font-size: 0.675rem;
  border-radius: 6px;
  background-color: #F1F1F1;
  font-weight: 800;
`;

export const ViewMoreButton = styled.a`
  ${tw`
    text-center
    flex-1
    text-white
    px-4
    py-3
    xl:px-6
    xl:py-4
    lg:px-3
    lg:py-3
    bg-black
    cursor-pointer
  `}
  font-size: 0.875rem;
  border-radius: 12px;
`;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';
import aboutBg from '../../assets/about-bg.png';

// Landing Page
export const LandingContainer = styled.div`
  ${tw`
    flex-col
    flex
    h-full
    items-center
    overflow-x-hidden
    xl:px-40
    xl:py-32
    lg:px-28
    lg:py-24
    md:px-14
    md:py-14
    sm:px-2
    sm:py-8
    p-5
  `}
  flex-direction: column-reverse;
  background-image: url(${aboutBg});
  background-repeat: no-repeat;
  background-size: 450px;
  background-position: 0rem 0rem;
  @media (min-width: 768px) {
    flex-direction: row;
    background-size: 380px;
    background-position: 27.5rem 4.5rem;
  }
  @media (min-width: 1024px) {
    background-size: 450px;
    background-position: 41rem 5rem;
  }
  @media (min-width: 1280px) {
    background-size: 500px;
    background-position: 48rem 8rem;
  }
`;

export const Content = styled.div`
  ${tw`
    flex
    flex-col
    flex-1
    w-full
    h-full
    items-start
    overflow-x-hidden
  `}
`;

export const Title = styled.h2`
  ${tw`
    sm:text-2xl
    md:[font-size:1.75rem]
    lg:text-3xl
    xl:text-4xl
    font-black
    text-black
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
    mt-0
    mb-5
  `}
  font-weight: 400;
`;

export const NameTitle = styled.h1`
  ${tw`
    sm:text-2xl
    md:text-3xl
    lg:text-5xl
    xl:text-5xl
    font-black
    text-black
    mt-0
    mb-0
  `}
  font-weight: bolder;
`;

export const HeyHi = styled.h4`
  ${tw`
    mb-0
    md:text-sm
    lg:text-xs
  `}
  color: #828282;
  font-weight: 400;
  font-size: 1rem;
`;

export const Subtitle = styled.h3`
  ${tw`
    m-0
    lg:text-sm
    xl:text-xl
  `}
  font-weight: 400;
  line-height: 1.5rem;
  font-size: 1rem;
`;

export const TextBold = styled.span`
  font-weight: 700 !important;
`;

export const BtnContainer = styled.div`
  ${tw`
    flex-1
    flex
    flex-row
    w-full
    mt-10
    lg:space-x-10
    md:space-x-5
  `}
`;

export const DownloadResumeBtn = styled.a`
  ${tw`
    text-center
    flex-1
    text-white
    px-2
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

export const DiscoveryBtn = styled.a`
  ${tw`
    text-center
    flex-1
    px-2
    py-3
    xl:px-6
    xl:py-4
    lg:px-3
    lg:py-3
    cursor-pointer
    text-black
    hover:decoration-solid
  `}
  font-size: 0.875rem;
  border-radius: 12px;
  text-decoration: none;
`;

export const Icon = styled(FontAwesomeIcon)`
  ${tw`
    mx-3
  `}
`;

export const ProfileImage = styled.img`
  ${tw`
    md:[height:250px]
    md:[width:250px]
    lg:[height:300px]
    lg:[width:300px]
    rounded-full
  `}
  height: 230px;
  width: 230px;
`

export const ContentProfileImage = styled(Content)`
  ${tw`
    items-center
    py-5
    md:py-0
  `}
`

// Project List
export const ProjectListContainer = styled.div`
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
  background-size: 450px;
  background-position: 0rem 0rem;
  @media (min-width: 768px) {
    background-size: 380px;
    background-position: 27.5rem 4.5rem;
  }
  @media (min-width: 1024px) {
    background-size: 450px;
    background-position: 41rem 5rem;
  }
  @media (min-width: 1280px) {
    background-size: 500px;
    background-position: 48rem 8rem;
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
    my-5
    text-sm
    text-black
    hover:font-bold
    basis-1/3
    md:basis-1/6
`}
  cursor: pointer;
  transition: all 0.3s ease-in-out;
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
    items-center
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
    gap-2
  `}
`;

export const ProjectTag = styled.p`
  ${tw`
    p-2
    text-black
  `}
  font-size: 0.675rem;
  background-color: #F5F5F5;
  font-weight: 800;
`;

export const ViewMoreButton = styled(DownloadResumeBtn)`
  ${tw`
    px-4
    py-3
  `}
  font-size: 0.875rem;
`;


// Work Experience
export const WorkExperienceContainer = styled.div`
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
  background-size: 450px;
  background-position: 0rem 0rem;
  @media (min-width: 768px) {
    background-size: 380px;
    background-position: 27.5rem 4.5rem;
  }
  @media (min-width: 1024px) {
    background-size: 450px;
    background-position: 41rem 5rem;
  }
  @media (min-width: 1280px) {
    background-size: 500px;
    background-position: 48rem 8rem;
  }
`;

export const WorkExperienceTitle = styled(PortFolioTitle)``

export const WorkExperienceSectionTitle = styled(SectionTitle)`
  ${tw`
    mb-16
  `}
`

export const TimelineContainer = styled.div`
  ${tw`
    mx-4
    md:mx-0
    block
    relative
    w-full
    m-auto
  `}
`

export const Timeline = styled.ul`
  ${tw`
    p-0
    inline-block
  `}
`

export const TimelineItem = styled.li`
  ${tw`
    relative
    m-auto
    list-none
    last:[border-left: 0]
    last:mb-0
    md:[margin-left: 15em]
  `}
  min-height: 50px;
  border-left: 1px solid #000;
  padding: 0 0 50px 30px;
  &:before {
    position: absolute;
    top: 0px;
    content: " ";
    border-radius: 500%;
    background: #000;
    height: 30px;
    width: 30px;
    left: -15px;
    ${tw`
      md:[height: 20px]
      md:[width: 20px]
      md:[left: -10px]
      lg:[height: 24px]
      lg:[width: 24px]
      lg:[left: -12px]
    `}
  }
`

export const TimelineTitle = styled.div`
  ${tw`
    md:[font-size: 1rem]
    font-bold
    mb-2
  `}
`

export const TimelineSubtitle = styled.a`
  ${tw`
    md:[font-size: 1rem]
    font-bold
  `}
  text-decoration: none;
  color: rgb(51, 65, 85);
`

export const TimelineTimestamp = styled.div`
  ${tw`
    block
    mb-1
    md:mb-0
    md:absolute
    md:[left: -11.5em]
    md:[font-size: 1rem]
    top-0
    font-bold
    last:[top: 100%]
  `}
`

export const TimelineDescription = styled.div`
  ${tw`
    mt-2
  `}
`
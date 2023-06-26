import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';
import aboutBg from '../../assets/about-bg.png';

export const LandingContainer = styled.div`
  ${tw`
    flex-col
    flex
    h-full
    items-center
    overflow-x-hidden
    xl:px-40
    xl:py-24
    lg:px-28
    lg:py-24
    md:px-14
    md:py-14
    sm:px-2
    sm:py-8
    p-5
  `}
  margin-top: 76px;
  flex-direction: column-reverse;
  background-image: url(${aboutBg});
  background-repeat: no-repeat;
  background-size: 450px;
  background-position: 0rem 0rem;
  background-clip: padding-box;
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
    background-position: 48rem 7rem;
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
    lg:[font-size: 1rem;]
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
  font-weight: 800 !important;
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
  font-size: 1rem;
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
  font-size: 1rem;
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
    md:py-0
  `}
`
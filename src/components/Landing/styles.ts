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
    background-position: 48rem 4rem;
  }
`;

export const Content = styled.div`
  ${tw`
    flex
    flex-col
    flex-1
    w-full
    h-full
    p-12
    items-start
    overflow-x-hidden
    md:basis-3/5
    lg:basis-8/12
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
  font-size: 2rem;
  font-weight: 400;
`;

export const NameTitle = styled.h1`
  ${tw`
    font-black
    text-black
    mt-0
    mb-0
  `}
  font-size: 3rem;
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
  font-weight: 200;
  line-height: 1.5rem;
  font-size: 1rem;
`;

export const TextBold = styled.span`
  font-weight: 600 !important;
`;

export const BtnContainer = styled.div`
  ${tw`
    flex-1
    flex
    flex-row
    w-full
    md:mt-10
    mt-7
    lg:space-x-4
    md:space-x-2
  `}
`;

export const DownloadResumeBtn = styled.a`
  ${tw`
    text-center
    flex-1
    text-white
    cursor-pointer
    p-2
    md:[font-size: 1rem;]
  `}
  font-size: 0.75rem;
  background: #2A2A2A;
  border-radius: 60px;
  max-width: 220px;
  &:hover {
    background-color: #4F4F4F;
    color: #FFFFFF;
    box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const DiscoveryBtn = styled.a`
  ${tw`
    text-center
    flex-1
    cursor-pointer
    text-black
    p-2
    md:[font-size: 1rem;]
  `}
  max-width: 220px;
  font-size: 0.75rem;
  border-radius: 60px;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.12);
  }
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
    py-1
    md:basis-2/5
    lg:basis-4/12
  `}
`
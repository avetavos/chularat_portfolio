import styled from 'styled-components';
import tw from 'twin.macro';
import bg from '../../assets/about-bg.png';

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
    py-5
    pl-10
    pr-5
    mt-24
    md:mt-0
  `}
  background-repeat: no-repeat;
  background-image: url(${bg});
  background-size: 600px;
  background-clip: padding-box;
  background-position: -6rem 10rem;
  @media (min-width: 768px) {
    background-size: 600px;
    background-position: 5rem 3rem;
  }
  @media (min-width: 1024px) {
    background-size: 600px;
    background-position: 10rem 6rem;
  }
  @media (min-width: 1280px) {
    background-size: 800px;
    background-position: 10rem 0rem;
  }
`;

export const WorkExperienceTitle = styled.p`
  ${tw`
    text-sm
    text-center
    mb-3
  `}
  color: #334155;
`

export const WorkExperienceSectionTitle = styled.h1`
  ${tw`
    text-3xl
    md:[font-size:2.5rem]
    text-center
    mt-0
    mb-16
    text-black
  `}
  font-weight: 800;
`;

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
    height: 20px;
    width: 20px;
    left: -10px;
    ${tw`
      md:[height: 16px]
      md:[width: 16px]
      md:[left: -8px]
      lg:[height: 20px]
      lg:[width: 20px]
      lg:[left: -10px]
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
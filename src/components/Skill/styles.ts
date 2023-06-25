import styled from 'styled-components';
import tw from 'twin.macro';
import bg from '../../assets/about-bg.png';

export const SkillContainer = styled.div`
  ${tw`
    flex-col
    flex
    h-full
    items-center
    overflow-x-hidden
    xl:px-40
    xl:pb-24
    xl:mt-20
    lg:px-28
    lg:pb-24
    lg:mt-24
    md:px-14
    md:pb-14
    sm:px-2
    sm:pb-8
    sm:mt-3
    p-5
    mt-16
    md:mt-0
  `}
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 400px;
  background-position: -6rem -1rem;
  background-clip: padding-box;
  @media (min-width: 768px) {
    background-size: 300px;
    background-position: 0rem 2rem;
  }
  @media (min-width: 1024px) {
    background-size: 300px;
    background-position: 5rem 0rem;
  }
  @media (min-width: 1280px) {
    background-size: 300px;
    background-position: 5rem 0rem;
  }
`;

export const SkillTitle = styled.p`
  ${tw`
    text-sm
    text-center
    mb-3
  `}
  color: #334155;
`

export const SkillSectionTitle = styled.h1`
  ${tw`
    text-3xl
    md:[font-size:2.5rem]
    text-center
    mt-0
    mb-5
    md:mb-10
    text-black
  `}
  font-weight: 800;
`;

export const SkillList = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-center
    items-center
    w-full
    h-full
    gap-2
    md:gap-5
  `}
`

export const SkillItem = styled.img`
  ${tw`
    md:[width: auto]
    md:[height: 100px;]
  `}
  width: auto;
  height: 80px;
`

export const SkillTag = styled.p`
  ${tw`
    py-1
    px-3
    text-black
    m-0
    md:[font-size: 1rem]
  `}
  font-size: 1rem;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.5);
`
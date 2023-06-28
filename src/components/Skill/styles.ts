import styled from 'styled-components';
import tw from 'twin.macro';
import bg from '../../assets/about-bg.png';

export const SkillContainer = styled.div`
  ${tw`
    flex-col
    lg:flex-row
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
    lg:items-start
  `}
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 1000px;
  background-position: -6rem 90%;
  background-clip: padding-box;
  @media (min-width: 768px) {
    background-size: 1000px;
    background-position: 5rem 2rem;
  }
  @media (min-width: 1024px) {
    background-size: 1000px;
    background-position: 30rem -4rem;
  }
  @media (min-width: 1280px) {
    background-size: 800px;
    background-position: 15rem -2rem;
  }
`;

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

export const SkillHeaderContent = styled.div`
  ${tw`
    flex
    lg:basis-1/6
    items-center
    justify-center
  `}
`;

export const SkillBodyContent = styled.div`
  ${tw`
    flex
    items-start
    flex-col
    justify-start
    lg:basis-5/6
    py-5
    md:py-0
  `}
`;

export const SkillItem = styled.div`
  ${tw`
    flex
    flex-row
    py-14
    first:pt-0
  `}
  width: 100%;
  border-bottom: 1px solid rgba(16,16,16, 0.1);
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const SkillCounterContainer = styled.div`
  ${tw`
    flex
    justify-center
    items-start
    basis-1/6
  `}
`;

export const SkillCounter = styled.h1`
  ${tw`
    flex
    items-center
    justify-start
    m-0
    text-xl
  `}
`;

export const SkillTitle = styled.h1`
  ${tw`
    text-xl
    mt-0
    mb-3
  `}
`;

export const SkillDetailsContainer = styled.div`
  ${tw`
    flex
    basis-5/6
    flex-col
  `}
`;

export const SkillDetails = styled.div`
  ${tw`
    flex
    flex-wrap
    gap-2
  `}
`

export const Tag = styled.p`
  ${tw`
    p-1
    md:p-2
    text-black
    m-0
  `}
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.5);
`;
import styled from 'styled-components';
import tw from 'twin.macro';
import bg from '../../assets/about-bg.png';

export const ToolContainer = styled.div`
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
  background-size: 350px;
  background-position: -3rem -2rem;
  background-clip: padding-box;
  @media (min-width: 768px) {
    background-size: 400px;
    background-position: 20rem 2rem;
  }
  @media (min-width: 1024px) {
    background-size: 300px;
    background-position: 45rem 0rem;
  }
  @media (min-width: 1280px) {
    background-size: 300px;
    background-position: 55rem 0rem;
  }
`;

export const ToolTitle = styled.p`
  ${tw`
    text-sm
    text-center
    mb-3
  `}
  color: #334155;
`

export const ToolSectionTitle = styled.h1`
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

export const ToolList = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-center
    items-center
    w-full
    h-full
    gap-10
  `}
`

export const ToolItem = styled.img`
  ${tw`
    md:[width: auto]
    md:[height: 100px;]
  `}
  border-radius: 12px;
  width: auto;
  height: 80px;
`
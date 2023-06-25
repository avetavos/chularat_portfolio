import styled from 'styled-components';
import tw from 'twin.macro';
import bg from '../../assets/about-bg.png';

export const EducationContainer = styled.div`
  ${tw`
    flex-col
    flex
    h-full
    items-center
    overflow-x-hidden
    xl:px-40
    xl:pb-32
    xl:mt-32
    lg:px-28
    lg:pb-24
    lg:mt-24
    md:px-14
    md:pb-14
    sm:px-2
    sm:pb-8
    sm:mt-3
    p-5
    mt-24
    md:mt-0
  `}
`;

export const SectionTitle = styled.h1`
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

export const EducationWrapper = styled.div`
  ${tw`
    flex
    flex-row
    justify-center
    items-center
    w-full
    h-full
    mt-0
    mb-0
  `}
`;

export const EducationLogo = styled.img`
  max-width: 150px;
  @media (min-width: 768px) {
    max-width: 150px;
  }
  @media (min-width: 1024px) {
    max-width: 200px;
  }
  @media (min-width: 1280px) {
    max-width: 200px;
  }
`;

export const EducationDetails = styled.div`
  ${tw`
    text-center
  `}
`;

export const EducationTitle = styled.h1`
  ${tw`
    md:[font-size:1.75rem]
    lg:[font-size:2rem]
  `}
  font-size: 1.5rem;
`;

export const EducationInstitute = styled.h2`
  ${tw`
    md:[font-size:1.5rem]
    lg:[font-size:1.75rem]
  `}
  font-size: 1.25rem;
`;

export const EducationDuration = styled.h4`
  font-size: 1rem;
`;


import styled from 'styled-components';
import tw from 'twin.macro';
import bg from '../../assets/about-bg.png';

export const CertificateContainer = styled.div`
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
    md:mt-0
    sm:px-2
    sm:pb-8
    sm:mt-8
    p-5
  `}
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 1200px;
  background-position: center;
  background-clip: padding-box;
  @media (min-width: 768px) {
    background-size: 1000px;
    background-position: center;
  }
  @media (min-width: 1024px) {
    background-size: 1200px;
    background-position: center;
  }
  @media (min-width: 1280px) {
    background-size: 1200px;
    background-position: 5rem 50%;
  }
`;

export const SectionSubTitle = styled.p`
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
    mb-5
    md:mb-10
    text-black
  `}
  font-weight: 800;
`;

export const CertificateWrapper = styled.div`
  ${tw`
    flex
    p-5
    flex-col
    mb-5
    justify-center
    items-center
  `}
  &:nth-child(odd) {
    ${tw`md:flex-row-reverse`};
  }
  &:nth-child(even) {
    ${tw`md:flex-row`};
  }
  &:last-child {
    ${tw`mb-0`};
  }
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 22px;
`;

export const CertificateImage = styled.img`
  ${tw`
    w-full
    md:w-1/2
  `}
  height: 100%;
`;

export const CertificateDetails = styled.div`
  ${tw`
    px-0
    md:px-5
    lg:px-10
  `}
`

export const CertificateTitle = styled.h1`
  ${tw`
    text-2xl
    lg:text-3xl
    font-bold
  `} 
`

export const CertificateDate = styled.p`
  ${tw`
    font-bold
  `}
`

export const CertificateDescription = styled.p``
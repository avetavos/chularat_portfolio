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
    xl:pb-24
    xl:mt-20
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
    mt-16
  `}
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 700px;
  background-position: center;
  background-clip: padding-box;
  @media (min-width: 768px) {
    background-size: 700px;
  }
  @media (min-width: 1024px) {
    background-size: 700px;
  }
  @media (min-width: 1280px) {
    background-size: 700px;
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
    p-3
    flex-col
    justify-center
    items-center
  `}
  max-width: 100vw;
`;

export const CertificateImage = styled.img`
  ${tw`
    w-full
    mb-5
  `}
  max-width: 300px;
  @media (min-width: 1024px) {
    max-width: 450px;
  }
  border-radius: 22px;
  height: 100%;
`;

export const CertificateDetails = styled.div`
  ${tw`
    px-5
    lg:px-10
    lg:[max-width: 40vw]
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
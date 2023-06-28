import styled from "styled-components";
import tw from "twin.macro";

export const ContactContainer = styled.div`
  ${tw`
    flex-col
    md:flex-row
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
    md:mt-0
    md:gap-10
    my-10
    justify-center
    text-center
    md:text-left
  `}
`;

export const ContactButton = styled.img`
  ${tw`
    lg:[width:150px]
    md:[width:100px]
    [width:120px]
    cursor-pointer
  `}
`;

export const ContactTitle = styled.h1`
  ${tw`
    lg:text-6xl
    md:text-4xl
  `}
`;

export const TextHighlight = styled.span`
  color: #DB574D;
`
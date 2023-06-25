import React from 'react';
import {
  CertificateContainer,
  CertificateDate,
  CertificateDescription,
  CertificateDetails,
  CertificateImage,
  CertificateTitle,
  CertificateWrapper,
  SectionSubTitle,
  SectionTitle,
} from './styles';
import { Element } from 'react-scroll';

interface ICertification {
  title: string;
  date: string;
  description: string;
  img: string;
}

const certList: ICertification[] = [
  {
    title: 'UXUI.STUDIO Online Courses',
    date: 'Sep 2021',
    description:
      'Learned about UX Research, UI Tools, and Accessibility Basics and UX/UI Process and The Essential UI and UX Design Trends.',
    img: 'https://i.pinimg.com/736x/e8/23/d4/e823d44a70a0c49cd05a440610e54cdb.jpg',
  },
  {
    title: 'Udemy Online Courses - Adobe Photoshop CC',
    date: 'Apr 2020',
    description:
      'Learned about Photoshop retouching and Photoshop for graphic design and create social media post images for Facebook, Instagram, Twitter, Pinterest & Youtube.',
    img: 'https://i.pinimg.com/736x/e8/23/d4/e823d44a70a0c49cd05a440610e54cdb.jpg',
  },
  {
    title: 'Udemy Online Courses - Adobe Illustrator CC',
    date: 'Apr 2020',
    description:
      'Leaded about Graphic design Tools, logo design and build create assets like colors, patterns and drawings using the Illustrator mobile app. Learned The key Tools of Illustrator: shapes, text, masking, effects, and exporting.',
    img: 'https://i.pinimg.com/736x/e8/23/d4/e823d44a70a0c49cd05a440610e54cdb.jpg',
  },
];

export const Certification = () => {
  return (
    <>
      <Element name="certificate-section"></Element>
      <CertificateContainer id="certificate-section">
        <div>
          <SectionSubTitle>I'm proud of this.</SectionSubTitle>
        </div>
        <div>
          <SectionTitle>Certification</SectionTitle>
        </div>
        {certList.map((cert, index) => (
          <CertificateWrapper>
            <CertificateImage src={cert.img} />
            <CertificateDetails>
              <CertificateTitle>{cert.title}</CertificateTitle>
              <CertificateDate>{cert.date}</CertificateDate>
              <CertificateDescription>
                {cert.description}
              </CertificateDescription>
            </CertificateDetails>
          </CertificateWrapper>
        ))}
      </CertificateContainer>
    </>
  );
};

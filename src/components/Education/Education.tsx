import React from 'react';
import {
  DownloadTranscriptBtn,
  EducationContainer,
  EducationDetails,
  EducationDuration,
  EducationInstitute,
  EducationLogo,
  EducationTitle,
  EducationWrapper,
  SectionTitle,
} from './styles';
import kkuLogo from '../../assets/kku-logo.png';

export const Education = () => {
  return (
    <EducationContainer>
      <div>
        <SectionTitle>Education</SectionTitle>
      </div>
      <EducationWrapper>
        {/* <EducationLogo src={kkuLogo} alt="KKU Logo" /> */}
        <EducationDetails>
          <EducationTitle>Khon Kean University</EducationTitle>
          <EducationInstitute>
            Faculty of Applied Sciences and Engineering
          </EducationInstitute>
          <EducationDuration>2015 - 2019</EducationDuration>
        </EducationDetails>
      </EducationWrapper>
      <DownloadTranscriptBtn
        href="https://ab02017f-17da-417b-836d-ce5736330013.filesusr.com/ugd/27c848_7800434260b44039a8bcbf70a97543c9.pdf"
        target="_blank"
      >
        Download Transcript
      </DownloadTranscriptBtn>
    </EducationContainer>
  );
};

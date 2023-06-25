import React from 'react'
import { EducationContainer, EducationDetails, EducationDuration, EducationInstitute, EducationLogo, EducationTitle, EducationWrapper, SectionTitle } from './styles'
import kkuLogo from '../../assets/kku-logo.png'

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
          <EducationInstitute>Faculty of Applied Sciences and Engineering</EducationInstitute>
          <EducationDuration>2015 - 2019</EducationDuration>
        </EducationDetails>
      </EducationWrapper>
    </EducationContainer>
  )
}
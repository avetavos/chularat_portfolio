import React from 'react'
import { LandingContainer, BtnContainer, Content, ContentProfileImage, DiscoveryBtn, DownloadResumeBtn, HeyHi, Icon, NameTitle, ProfileImage, Subtitle, TextBold, Title } from './styles'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import profileImage from '../../assets/profile.jpg'

export const LandingPage = () => {
  return (
    <LandingContainer>
        <Content>
          <HeyHi>👋 Hello,</HeyHi>
          <NameTitle>I’m Chularat Tivuttita</NameTitle>
          <Title>UX/UI Designer</Title>
          <Subtitle>I'm a <TextBold>UX/UI Designer</TextBold> passionate about participating in
          all stages of the digital product, from <TextBold>discovery</TextBold> to 
          <TextBold> delivery</TextBold>. Helping to focus business goals on users. 😃 </Subtitle>
          <BtnContainer>
            <DownloadResumeBtn>
              Download Resume 👋
            </DownloadResumeBtn>
            <DiscoveryBtn href='#work-experience-section'>
              Discover my works<Icon icon={faArrowDown} style={{
                margin: '0 0 0 7px'
              }}/>
            </DiscoveryBtn>
          </BtnContainer>
        </Content>
        <ContentProfileImage>
            <ProfileImage src={profileImage} alt="Profile Image" />
        </ContentProfileImage>
      </LandingContainer>
  )
}

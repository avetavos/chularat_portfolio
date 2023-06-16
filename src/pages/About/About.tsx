import React from 'react'
import { Container, Content, NameTitle, Subtitle, Title, HeyHi, TextBold, DownloadResumeBtn, DiscoveryBtn, BtnContainer, Icon, ProfileImage, ContentProfileImage } from './styles'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Profile from '../../assets/profile.jpg'

export const About = () => {
  return (
    <>
      <Container>
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
            <DiscoveryBtn>
              Discover my works<Icon icon={faArrowDown} style={{
                margin: '0 0 0 7px'
              }}/>
            </DiscoveryBtn>
          </BtnContainer>
        </Content>
        <ContentProfileImage>
            <ProfileImage src={Profile} alt="Profile Image" />
        </ContentProfileImage>
      </Container>
    </>
  )
}
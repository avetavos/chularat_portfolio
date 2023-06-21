import React from 'react';
import {
  Timeline,
  TimelineContainer,
  TimelineDescription,
  TimelineItem,
  TimelineSubtitle,
  TimelineTimestamp,
  TimelineTitle,
  WorkExperienceContainer,
  WorkExperienceSectionTitle,
  WorkExperienceTitle,
} from './styles';

export const WorkExperience = () => {
  return (
    <WorkExperienceContainer id='work-experience-section'>
      <div>
        <WorkExperienceTitle>Timeline</WorkExperienceTitle>
      </div>
      <div>
        <WorkExperienceSectionTitle>EXPERIENCE</WorkExperienceSectionTitle>
      </div>
      <TimelineContainer>
        <Timeline>
          <TimelineItem>
            <TimelineTimestamp>Aug 2020 - Sep 2021</TimelineTimestamp>
            <TimelineTitle>Graphic Designer</TimelineTitle>
            <TimelineSubtitle href='https://www.chococrm.com/' target='_blank'>Choco Card Enterprise Co., Ltd.</TimelineSubtitle>
            <TimelineDescription>Design Website and Web Application. Created visuals for digital marketing channels such as social media, promo web and online adsand other Marketing requirements</TimelineDescription>
          </TimelineItem>
          <TimelineItem>
            <TimelineTimestamp>Jan 2022 - Apr 2023</TimelineTimestamp>
            <TimelineTitle>UXUI Designer</TimelineTitle>
            <TimelineSubtitle href='https://zaviago.com/' target='_blank'>Zaviago Co., Ltd.</TimelineSubtitle>
            <TimelineDescription>UX Research and design Back office, Website, Web Application, and others. Design the images and text for the website, Created visuals for digital marketing channels such as social media, promo web, and online ads.</TimelineDescription>
          </TimelineItem>
        </Timeline>
      </TimelineContainer>
    </WorkExperienceContainer>
  );
};

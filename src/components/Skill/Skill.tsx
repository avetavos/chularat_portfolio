import React from 'react';
import {
  SkillBodyContent,
  SkillContainer,
  SkillCounter,
  SkillCounterContainer,
  SkillDetails,
  SkillDetailsContainer,
  SkillHeaderContent,
  SkillItem,
  SkillSectionTitle,
  SkillTitle,
  Tag,
} from './styles';

const skillList = [{
    label: 'Hard Skills',
    skills: [
      'UX Research',
      'UI Interaction Design',
      'Micro Interaction and Animation',
      'Graphic Design',
      'Information Architecture',
      'Design system',
      'User Persona',
      'Wireframe',
      'Prototyping',
      'Sitemap',
      'Competitor Analysis',
      'User Journey Map',
      'Mock up',
      'Usability Testing',
      'A/B Testing',
    ],
  },
  {
    label: 'Soft Skills',
    skills: [
      'Communication Skill',
      'Presentation Skill',
      'Creative thinking',
      'Time Management Skill',
      'Teamwork Skill',
      'Problem Solving',
      'Growth Mindset',
    ],
  },
  {
    label: 'Software',
    skills: [
      'Figma',
      'Adobe XD',
      'Illustrator',
      'Photoshop',
      'Lottie',
      'Jitter',
      'Marvel'
    ],
  },
];

export const Skill = () => {
  return (
    <SkillContainer>
      <SkillHeaderContent>
        <SkillSectionTitle>My Skills</SkillSectionTitle>
      </SkillHeaderContent>
      <SkillBodyContent>
        {skillList.map((skill, index) => (
          <SkillItem key={index}>
            <SkillCounterContainer>
              <SkillCounter>
                0{index + 1}
              </SkillCounter>
            </SkillCounterContainer>
            <SkillDetailsContainer>
              <SkillTitle>{skill.label}</SkillTitle>
              <SkillDetails>{skill.skills.map((skillText, skillIndex) => (
                <Tag key={skillIndex}>{skillText}</Tag>
              ))}</SkillDetails>
            </SkillDetailsContainer>
          </SkillItem>
        ))}
      </SkillBodyContent>
    </SkillContainer>
  );
};

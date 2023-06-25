import React from 'react';
import {
  SkillContainer,
  SkillItem,
  SkillList,
  SkillSectionTitle,
  SkillTag,
} from './styles';

const skillList = [
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
];

export const Skill = () => {
  return (
    <SkillContainer>
      <div>
        <SkillSectionTitle>Skills</SkillSectionTitle>
      </div>
      <SkillList>
        {skillList.map((tool, index) => (
          <SkillTag key={index}>{tool}</SkillTag>
        ))}
      </SkillList>
    </SkillContainer>
  );
};

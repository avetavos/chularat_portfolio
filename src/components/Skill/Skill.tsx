import React from 'react'
import { SkillContainer, SkillItem, SkillList, SkillSectionTitle, SkillTitle } from './styles'
import figmaLogo from '../../assets/figma-logo.png'
import xdLogo from '../../assets/xd-logo.png'
import psLogo from '../../assets/ps-logo.png'
import aiLogo from '../../assets/ai-logo.png'
import lottieLogo from '../../assets/lottie-logo.png'
import miroLogo from '../../assets/miro-logo.png'
import jitterLogo from '../../assets/jitter-logo.png'

const skillList = [
  {
    src: figmaLogo,
    alt: 'Figma'
  },
  {
    src: xdLogo,
    alt: 'XD'
  },
  {
    src: psLogo,
    alt: 'PS'
  },
  {
    src: aiLogo,
    alt: 'AI'
  },
  {
    src: lottieLogo,
    alt: 'Lottie'
  },
  {
    src: miroLogo,
    alt: 'Miro'
  },
  {
    src: jitterLogo,
    alt: 'Jitter'
  }
]

export const Skill = () => {
  return (
    <SkillContainer>
      <div>
        <SkillTitle>What I can do?</SkillTitle>
      </div>
      <div>
        <SkillSectionTitle>Skills & Tools</SkillSectionTitle>
      </div>
      <SkillList>
        {skillList.map((skill, index) => (
          <SkillItem key={index} src={skill.src} alt={skill.alt} />
        ))}
      </SkillList>
    </SkillContainer>
  )
}

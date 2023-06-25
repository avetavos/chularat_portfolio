import React from 'react'
import { ToolContainer, ToolItem, ToolList, ToolSectionTitle, ToolTitle } from './styles'
import figmaLogo from '../../assets/figma-logo.png'
import xdLogo from '../../assets/xd-logo.png'
import psLogo from '../../assets/ps-logo.png'
import aiLogo from '../../assets/ai-logo.png'
import lottieLogo from '../../assets/lottie-logo.png'
import miroLogo from '../../assets/miro-logo.png'
import jitterLogo from '../../assets/jitter-logo.png'

const toolList = [
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
    src: jitterLogo,
    alt: 'Jitter'
  }
]

export const Tool = () => {
  return (
    <ToolContainer>
      <div>
        <ToolSectionTitle>Tools</ToolSectionTitle>
      </div>
      <ToolList>
        {toolList.map((tool, index) => (
          <ToolItem key={index} src={tool.src} alt={tool.alt} />
        ))}
      </ToolList>
    </ToolContainer>
  )
}

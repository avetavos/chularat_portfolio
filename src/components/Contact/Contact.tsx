import React from 'react'
import { ContactButton, ContactContainer, ContactTitle, TextHighlight } from './styles'
import contactImg from '../../assets/contact-us.png'

export const Contact = () => {
  const handleContact = () => {
    window.location.href = 'mailto:tivuttitachularat@gmail.com'
  }

  return (
    <ContactContainer>
      <ContactButton src={contactImg} onClick={() => handleContact()}/>
      <ContactTitle>
        Thanks for<br /><TextHighlight>your attention!</TextHighlight>
      </ContactTitle>
    </ContactContainer>
  )
}

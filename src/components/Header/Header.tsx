import React from 'react'
import { Navbar, Item, Menu, MenuItem, MenuLink, ActiveDot, Logo, MenuIcon } from './styles'
import { useMatch } from "react-router-dom";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import Avatar from '../../assets/avatar.png'

export const Header = () => {
  const isAboutMatch = useMatch('/about')
  const isWorkMatch = useMatch('/work')
  const isResumeMatch = useMatch('/resume')
  const isContactMatch = useMatch('/contact')

  return (
    <Navbar>
      <Item>
        <Logo src={Avatar} alt="Chularat Avatar" />
      </Item>
      <Item isOnlyDesktop={true}>
        <Menu>
          <MenuItem className={isAboutMatch ? 'active': ''}>
            <MenuLink to="/about">About</MenuLink>
            {isAboutMatch && <ActiveDot/>}
          </MenuItem>
          <MenuItem className={isResumeMatch ? 'active': ''}>
            <MenuLink to="/resume">Resume</MenuLink>
            {isResumeMatch && <ActiveDot/>}
          </MenuItem>
          <MenuItem className={isWorkMatch ? 'active': ''}>
            <MenuLink to="/work">Works</MenuLink>
            {isWorkMatch && <ActiveDot/>}
          </MenuItem>
          <MenuItem className={isContactMatch ? 'active': ''}>
            <MenuLink to="/contact">Contact</MenuLink>
            {isContactMatch && <ActiveDot/>}
          </MenuItem>
        </Menu>
      </Item>
      <Item isOnlyDesktop={true}>
        <MenuIcon icon={faEnvelope} size='xl'/>
        <MenuIcon icon={faLinkedin} size='xl'/>
      </Item>
      <Item isOnlyMobile={true}>
        <MenuIcon icon={faBars} size='xl' style={{marginRight: 0}}/>
      </Item>
    </Navbar>
  )
}

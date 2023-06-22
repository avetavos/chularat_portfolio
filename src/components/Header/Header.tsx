import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Item,
  Menu,
  MenuItem,
  ActiveDot,
  Logo,
  MenuIcon,
  MobileMenuWindow,
  MobileMenuItem,
  HandleBrawerBtn,
  MobileContainer,
  MobileItem,
  MobileMenu,
} from './styles';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../assets/avatar.png';

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavigate = (path: string) => {
    setIsDrawerOpen(false)
    window.location.href = `#${path}`;
  }

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isDrawerOpen])

  return (
    <>
      <Navbar>
        <Item>
          <Logo src={Avatar} alt="Chularat Avatar" />
        </Item>
        <Item isOnlyDesktop={true}>
          <Menu>
            <MenuItem onClick={() => handleNavigate('about-section')}>
              About
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('work-experience-section')}>
              Resume
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('portfolio-section')}>
              Works
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('contact-section')}>
              Contact
            </MenuItem>
          </Menu>
        </Item>
        <Item isOnlyDesktop={true}>
          <MenuIcon icon={faEnvelope} size="xl" />
          <MenuIcon icon={faLinkedin} size="xl" />
        </Item>
        <Item isOnlyMobile={true}>
          <HandleBrawerBtn
            type="button"
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          >
            <MenuIcon icon={faBars} size="xl" style={{ margin: 0 }} />
          </HandleBrawerBtn>
        </Item>
      </Navbar>
      <MobileMenuWindow isOpen={isDrawerOpen}>
        <MobileContainer>
          <MobileItem>
            <MobileMenu>
              <MobileMenuItem onClick={() => handleNavigate('about')}>
                About
              </MobileMenuItem>
              <MobileMenuItem onClick={() => handleNavigate('resume')}>
                Resume
              </MobileMenuItem>
              <MobileMenuItem onClick={() => handleNavigate('work')}>
                Works
              </MobileMenuItem>
              <MobileMenuItem onClick={() => handleNavigate('contact')}>
                Contact
              </MobileMenuItem>
            </MobileMenu>
          </MobileItem>
          <MobileItem style={{paddingTop: '4rem'}} isIcon={true}>
            <MenuIcon icon={faEnvelope} size="xl" />
            <MenuIcon icon={faLinkedin} size="xl" />
          </MobileItem>
          <MobileItem style={{paddingTop: '4rem'}}>
            <HandleBrawerBtn
              type="button"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <MenuIcon icon={faXmark} size="xl" style={{ margin: 0 }} />
            </HandleBrawerBtn>
          </MobileItem>
        </MobileContainer>
      </MobileMenuWindow>
    </>
  );
};

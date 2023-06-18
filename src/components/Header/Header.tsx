import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Item,
  Menu,
  MenuItem,
  MenuLink,
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
import { useMatch, useNavigate } from 'react-router-dom';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../assets/avatar.png';

export const Header = () => {
  const isAboutMatch = useMatch('/about');
  const isWorkMatch = useMatch('/work');
  const isResumeMatch = useMatch('/resume');
  const isContactMatch = useMatch('/contact');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    setIsDrawerOpen(false)
    navigate(path)
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
            <MenuItem className={isAboutMatch ? 'active' : ''} onClick={() => handleNavigate('about')}>
              About
              {isAboutMatch && <ActiveDot />}
            </MenuItem>
            <MenuItem className={isResumeMatch ? 'active' : ''} onClick={() => handleNavigate('resume')}>
              Resume
              {isResumeMatch && <ActiveDot />}
            </MenuItem>
            <MenuItem className={isWorkMatch ? 'active' : ''} onClick={() => handleNavigate('work')}>
              Works
              {isWorkMatch && <ActiveDot />}
            </MenuItem>
            <MenuItem className={isContactMatch ? 'active' : ''} onClick={() => handleNavigate('contact')}>
              Contact
              {isContactMatch && <ActiveDot />}
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
              <MobileMenuItem className={isAboutMatch ? 'active' : ''} onClick={() => handleNavigate('about')}>
                About
              </MobileMenuItem>
              <MobileMenuItem className={isResumeMatch ? 'active' : ''} onClick={() => handleNavigate('resume')}>
                Resume
              </MobileMenuItem>
              <MobileMenuItem className={isWorkMatch ? 'active' : ''} onClick={() => handleNavigate('work')}>
                Works
              </MobileMenuItem>
              <MobileMenuItem className={isContactMatch ? 'active' : ''} onClick={() => handleNavigate('contact')}>
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

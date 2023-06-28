import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Item,
  Menu,
  MenuItem,
  MenuIcon,
  SmoothLink,
  HandleBackToTopBtn,
} from './styles';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Scroll from 'react-scroll';

enum MenuList {
  ABOUT_ME = 'About Me',
  EXPERIENCE_SKILLS = 'Experience & Skills',
  WORKS = 'Works',
  CERTIFICATES = 'Certificates',
}

export const Footer = () => {
  const menuList = [
    {
      label: 'About Me',
      path: 'about-section',
      activeKey: MenuList.ABOUT_ME,
    },
    {
      label: 'Experience & Skills',
      path: 'work-experience-section',
      activeKey: MenuList.EXPERIENCE_SKILLS,
    },
    {
      label: 'Works',
      path: 'portfolio-section',
      activeKey: MenuList.WORKS,
    },
    {
      label: 'Certificates',
      path: 'certificate-section',
      activeKey: MenuList.CERTIFICATES,
    },
  ];

  const handleBackToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  return (
    <>
      <Navbar>
        <Item>
          <p style={{marginBottom: 0}}>tivuttitachularat@gmail.com</p>
        </Item>
        <Item>
          <Menu>
            {menuList.map((item, index) => (
              <MenuItem key={index}>
                <SmoothLink
                  to={item.path}
                  smooth={true}
                  duration={500}
                  offset={-76}
                >
                  {item.label}
                </SmoothLink>
              </MenuItem>
            ))}
          </Menu>
        </Item>
        <Item>
          <HandleBackToTopBtn
            type="button"
            onClick={() => {
              handleBackToTop();
            }}
          >
            {' '}
            Back Up
            <MenuIcon icon={faArrowUp} style={{ margin: '0 0 0 5px' }} />
          </HandleBackToTopBtn>
        </Item>
      </Navbar>
    </>
  );
};

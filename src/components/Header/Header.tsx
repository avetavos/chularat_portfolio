import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Item,
  Menu,
  MenuItem,
  Logo,
  MenuIcon,
  MobileMenuWindow,
  MobileMenuItem,
  HandleBrawerBtn,
  MobileContainer,
  MobileItem,
  MobileMenu,
  MenuLink,
  SmoothLink,
  ActiveDot,
  ActiveDotMobile,
} from './styles';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faBars,
  faXmark,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../assets/avatar.png';
import Scroll from 'react-scroll';

enum MenuList {
  ABOUT_ME = 'About Me',
  EXPERIENCE_SKILLS = 'Experience & Skills',
  WORKS = 'Works',
  CERTIFICATES = 'Certificates',
}

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(MenuList.ABOUT_ME);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavigate = (path: string, menu: MenuList, offset = 0) => {
    setIsDrawerOpen(false);
    onHandleActiveMenu(menu);
    Scroll.scroller.scrollTo(path, {
      duration: 500,
      offset,
      smooth: true,
    })
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isDrawerOpen]);

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

  const onHandleActiveMenu = (menu: MenuList) => {
    setActiveMenu(menu);
  };

  const contractLink = (
    <>
      <MenuLink href="mailto:tivuttitachularat@gmail.com">
        <MenuIcon icon={faEnvelope} size="xl" />
      </MenuLink>
      <MenuLink href="https://www.linkedin.com/" target="_blank">
        <MenuIcon icon={faLinkedin} size="xl" />
      </MenuLink>
      <MenuLink href="tel:+66957192045">
        <MenuIcon icon={faPhone} size="lg" />
      </MenuLink>
    </>
  );

  return (
    <>
      <Navbar>
        <Item>
          <Logo src={Avatar} alt="Chularat Avatar" />
        </Item>
        <Item isOnlyDesktop={true}>
          <Menu>
            {menuList.map((item, index) => (
              <MenuItem key={index}>
                <SmoothLink
                  to={item.path}
                  smooth={true}
                  duration={500}
                  offset={-76}
                  onClick={() => onHandleActiveMenu(item.activeKey)}
                  className={activeMenu === item.activeKey ? 'active' : ''}
                >
                  {item.label}
                </SmoothLink>
                {activeMenu === item.activeKey && <ActiveDot />}
              </MenuItem>
            ))}
          </Menu>
        </Item>
        <Item isOnlyDesktop={true}>{contractLink}</Item>
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
              {menuList.map((item, index) => (
                <>
                  <MobileMenuItem
                    key={index}
                    className={activeMenu === item.activeKey ? 'active' : ''}
                    onClick={() => handleNavigate(item.path, item.activeKey, item.activeKey === MenuList.ABOUT_ME ? -76 : 0)}
                  >
                    {item.label}
                    {activeMenu === item.activeKey && <ActiveDotMobile />}
                  </MobileMenuItem>
                </>
              ))}
            </MobileMenu>
          </MobileItem>
          <MobileItem style={{ paddingTop: '4rem' }} isIcon={true}>
            {contractLink}
          </MobileItem>
          <MobileItem style={{ paddingTop: '4rem' }}>
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

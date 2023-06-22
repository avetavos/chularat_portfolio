import React, { useEffect } from 'react';
import {
  SectionTitle,
  PortFolioTitle,
  TabContainer,
  TabList,
  Tab,
  PowerNumber,
  CardContainer,
  Card,
  ProjectThumbnail,
  ProjectTitle,
  ProjectDescription,
  TagSection,
  ProjectTag,
  ProjectListContainer,
  ViewMoreButton,
} from './styles';
import projectThumbnail from '../../assets/project-thumbnail.jpg';

interface ICardItem {
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
}

const projectList: Record<string, any[]> = {
  uxui: [
    {
      thumbnail: projectThumbnail,
      title: 'CRM for E-commerce',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['UX Research', 'Information Architecture', 'Interaction Design', 'Visual Design', 'Micro Interaction', 'Prototype', 'User Testing']
    },
    {
      thumbnail: projectThumbnail,
      title: 'Redesign Point of Sale (POS)',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Visual Design', 'UX Research', 'Customer Journey', 'User Testing'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Website design full screen and landing page',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['UX Research', 'Visual Design', 'Story Telling', 'Copy Writing', 'Prototype', 'Interaction Design', 'Animation Design', 'User Testing'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'E-mail Onboarding',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['UX Research', 'Visual Design', 'Customer Journey', 'Graphic Design'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Honda Web Application',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
        tags: ['UX Research', 'Visual Design', 'Customer Journey', 'Prototype'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Create a Website Mock up',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Graphic Design', 'UXUI', 'Concept Art'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'The List of Themes Website',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['UX Research', 'Visual Design', 'Story Telling', 'Copy Writing', 'Prototype', 'Customer Journey'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Banner Design',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Graphic Design', 'UXUI'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Gambol Web Application',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Graphic Design', 'UXUI', 'Concept Art'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Super Coffee Content and Web Application',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Graphic Design', 'UXUI', 'Concept Art'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Dna Web Application',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Graphic Design', 'UXUI', 'Concept Art'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Happy Pet Application',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['UX Research', 'User Interview', 'Visual Design', 'Design System', 'Customer Journey', 'Wireframe', 'Prototype', 'Site map', 'User Testing'],
    },
  ],
  design: [
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['UX Research', 'User Interview', 'Visual Design', 'Design System', 'Customer Journey'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
  ],
  branding: [
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
  ],
  rich_menu: [
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
  ],
  drawing: [
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description:
        'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
      tags: ['Mobile App', 'Website', 'SasS'],
    },
  ],
};

export const ProjectList = () => {
  const [maxDesktopItems, setMaxDesktopItems] = React.useState(6);
  const [selectedTab, setSelectedTab] = React.useState('uxui');
  const [projectCount, setProjectCount] = React.useState({
    uxui: 0,
    design: 0,
    branding: 0,
    rich_menu: 0,
    drawing: 0,
  });

  useEffect(() => {
    Object.entries(projectList).forEach(([key, value]) => {
      setProjectCount((prevState) => ({
        ...prevState,
        [key]: value.length,
      }));
    });
  }, []);

  const renderCardListOnDesktop = (cardList: ICardItem[]) => {
    const minLength =
      cardList.length < maxDesktopItems
        ? cardList.length
        : maxDesktopItems;
    const cardListDisplay = [];
    for (let i = 0; i < minLength; i++) {
      cardListDisplay.push(renderCardItem(cardList[i]));
    }
    return cardListDisplay;
  };

  const renderCardListOnMobile = (cardList: ICardItem[]) => {
    const minLength =
      cardList.length < maxDesktopItems
        ? cardList.length
        : maxDesktopItems;
    const cardListDisplay = [];
    for (let i = 0; i < minLength; i++) {
      cardListDisplay.push(renderCardItem(cardList[i]));
    }
    return cardListDisplay;
  };

  const renderCardItem = (card: ICardItem) => (
    <Card>
      <ProjectThumbnail src={card.thumbnail} alt="project thumbnail" />
      <ProjectTitle>{card.title}</ProjectTitle>
      <ProjectDescription>{card.description}</ProjectDescription>
      <TagSection>
        {card.tags.map((tag) => (
          <ProjectTag>{tag}</ProjectTag>
        ))}
      </TagSection>
    </Card>
  );

  const onLoadMoreHandler = () => {
    setMaxDesktopItems(projectList[selectedTab].length)
  }

  const onChangeTabHandler = (tab: string) => {
    setSelectedTab(tab);
    setMaxDesktopItems(6);
  };

  return (
    <ProjectListContainer id='portfolio-section' sizing={projectList[selectedTab].length}>
      <div>
        <PortFolioTitle>Latest Work</PortFolioTitle>
      </div>
      <div>
        <SectionTitle>Portfolio</SectionTitle>
      </div>
      <TabContainer>
        <TabList>
          <Tab
            className={`${selectedTab === 'uxui' ? 'active' : ''}`}
            onClick={() => onChangeTabHandler('uxui')}
          >
            UXUI<PowerNumber>{projectCount['uxui']}</PowerNumber>
          </Tab>
          <Tab
            className={`${selectedTab === 'design' ? 'active' : ''}`}
            onClick={() => onChangeTabHandler('design')}
          >
            Design<PowerNumber>{projectCount['design']}</PowerNumber>
          </Tab>
          <Tab
            className={`${selectedTab === 'branding' ? 'active' : ''}`}
            onClick={() => onChangeTabHandler('branding')}
          >
            Branding<PowerNumber>{projectCount['branding']}</PowerNumber>
          </Tab>
          <Tab
            className={`${selectedTab === 'rich_menu' ? 'active' : ''}`}
            onClick={() => onChangeTabHandler('rich_menu')}
          >
            Rich Menu<PowerNumber>{projectCount['rich_menu']}</PowerNumber>
          </Tab>
          <Tab
            className={`${selectedTab === 'drawing' ? 'active' : ''}`}
            onClick={() => onChangeTabHandler('drawing')}
          >
            Drawing<PowerNumber>{projectCount['drawing']}</PowerNumber>
          </Tab>
        </TabList>
      </TabContainer>
      <>
        <CardContainer isDesktop={true}>
          {renderCardListOnDesktop(projectList[selectedTab])}
        </CardContainer>
        <CardContainer isMobile={true}>
          {renderCardListOnMobile(projectList[selectedTab])}
        </CardContainer>
        {projectList[selectedTab].length > maxDesktopItems && (
          <ViewMoreButton type='button' onClick={() => onLoadMoreHandler()}>View More</ViewMoreButton>
        )}
      </>
    </ProjectListContainer>
  );
};

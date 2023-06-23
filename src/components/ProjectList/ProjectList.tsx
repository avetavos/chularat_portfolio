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
  DescriptionList,
} from './styles';
import projectThumbnail from '../../assets/project-thumbnail.jpg';

interface ICardItem {
  thumbnail: string;
  title: string;
  description: string[];
  tags: string[];
}

const projectList: Record<string, any[]> = {
  uxui: [
    {
      thumbnail: projectThumbnail,
      title: 'CRM for E-commerce',
      description: [
        'Redesigned Dashboard, Order detail page, E-commerce setting, Setting, Theme Option, Review page, Shop Category page, Tag page, and Comment page.',
        'UX Research and Collected information by comparing the analysis to WooCommerce.',
      ],
      tags: [
        'UX Research',
        'Information Architecture',
        'Interaction Design',
        'Visual Design',
        'Micro Interaction',
        'Prototype',
        'User Testing',
      ],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Redesign Point of Sale (POS)',
      description: [
        'UX Research by comparing the analysis to MultiPOS-Point of Sale for WooCommerce.',
        'Redesign Login page, Cashier end page, Kitchen view page, and Create website using Figma to create high fidelity prototype.',
        'Created and Control Visuals and present the projects to the team focusing on Intuitive design and accessibility design.',
      ],
      tags: [
        'Visual Design',
        'UX Research',
        'Customer Journey',
        'User Testing',
      ],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Website design full screen and landing page',
      description: [
        'Collected information and created user persona/Captivate user experience.',
        'Created Information website and e commerce website and Control User stories/User cases and Responsive layouts with design grids guide.',
        'Usability testing by A/B testing method and Worked and communicated with a developer improve both UX and UI design.'
      ],
      tags: [
        'UX Research',
        'Visual Design',
        'Story Telling',
        'Copy Writing',
        'Prototype',
        'Interaction Design',
        'Animation Design',
        'User Testing',
      ],
    },
    {
      thumbnail: projectThumbnail,
      title: 'E-mail Onboarding',
      description: [
        'Define Journey mep, Story Telling, and Goal/Targets.',
        'Created and Control Visuals and present the projects to the team focusing on Intuitive design.'
      ],
      tags: [
        'UX Research',
        'Visual Design',
        'Customer Journey',
        'Graphic Design',
      ],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Honda Web Application',
      description: [
        'Designed web application based on Honda key visual for Collect points and redeeming rewards from service usage used on the web application for Line Official Account.',
        'Collected information and created user persona/Captivate user experience.'
      ],
      tags: ['UX Research', 'Visual Design', 'Customer Journey', 'Prototype'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Create a Website Mock up',
      description: [
        'Create and Control Visuals UI mockups. Present the projects to the team that clearly show how sites work and look.',
        'Generate clear ideas and concepts to collaborate with cross function team.'
      ],
      tags: ['Graphic Design', 'UXUI', 'Concept Art'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'The List of Themes Website',
      description: [
        'Coordinate with each team to deliver the standard design.',
        'Design and Suggest a Friendly and end to end Ux Flow to each business requirement.'
      ],
      tags: [
        'UX Research',
        'Visual Design',
        'Story Telling',
        'Copy Writing',
        'Prototype',
        'Customer Journey',
      ],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Banner Design',
      description: [
        'Create banners for social media posts including Facebook, Twitter, LINE, Instagram, and other Marketing requirements.'
      ],
      tags: ['Graphic Design', 'UXUI'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Gambol Web Application',
      description: [
        'Design web application based on Gambol key visual for Collect points and redeeming rewards from Submit a receipt used on the web application for Line Official Account.'
      ],
      tags: ['Graphic Design', 'UXUI', 'Concept Art'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Super Coffee Content and Web Application',
      description: [
        'Design web application for collect points and redeem rewards from sending the customer receipt.',
        'Design base on Super Coffee key visual use on Facebook fan page, Line broadcast, Line web application for Line Official Account.'
      ],
      tags: ['Graphic Design', 'UXUI', 'Concept Art'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Dna Web Application',
      description: [
        'Design web application based on Dna key visual for Collect points and redeeming rewards from Submit a receipt used on the web application for Line Official Account.',
      ],
      tags: ['Graphic Design', 'UXUI', 'Concept Art'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Happy Pet Application',
      description: [
        'Design web application for people with pets and looking for cafes, hotels, shops that can go out to do activities with pets.',
        'Conduct User Research, User interview and usability testing, including the designed Wireframe and Suggest the design solution.'
      ],
      tags: [
        'UX Research',
        'User Interview',
        'Visual Design',
        'Design System',
        'Customer Journey',
        'Wireframe',
        'Prototype',
        'Site map',
        'User Testing',
      ],
    },
  ],
  design: [
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: [
        'UX Research',
        'User Interview',
        'Visual Design',
        'Design System',
        'Customer Journey',
      ],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
  ],
  branding: [
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
  ],
  rich_menu: [
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
      tags: ['Mobile App', 'Website', 'SasS'],
    },
  ],
  drawing: [
    {
      thumbnail: projectThumbnail,
      title: 'Project Title',
      description: [],
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
      cardList.length < maxDesktopItems ? cardList.length : maxDesktopItems;
    const cardListDisplay = [];
    for (let i = 0; i < minLength; i++) {
      cardListDisplay.push(renderCardItem(cardList[i]));
    }
    return cardListDisplay;
  };

  const renderCardListOnMobile = (cardList: ICardItem[]) => {
    const minLength =
      cardList.length < maxDesktopItems ? cardList.length : maxDesktopItems;
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
      <ProjectDescription>
        <DescriptionList>
          {card.description.map((text) => (
            <li>{text}</li>
          ))}
        </DescriptionList>
      </ProjectDescription>
      <TagSection>
        {card.tags.map((tag) => (
          <ProjectTag>{tag}</ProjectTag>
        ))}
      </TagSection>
    </Card>
  );

  const onLoadMoreHandler = () => {
    setMaxDesktopItems(projectList[selectedTab].length);
  };

  const onChangeTabHandler = (tab: string) => {
    setSelectedTab(tab);
    setMaxDesktopItems(6);
  };

  return (
    <ProjectListContainer
      id="portfolio-section"
      sizing={projectList[selectedTab].length}
    >
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
          <ViewMoreButton type="button" onClick={() => onLoadMoreHandler()}>
            View More
          </ViewMoreButton>
        )}
      </>
    </ProjectListContainer>
  );
};

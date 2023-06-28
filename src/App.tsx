import React from 'react';
import {
  Header,
  Landing,
  WorkExperience,
  ProjectList,
  Certification,
  Tool,
  Education,
  Skill,
  Footer,
} from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Education />
        <WorkExperience />
        <ProjectList />
        <Certification />
        <Skill />
        <Tool />
      </main>
      <Footer />
    </>
  );
}

export default App;

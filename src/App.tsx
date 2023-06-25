import React from 'react';
import { Header, Landing, WorkExperience, ProjectList, Certification, Tool, Education, Skill } from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Education />
        <WorkExperience />
        <Skill />
        <Tool />
        <ProjectList />
        <Certification />
      </main>
    </>
  );
}

export default App;

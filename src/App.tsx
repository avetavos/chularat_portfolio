import React from 'react';
import { Header, Landing, WorkExperience, ProjectList, Certification, Skill, Education } from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Education />
        <Skill />
        <WorkExperience />
        <ProjectList />
        <Certification />
      </main>
    </>
  );
}

export default App;

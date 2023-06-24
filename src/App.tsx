import React from 'react';
import { Header, Landing, WorkExperience, ProjectList, Certification, Skill } from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Skill />
        <WorkExperience />
        <ProjectList />
        <Certification />
      </main>
    </>
  );
}

export default App;

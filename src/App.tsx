import React from 'react';
import { Header, Landing, WorkExperience, ProjectList, Certification, Skill, Contract, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Skill />
        <WorkExperience />
        <ProjectList />
      </main>
    </>
  );
}

export default App;

import React from 'react';
import {
  Header,
  Landing,
  WorkExperience,
  ProjectList,
  Certification,
  Contact,
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

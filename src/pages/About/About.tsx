import React from 'react'
import { ProjectList } from './ProjectList'
import { LandingPage } from './LandingPage'
import { WorkExperience } from './WorkExperience'

export const About = () => {
  return (
    <>
      <LandingPage />
      <WorkExperience />
      <ProjectList />
    </>
  )
}
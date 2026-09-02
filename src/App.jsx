import React from 'react'
import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SiteFooter from './components/SiteFooter';
import EducationSection from './components/EducationSection';

const App = () => {
  return (
    <>
        <SiteHeader/>
        <HeroSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <EducationSection/>
        <SiteFooter/>
    </>
  )
}

export default App
import React from 'react'
import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SiteFooter from './components/SiteFooter';

const App = () => {
  return (
    <>
        <SiteHeader/>
        <HeroSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <SiteFooter/>
    </>
  )
}

export default App
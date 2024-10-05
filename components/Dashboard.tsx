"use client"

import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import HomeContent from './HomeContent'
import ContentPlanner from './ContentPlanner'
import ContentCreator from './ContentCreator'
import SEOAssistant from './SEOAssistant'
import Insights from './Insights'
import Support from './Support'
import Settings from './Settings'

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('home')

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeContent />
      case 'content-planner':
        return <ContentPlanner />
      case 'content-creator':
        return <ContentCreator />
      case 'seo-assistant':
        return <SEOAssistant />
      case 'insights':
        return <Insights />
      case 'support':
        return <Support />
      case 'settings':
        return <Settings />
      default:
        return <HomeContent />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto px-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}
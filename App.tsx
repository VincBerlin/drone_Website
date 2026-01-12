import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SplitSection from './components/SplitSection';
import CardGrid from './components/CardGrid';
import StepsTimeline from './components/StepsTimeline';
import MediaGallery from './components/MediaGallery';
import UpdateLog from './components/UpdateLog';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { CONTENT } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-light text-dark font-sans selection:bg-secondary selection:text-dark">
      <Header />
      
      <main>
        <Hero />
        
        {/* Intro Section */}
        <SplitSection 
          id="project"
          kicker={CONTENT.intro.kicker}
          title={CONTENT.intro.title}
          body={CONTENT.intro.body}
          image={CONTENT.intro.image}
          alt={CONTENT.intro.alt}
          ctaLabel={CONTENT.intro.ctaLabel}
          bgColor="white"
        />

        <CardGrid />
        
        <StepsTimeline />
        
        <MediaGallery />
        
        <UpdateLog />
        
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
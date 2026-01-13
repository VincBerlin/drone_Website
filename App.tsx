import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroCollage from './components/IntroCollage';
import FullWidthSection from './components/FullWidthSection';
import FeatureGrid from './components/FeatureGrid';
import SplitSection from './components/SplitSection';
import MediaGrid from './components/MediaGrid';
import Footer from './components/Footer';
import { CONTENT } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-sand text-dark font-sans selection:bg-primary selection:text-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Section 1: Find Your Freedom Style */}
        <IntroCollage />
        
        {/* Section 2: Stay Salty Style */}
        <FullWidthSection 
          id="capabilities-intro"
          title="defying gravity"
          subtitle="Autonomous flight planning for the adventurer at heart"
          image="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2070&auto=format&fit=crop"
          ctaLabel="View Capabilities"
          overlayStrength="medium"
        />

        {/* Section 3: Base Camp Style (Features) */}
        <FeatureGrid />
        
        {/* Section 4: The Surf Style - Swapped to a deep wave shot since Hero now uses the beach view */}
        <FullWidthSection 
          id="tech-intro"
          title="the tech"
          subtitle="Catching the perfect stream of data"
          image="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=2070&auto=format&fit=crop"
          buttonStyle="outline"
          overlayStrength="light"
        />
        
        {/* Section 5: Community Style (Split) */}
        <SplitSection 
          id="project"
          kicker="Development"
          title="Built to Endure"
          body={CONTENT.process.steps[0].body + "\n\n" + CONTENT.process.steps[1].body}
          image="https://images.unsplash.com/photo-1537162998323-2d3758f2762a?q=80&w=2070&auto=format&fit=crop"
          alt="Drone mechanic"
          reverse={true}
        />
        
        {/* Section 6: The Experience Style */}
        <FullWidthSection 
          id="media-intro"
          title="the footage"
          subtitle="Whether it's awesome 8K video or straight shutter stills, we've got you covered."
          image="https://images.unsplash.com/photo-1518182170546-0766be6f5a56?q=80&w=2070&auto=format&fit=crop"
          buttonStyle="outline"
          ctaLabel="Watch Reel"
        />

        {/* Section 7: Fuel Up Style (Footer/Media) */}
        <MediaGrid />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
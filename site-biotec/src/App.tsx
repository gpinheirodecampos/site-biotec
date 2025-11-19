import { useRef } from 'react';
import { HeroSection } from './components/layout/HeroSection';
import { TextSection } from './components/layout/TextSection';
import { StepsSection } from './components/layout/StepsSection';
import { InteractiveCardSection } from './components/layout/InteractiveCardSection';
import { VideoSection } from './components/layout/VideoSection';
import { Footer } from './components/layout/Footer';
import { ProgressBar } from './components/layout/ProgressBar';
import { ModeToggle } from './components/mode-toggle';
import { reportContent } from './data/report-content';
import { Graph1 } from './components/charts/Graph1';
import { Graph2 } from './components/charts/Graph2';
import { Graph3 } from './components/charts/Graph3';
import { Graph4 } from './components/charts/Graph4';
import { Graph5 } from './components/charts/Graph5';
import { Graph6 } from './components/charts/Graph6';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-background text-foreground font-sans selection:bg-green-500/30 relative">
      <ModeToggle />
      <ProgressBar containerRef={containerRef} />
      {reportContent.map((section) => {
        if (section.type === 'hero') {
          return (
            <HeroSection 
              key={section.id} 
              title={section.title} 
              subtitle={section.subtitle} 
            />
          );
        }
        
        if (section.type === 'text') {
          return (
            <div key={section.id} className="snap-start min-h-screen flex flex-col justify-center">
              <TextSection 
                title={section.title} 
                content={section.content || []} 
              />
            </div>
          );
        }

        if (section.type === 'steps') {
          return (
            <StepsSection 
              key={section.id}
              title={section.title}
              content={section.content || []}
            />
          );
        }

        if (section.type === 'interactive-cards') {
          return (
            <InteractiveCardSection 
              key={section.id}
              title={section.title}
              content={section.content || []}
              items={section.cardItems || []}
            />
          );
        }

        if (section.type === 'chart' || section.type === 'infographic') {
          const renderChart = () => {
            switch (section.chartId) {
              case 'graph-1': return <Graph1 />;
              case 'graph-2': return <Graph2 />;
              case 'graph-3': return <Graph3 />;
              case 'graph-4': return <Graph4 />;
              case 'graph-5': return <Graph5 />;
              case 'graph-6': return <Graph6 />;
              default: return <div className="text-red-500">Chart not found: {section.chartId}</div>;
            }
          };

          return (
            <div key={section.id} className="snap-start min-h-screen flex flex-col justify-center pb-20 pt-8 container mx-auto px-4 max-w-5xl">
               <TextSection 
                  title={section.title} 
                  content={section.content || []} 
                  className="pb-8"
                />
               <div className="h-[500px] w-full">
                  {renderChart()}
               </div>
            </div>
          );
        }

        return null;
      })}
      <VideoSection />
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
}

export default App;

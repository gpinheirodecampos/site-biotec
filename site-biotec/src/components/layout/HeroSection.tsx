import { motion } from 'framer-motion';
import BackgroundPaths from '../react-bits/FloatingPaths';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-background text-foreground snap-center">
      <div className="absolute inset-0 z-0">
        <BackgroundPaths />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-background pointer-events-none" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight justify-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600"
          >
            {title}
          </motion.h1>
        </div>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-muted-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

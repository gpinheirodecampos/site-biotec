import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TextReveal } from '../react-bits/TextReveal';

interface TextSectionProps {
  title: string;
  content: string[];
  className?: string;
}

export function TextSection({ title, content, className }: TextSectionProps) {
  return (
    <section className={cn("py-20 container mx-auto px-4 max-w-4xl", className)}>
      <div className="mb-8">
        <TextReveal 
          text={title}
          className="text-3xl md:text-4xl font-bold text-primary"
        />
      </div>
      
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        {content.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

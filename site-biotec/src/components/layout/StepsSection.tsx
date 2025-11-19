import { motion } from 'framer-motion';
import { Microscope, Sprout, Droplets, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StepsSectionProps {
  title: string;
  content: string[];
}

export function StepsSection({ title, content }: StepsSectionProps) {
  const intro = content[0];
  const steps = content.slice(1).map((step) => {
    const [stepTitle, stepDesc] = step.split(':');
    return { title: stepTitle, description: stepDesc };
  });

  const icons = [Microscope, Sprout, Droplets, Leaf];

  return (
    <section className="py-20 container mx-auto px-4 max-w-6xl snap-center min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">{title}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{intro}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                <CardHeader className="flex flex-col items-center text-center pb-2">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  {step.description}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

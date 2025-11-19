import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Microscope, 
  Sprout, 
  Droplets, 
  Leaf, 
  Tractor, 
  Wheat, 
  RotateCw, 
  Footprints, 
  Cuboid, 
  Network, 
  Recycle,
  X
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InteractiveCardSectionProps {
  title: string;
  content: string[];
  items: {
    title: string;
    description: string;
    content: string;
    icon?: string;
  }[];
}

const iconMap: Record<string, any> = {
  Microscope,
  Sprout,
  Droplets,
  Leaf,
  Tractor,
  Wheat,
  RotateCw,
  Footprints,
  Cuboid,
  Network,
  Recycle
};

export function InteractiveCardSection({ title, content, items }: InteractiveCardSectionProps) {
  const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);
  const intro = content[0];

  return (
    <section className="py-20 container mx-auto px-4 max-w-6xl snap-center min-h-screen flex flex-col justify-center relative">
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
        {items.map((item, index) => {
          const Icon = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Sprout;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="flex flex-col items-center text-center pb-2 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground relative z-10">
                  {item.description}
                  <div className="mt-4 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Clique para saber mais
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-xl shadow-2xl max-w-lg w-full overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {(() => {
                      const Icon = selectedItem.icon && iconMap[selectedItem.icon] ? iconMap[selectedItem.icon] : Sprout;
                      return <Icon className="w-6 h-6 text-primary" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {selectedItem.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

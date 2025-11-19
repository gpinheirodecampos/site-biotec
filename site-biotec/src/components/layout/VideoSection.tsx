import { motion } from 'framer-motion';

export function VideoSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-black snap-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/videos/cerrado-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6"
        >
          O Futuro do Cerrado
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-md"
        >
          A recuperação do solo é o primeiro passo para garantir a sustentabilidade deste bioma vital.
        </motion.p>
      </div>
    </section>
  );
}

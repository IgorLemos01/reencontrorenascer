import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/80 via-primary/70 to-foreground/90" />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground/80 font-body text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          O que o Vinícius fez no carnaval passado não sabemos, mas o que você
          vai fazer próximo sábado já está marcado:
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8 tracking-tight"
        >
          REENCONTRO{" "}
          <span className="text-gradient-golden">DO RENASCER</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-primary-foreground/90 font-body text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Venha viver essa experiência gratuita que vai te aproximar ainda mais
          do Amor de Deus! Porque o que você viveu aqui não acaba na
          quarta-feira de cinzas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-primary-foreground/90 font-body text-sm md:text-base mb-12"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-secondary" />
            <span>Sábado 21/02</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-secondary" />
            <span>16h</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-secondary" />
            <span>Av. Hermes Fontes, 146 - Suíssa</span>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/cadastro")}
          className="bg-secondary text-secondary-foreground font-body font-semibold text-lg px-10 py-4 rounded-full shadow-cta animate-pulse-glow hover:brightness-110 transition-all duration-300"
        >
          Quero viver essa experiência ✨
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

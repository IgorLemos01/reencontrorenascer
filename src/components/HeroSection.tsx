import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Doodles from "./Doodles";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
      {/* Gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-secondary/20 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-secondary/15 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[40%] h-[40%] bg-accent/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <Doodles className="text-primary-foreground" />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground/90 font-body text-base md:text-lg max-w-xl mx-auto mb-6 leading-relaxed"
        >
          O que você vai fazer próximo
            sábado já está marcado:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          className="mb-6"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground tracking-tight leading-none">
            REENCONTRO
          </h1>
          <div className="inline-block bg-primary-foreground px-8 py-2 mt-3 rounded-xl -rotate-1">
            <span className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-accent tracking-tight">
              RENASCER
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-primary-foreground/90 font-body text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Venha viver essa experiência gratuita que vai te aproximar ainda mais
          do Amor de Deus! Porque o que você viveu aqui{" "}
          <strong>não acaba na quarta-feira de cinzas</strong>. 😉
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-primary-foreground font-body text-sm md:text-base mb-12"
        >
          <div className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm px-5 py-2.5 rounded-full">
            <Calendar className="w-5 h-5 text-secondary" />
            <span className="font-semibold">Sábado 21/02</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm px-5 py-2.5 rounded-full">
            <Clock className="w-5 h-5 text-secondary" />
            <span className="font-semibold">16h</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm px-5 py-2.5 rounded-full">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="font-semibold">Av. Hermes Fontes, 146</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <button
            onClick={() => navigate("/cadastro")}
            className="bg-secondary text-secondary-foreground font-display font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-cta animate-pulse-glow hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Quero viver essa experiência 🔥
          </button>
        </motion.div>
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

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Doodles = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" xmlns="http://www.w3.org/2000/svg">
    {/* Sun top-left */}
    <g transform="translate(60, 60)" stroke="white" strokeWidth="3" fill="none" opacity="0.5">
      <circle cx="0" cy="0" r="30" />
      <line x1="-50" y1="0" x2="-38" y2="0" />
      <line x1="38" y1="0" x2="50" y2="0" />
      <line x1="0" y1="-50" x2="0" y2="-38" />
      <line x1="0" y1="38" x2="0" y2="50" />
      <line x1="-35" y1="-35" x2="-27" y2="-27" />
      <line x1="27" y1="-27" x2="35" y2="-35" />
      <line x1="-35" y1="35" x2="-27" y2="27" />
      <line x1="27" y1="27" x2="35" y2="35" />
    </g>
    {/* Squiggly lines */}
    <path d="M 80 200 Q 90 180 100 200 Q 110 220 120 200 Q 130 180 140 200" stroke="white" strokeWidth="2.5" fill="none" opacity="0.35" />
    <path d="M 50 350 Q 60 330 70 350 Q 80 370 90 350 Q 100 330 110 350" stroke="white" strokeWidth="2.5" fill="none" opacity="0.3" />
    {/* Zigzag top */}
    <path d="M 200 40 L 210 60 L 220 40 L 230 60 L 240 40" stroke="white" strokeWidth="2.5" fill="none" opacity="0.4" />
    <path d="M 280 80 L 290 100 L 300 80 L 310 100" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
    {/* Right side squiggles */}
    <path d="M 90% 30% Q 92% 28% 94% 30% Q 96% 32% 98% 30%" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
    <path d="M 85% 60% Q 87% 58% 89% 60% Q 91% 62% 93% 60%" stroke="white" strokeWidth="2.5" fill="none" opacity="0.25" />
    {/* Smiley */}
    <g transform="translate(88%, 45%)" stroke="white" strokeWidth="2.5" fill="none" opacity="0.3">
      <path d="M -10 0 Q 0 12 10 0" strokeLinecap="round" />
    </g>
    {/* Arrows bottom */}
    <g transform="translate(50%, 85%)" stroke="white" strokeWidth="3" fill="none" opacity="0.35">
      <path d="M 0 0 L 12 8 L 0 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 18 0 L 30 8 L 18 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 36 0 L 48 8 L 36 16" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    {/* Stars / sparkles */}
    <g transform="translate(75%, 15%)" stroke="white" strokeWidth="2" fill="none" opacity="0.35">
      <line x1="0" y1="-8" x2="0" y2="8" />
      <line x1="-8" y1="0" x2="8" y2="0" />
      <line x1="-5" y1="-5" x2="5" y2="5" />
      <line x1="5" y1="-5" x2="-5" y2="5" />
    </g>
  </svg>
);

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-secondary/20 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-secondary/15 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[40%] h-[40%] bg-accent/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Doodle decorations */}
      <Doodles />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground/90 font-body text-base md:text-lg max-w-xl mx-auto mb-6 leading-relaxed"
        >
          O que o Vinícius fez no carnaval passado não sabemos, mas o que você
          vai fazer próximo sábado já está marcado:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          className="mb-4"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold text-primary-foreground tracking-tight leading-none">
            REENCONTRO
          </h1>
          <div className="inline-block bg-primary-foreground px-6 py-2 mt-2 rounded-lg">
            <span className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-accent tracking-tight">
              renascer
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-primary-foreground font-body text-sm md:text-base mb-12"
        >
          <div className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm px-4 py-2 rounded-full">
            <Calendar className="w-5 h-5 text-secondary" />
            <span>Sábado 21/02</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="w-5 h-5 text-secondary" />
            <span>16h</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm px-4 py-2 rounded-full">
            <MapPin className="w-5 h-5 text-secondary" />
            <span>Av. Hermes Fontes, 146</span>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/cadastro")}
          className="bg-secondary text-secondary-foreground font-body font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-cta animate-pulse-glow hover:brightness-110 transition-all duration-300"
        >
          Quero viver essa experiência 🔥
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

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Ana Clara",
    photo: testimonial1,
    text: "Foi uma das experiências mais marcantes da minha vida. Senti o amor de Deus de uma forma que nunca tinha sentido antes. Saí de lá transformada!",
  },
  {
    name: "Lucas Mendes",
    photo: testimonial2,
    text: "Eu estava afastado da fé, mas o Reencontro me trouxe de volta. Chorei, sorri e entendi que Deus nunca desistiu de mim.",
  },
  {
    name: "Beatriz Santos",
    photo: testimonial3,
    text: "Cada momento foi especial. A música, as palavras, o acolhimento... Tudo me fez sentir que eu estava no lugar certo, na hora certa.",
  },
];

const TestimonialCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.85;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center text-foreground mb-4"
        >
          Quem já viveu, <span className="text-primary">recomenda</span>
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          className="h-1 bg-secondary rounded-full mx-auto mb-12"
        />

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-card rounded-full p-2 -ml-2 md:-ml-4 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-card rounded-full p-2 -mr-2 md:-mr-4 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="min-w-[300px] md:min-w-[380px] snap-center bg-card rounded-2xl p-8 shadow-card flex flex-col items-center text-center flex-shrink-0"
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary/30 mb-5"
                />
                <p className="text-foreground/80 font-body text-sm md:text-base leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <p className="font-display font-semibold text-accent text-lg">
                  {t.name}
                </p>
              </motion.div>
            ))}

            {/* CTA final card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="min-w-[300px] md:min-w-[380px] snap-center rounded-2xl p-8 flex flex-col items-center justify-center text-center flex-shrink-0 bg-accent"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-6 leading-tight">
                Você pode ser{" "}
                <span className="text-gradient-golden">o próximo.</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/cadastro")}
                className="bg-secondary text-secondary-foreground font-body font-semibold px-8 py-3 rounded-full shadow-cta hover:brightness-110 transition-all"
              >
                Inscreva-se agora
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

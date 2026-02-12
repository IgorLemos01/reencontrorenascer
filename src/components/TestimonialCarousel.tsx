import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Ana Clara",
    photo: testimonial1,
    text: "Foi uma das experiências mais marcantes da minha vida. Senti o amor de Deus de uma forma que nunca tinha sentido antes. Saí de lá transformada! 💛",
  },
  {
    name: "Lucas Mendes",
    photo: testimonial2,
    text: "Eu estava afastado da fé, mas o Reencontro me trouxe de volta. Chorei, sorri e entendi que Deus nunca desistiu de mim. 🙏",
  },
  {
    name: "Beatriz Santos",
    photo: testimonial3,
    text: "Cada momento foi especial. A música, as palavras, o acolhimento... Tudo me fez sentir que eu estava no lugar certo, na hora certa. ✨",
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
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary/10 text-primary font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            💬 Testemunhos reais
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
            Quem já viveu,{" "}
            <span className="text-primary">recomenda</span> 😍
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-md mx-auto">
            Não é a gente que tá falando, é quem já passou por isso!
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-card rounded-full p-3 -ml-3 md:-ml-5 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-card rounded-full p-3 -mr-3 md:-mr-5 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="min-w-[320px] md:min-w-[420px] snap-center flex-shrink-0"
              >
                <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border/50 relative">
                  {/* Quote icon */}
                  <div className="absolute -top-4 right-6 bg-primary rounded-full p-2.5">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>

                  {/* Large testimonial photo */}
                  <div className="flex justify-center mb-6">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary/20 shadow-soft"
                    />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-foreground font-body text-base md:text-lg leading-relaxed mb-6 text-center">
                    "{t.text}"
                  </p>

                  {/* Name */}
                  <div className="text-center">
                    <p className="font-display font-bold text-xl text-accent">
                      {t.name}
                    </p>
                    <div className="w-10 h-1 bg-secondary rounded-full mx-auto mt-2" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA final card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="min-w-[320px] md:min-w-[420px] snap-center flex-shrink-0"
            >
              <div className="bg-gradient-to-br from-primary via-accent to-primary rounded-3xl p-8 md:p-10 shadow-card flex flex-col items-center justify-center text-center h-full relative overflow-hidden">
                {/* Decorative squiggles */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 20 40 Q 30 20 40 40 Q 50 60 60 40" stroke="white" strokeWidth="2" fill="none" opacity="0.2" />
                  <path d="M 80% 70% Q 85% 60% 90% 70%" stroke="white" strokeWidth="2" fill="none" opacity="0.2" />
                </svg>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="text-6xl mb-6"
                >
                  👉
                </motion.div>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3 leading-tight">
                  Você pode ser
                </p>
                <p className="font-display text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
                  o próximo.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate("/cadastro")}
                  className="bg-secondary text-secondary-foreground font-body font-bold text-lg px-8 py-4 rounded-full shadow-cta hover:brightness-110 transition-all"
                >
                  Bora pra lá! 🚀
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Scroll dots hint */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

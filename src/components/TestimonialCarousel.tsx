import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Doodles from "./Doodles";
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

const TOTAL_SLIDES = testimonials.length + 1; // +1 for CTA card

const TestimonialCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const children = scrollRef.current.children;
    if (children[index]) {
      (children[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
    setActiveIndex(index);
  };

  const scroll = (direction: "left" | "right") => {
    const next = direction === "left"
      ? Math.max(0, activeIndex - 1)
      : Math.min(TOTAL_SLIDES - 1, activeIndex + 1);
    scrollToIndex(next);
  };

  // Track scroll position to update dots
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const childWidth = (el.children[0] as HTMLElement)?.offsetWidth || 1;
      const gap = 32; // gap-8 = 32px
      const index = Math.round(scrollLeft / (childWidth + gap));
      setActiveIndex(Math.min(index, TOTAL_SLIDES - 1));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Brand identity: subtle doodles in background */}
      <Doodles className="text-primary/10" />

      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-10 w-48 h-48 bg-accent/8 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/15 text-primary font-display font-bold text-sm px-5 py-2 rounded-full mb-5"
          >
            💬 Testemunhos reais
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
            Quem já viveu,{" "}
            <span className="text-primary">recomenda</span> 😍
          </h2>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-lg mx-auto">
            Não é a gente que tá falando, é quem já passou por isso!
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card shadow-card rounded-full p-3 -ml-2 md:-ml-6 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card shadow-card rounded-full p-3 -mr-2 md:-mr-6 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 active:scale-95"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 px-6 scrollbar-hide"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="min-w-[85vw] sm:min-w-[400px] md:min-w-[450px] snap-center flex-shrink-0"
              >
                <div className="bg-card rounded-3xl shadow-card border border-border/50 overflow-hidden relative group hover:shadow-soft transition-shadow duration-300">
                  {/* Green accent bar top */}
                  <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />

                  {/* Quote badge */}
                  <div className="absolute top-6 right-6 bg-primary rounded-2xl p-3 rotate-3 group-hover:rotate-6 transition-transform">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>

                  <div className="p-8 md:p-10">
                    {/* Large photo */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <img
                          src={t.photo}
                          alt={t.name}
                          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-primary/25 shadow-soft"
                        />
                        {/* Decorative ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/40 -m-2 animate-[spin_20s_linear_infinite]" />
                      </div>
                    </div>

                    {/* Testimonial text */}
                    <p className="text-foreground font-body text-lg md:text-xl leading-relaxed mb-8 text-center">
                      "{t.text}"
                    </p>

                    {/* Name with decoration */}
                    <div className="text-center">
                      <p className="font-display font-extrabold text-2xl text-accent">
                        {t.name}
                      </p>
                      <div className="flex items-center justify-center gap-1.5 mt-3">
                        <div className="w-3 h-3 bg-secondary rounded-full" />
                        <div className="w-8 h-1.5 bg-primary rounded-full" />
                        <div className="w-3 h-3 bg-secondary rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA final card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="min-w-[85vw] sm:min-w-[400px] md:min-w-[450px] snap-center flex-shrink-0"
            >
              <div className="relative bg-gradient-to-br from-primary via-accent to-primary rounded-3xl shadow-card overflow-hidden h-full">
                {/* Doodles overlay */}
                <Doodles className="text-primary-foreground" />
                {/* Gradient blobs */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/15 rounded-full blur-2xl" />

                <div className="relative z-10 p-10 md:p-12 flex flex-col items-center justify-center text-center h-full min-h-[500px]">
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                    className="text-7xl mb-8"
                  >
                    🫵
                  </motion.div>
                  <p className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2 leading-tight">
                    Você pode ser
                  </p>
                  <p className="font-display text-5xl md:text-6xl font-extrabold text-secondary mb-10 leading-tight">
                    o próximo!
                  </p>
                  <button
                    onClick={() => navigate("/cadastro")}
                    className="bg-secondary text-secondary-foreground font-display font-bold text-xl px-10 py-4 rounded-full shadow-cta hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Bora pra lá! 🚀
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Active dots */}
          <div className="flex justify-center gap-2.5 mt-4">
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 h-3 bg-primary"
                    : "w-3 h-3 bg-border hover:bg-primary/40"
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

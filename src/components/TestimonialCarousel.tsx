import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Doodles from "./Doodles";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Vinícius Pereira",
    photo: testimonial1,
    text: "No renascer de 2007 eu descobri que Deusera meu Pai e me amava com um Amor que supera tudo. No grupo de oração eu fui aprofundando esse amor e cultivando a cada encontro a certeza de que ele é para sempre!",
    highlight: "Experiência transformadora",
  },
  {
    name: "Eloiza Amaral",
    photo: testimonial2,
    text: "Eu fui alcançada pelo Renascer em 2017 e valeu apena permanecer. Hoje sou Consagrada a Deus na Comunidade de Vida Shalom.",
    highlight: "Um recomeço de fé",
  },
  {
    name: "Gladson do Nascimento",
    photo: testimonial3,
    text: "No ano de 99 ou minha mãe participou do Renascer e eu do Renacezinho, onde uma semente foi lançada, 10 anos depois minha mãe me levou para o Acamps onde aquela semente brotou",
    highlight: "Acolhimento genuíno",
  },
];

const TOTAL_SLIDES = testimonials.length + 1;

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
    const next =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(TOTAL_SLIDES - 1, activeIndex + 1);
    scrollToIndex(next);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const childWidth = (el.children[0] as HTMLElement)?.offsetWidth || 1;
      const gap = 32;
      const index = Math.round(scrollLeft / (childWidth + gap));
      setActiveIndex(Math.min(index, TOTAL_SLIDES - 1));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      <Doodles className="text-primary/8" />

      {/* Large ambient blobs for depth */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary/12 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-[10%] w-[300px] h-[300px] bg-accent/8 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header — big and bold */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="text-6xl md:text-7xl mb-6"
          >
            💬
          </motion.div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-tight">
            Vidas que foram{" "}
            <span className="relative inline-block">
              <span className="text-primary">transformadas</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-secondary rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-muted-foreground font-body text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Não somos nós que estamos falando — são pessoas reais que viveram
            algo <strong className="text-foreground">inesquecível</strong>.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Nav buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card/90 backdrop-blur-sm shadow-card rounded-full p-4 -ml-3 md:-ml-7 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 active:scale-95 border border-border/50"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card/90 backdrop-blur-sm shadow-card rounded-full p-4 -mr-3 md:-mr-7 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 active:scale-95 border border-border/50"
            aria-label="Próximo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 px-8 scrollbar-hide"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, type: "spring" }}
                className="min-w-[88vw] sm:min-w-[420px] md:min-w-[500px] snap-center flex-shrink-0"
              >
                <div className="bg-card rounded-[2rem] shadow-card border border-border/40 overflow-hidden relative group hover:shadow-soft hover:-translate-y-2 transition-all duration-500">
                  {/* Gradient top bar */}
                  <div className="h-2.5 bg-gradient-to-r from-primary via-secondary to-accent" />

                  {/* Floating quote */}
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="absolute top-8 right-8 bg-primary rounded-2xl p-3.5 rotate-3 shadow-soft"
                  >
                    <Quote className="w-6 h-6 text-primary-foreground" />
                  </motion.div>

                  <div className="p-10 md:p-12">
                    {/* Photo */}
                    <div className="flex justify-center mb-10">
                      <div className="relative">
                        <img
                          src={t.photo}
                          alt={`Testemunho de ${t.name}`}
                          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-soft"
                        />
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/40 -m-3 animate-[spin_25s_linear_infinite]" />
                        {/* Highlight badge */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground font-display font-bold text-xs px-4 py-1.5 rounded-full shadow-cta whitespace-nowrap">
                          {t.highlight}
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, si) => (
                        <Star
                          key={si}
                          className="w-5 h-5 fill-secondary text-secondary"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-foreground font-body text-lg md:text-xl leading-relaxed mb-10 text-center italic">
                      "{t.text}"
                    </p>

                    {/* Name */}
                    <div className="text-center">
                      <p className="font-display font-extrabold text-2xl md:text-3xl text-accent">
                        {t.name}
                      </p>
                      <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="w-3 h-3 bg-secondary rounded-full" />
                        <div className="w-10 h-1.5 bg-primary rounded-full" />
                        <div className="w-3 h-3 bg-secondary rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="min-w-[88vw] sm:min-w-[420px] md:min-w-[500px] snap-center flex-shrink-0"
            >
              <div className="relative bg-gradient-to-br from-primary via-accent to-primary rounded-[2rem] shadow-card overflow-hidden h-full">
                <Doodles className="text-primary-foreground" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/15 rounded-full blur-3xl" />

                <div className="relative z-10 p-12 md:p-16 flex flex-col items-center justify-center text-center h-full min-h-[550px]">
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                    className="text-8xl mb-10"
                  >
                    🫵
                  </motion.div>
                  <p className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-3 leading-tight">
                    Você pode ser
                  </p>
                  <p className="font-display text-6xl md:text-7xl font-extrabold text-secondary mb-12 leading-tight">
                    o próximo!
                  </p>
                  <button
                    onClick={() => navigate("/cadastro")}
                    className="bg-secondary text-secondary-foreground font-display font-bold text-xl px-12 py-5 rounded-full shadow-cta hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Bora pra lá! 🚀
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-10 h-3.5 bg-primary"
                    : "w-3.5 h-3.5 bg-border hover:bg-primary/40"
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

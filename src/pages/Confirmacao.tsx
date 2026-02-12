import { motion } from "framer-motion";
import { PartyPopper, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Doodles from "@/components/Doodles";

const Confirmacao = () => {
  const navigate = useNavigate();

  // TODO: substituir pelo link real do grupo
  const whatsappLink = "https://chat.whatsapp.com/SEU-LINK-AQUI";

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center px-4 py-12">
      <Doodles className="text-primary/10" />
      <div className="absolute top-0 right-0 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative z-10 w-full max-w-md bg-card rounded-3xl shadow-card p-10 text-center border border-border/50 overflow-hidden"
      >
        {/* Green bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary" />

        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="text-6xl mb-6"
        >
          🎉
        </motion.div>

        <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3">
          Inscrição realizada!
        </h1>
        <p className="text-muted-foreground font-body text-base mb-8 leading-relaxed">
          Estamos muito felizes em ter você no{" "}
          <span className="text-primary font-bold">Reencontro do Renascer</span>! 🥳
        </p>

        <p className="text-foreground font-body text-sm font-semibold mb-4">
          📲 Entre no grupo do WhatsApp pra ficar por dentro de tudo:
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-display font-bold text-lg px-8 py-4 rounded-full shadow-soft hover:brightness-110 hover:scale-105 active:scale-95 transition-all w-full justify-center"
        >
          <MessageCircle className="w-6 h-6" />
          Entrar no Grupo do WhatsApp
        </a>

        <button
          onClick={() => navigate("/")}
          className="mt-6 text-muted-foreground hover:text-foreground font-body text-sm transition-colors underline underline-offset-4"
        >
          Voltar ao início
        </button>
      </motion.div>
    </main>
  );
};

export default Confirmacao;

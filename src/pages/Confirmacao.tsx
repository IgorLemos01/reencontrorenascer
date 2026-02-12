import { motion } from "framer-motion";
import { PartyPopper, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Confirmacao = () => {
  const navigate = useNavigate();

  // TODO: substituir pelo link real do grupo
  const whatsappLink = "https://chat.whatsapp.com/SEU-LINK-AQUI";

  return (
    <main className="min-h-screen bg-muted/30 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="w-full max-w-md bg-card rounded-2xl shadow-card p-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <PartyPopper className="w-10 h-10 text-primary" />
        </motion.div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Inscrição realizada!
        </h1>
        <p className="text-muted-foreground font-body text-base mb-8 leading-relaxed">
          Sua inscrição foi realizada com sucesso! 🎉 Estamos muito felizes em
          ter você no <span className="text-primary font-semibold">Reencontro do Renascer</span>.
        </p>

        <p className="text-foreground font-body text-sm font-medium mb-4">
          Entre no nosso grupo do WhatsApp para ficar por dentro de tudo:
        </p>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-body font-semibold text-lg px-8 py-4 rounded-full shadow-soft hover:brightness-110 transition-all w-full justify-center"
        >
          <MessageCircle className="w-6 h-6" />
          Entrar no Grupo do WhatsApp
        </motion.a>

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

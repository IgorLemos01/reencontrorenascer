import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Doodles from "@/components/Doodles";

const ZAPIER_WEBHOOK_URL = "";

const cadastroSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  idade: z.string().trim().min(1, "Idade é obrigatória"),
  telefone: z.string().trim().min(1, "Telefone é obrigatório").max(20),
  bairro: z.string().trim().min(1, "Bairro é obrigatório").max(100),
  comoChegou: z.string().max(500).optional(),
});

type FormData = z.infer<typeof cadastroSchema>;

const Cadastro = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    nome: "",
    idade: "",
    telefone: "",
    bairro: "",
    comoChegou: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = cadastroSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (!ZAPIER_WEBHOOK_URL) {
      // No webhook configured, just navigate
      navigate("/confirmacao");
      return;
    }

    setIsLoading(true);
    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          ...result.data,
          timestamp: new Date().toISOString(),
        }),
      });
      navigate("/confirmacao");
    } catch (error) {
      console.error("Error sending to webhook:", error);
      toast({
        title: "Erro ao enviar",
        description:
          "Não foi possível registrar sua inscrição. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-background border-2 border-border rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all";

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center px-4 py-12">
      <Doodles className="text-primary/10" />
      <div className="absolute top-0 left-0 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg bg-card rounded-3xl shadow-card p-8 md:p-10 border border-border/50"
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-t-3xl" />

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground font-body text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        <div className="text-center mb-8">
          <span className="text-4xl mb-2 block">📝</span>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            Faça sua inscrição
          </h1>
          <p className="text-muted-foreground font-body">
            Garanta sua presença no{" "}
            <span className="text-primary font-bold">
              Reencontro do Renascer
            </span>
            ! 🎉
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            {
              name: "nome",
              label: "Nome",
              type: "text",
              placeholder: "Seu nome completo",
              emoji: "👤",
            },
            {
              name: "idade",
              label: "Idade",
              type: "number",
              placeholder: "Sua idade",
              emoji: "🎂",
            },
            {
              name: "telefone",
              label: "Telefone",
              type: "tel",
              placeholder: "(99) 99999-9999",
              emoji: "📱",
            },
            {
              name: "bairro",
              label: "Bairro",
              type: "text",
              placeholder: "Seu bairro",
              emoji: "📍",
            },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                {field.emoji} {field.label}{" "}
                <span className="text-destructive">*</span>
              </label>
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.name as keyof FormData] ?? ""}
                onChange={handleChange}
                className={inputClasses}
              />
              {errors[field.name] && (
                <p className="text-destructive text-xs mt-1 font-body font-semibold">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <div>
            <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
              💬 Como você chegou ao Renascer?
            </label>
            <textarea
              name="comoChegou"
              placeholder="Conte um pouco..."
              value={form.comoChegou ?? ""}
              onChange={handleChange}
              rows={3}
              className={inputClasses + " resize-none"}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground font-display font-bold text-lg py-4 rounded-full shadow-soft hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all mt-2 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              "Confirmar inscrição ✅"
            )}
          </button>
        </form>
      </motion.div>
    </main>
  );
};

export default Cadastro;

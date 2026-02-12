import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ArrowLeft } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
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
    navigate("/confirmacao");
  };

  const inputClasses =
    "w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";

  return (
    <main className="min-h-screen bg-muted/30 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-card rounded-2xl shadow-card p-8 md:p-10"
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground font-body text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Faça sua inscrição
        </h1>
        <p className="text-muted-foreground font-body mb-8">
          Preencha os campos abaixo e garanta sua presença no{" "}
          <span className="text-primary font-semibold">Reencontro do Renascer</span>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { name: "nome", label: "Nome", type: "text", placeholder: "Seu nome completo" },
            { name: "idade", label: "Idade", type: "number", placeholder: "Sua idade" },
            { name: "telefone", label: "Telefone", type: "tel", placeholder: "(99) 99999-9999" },
            { name: "bairro", label: "Bairro", type: "text", placeholder: "Seu bairro" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-body text-sm font-medium text-foreground mb-1.5">
                {field.label} <span className="text-destructive">*</span>
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
                <p className="text-destructive text-xs mt-1 font-body">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-1.5">
              Como você chegou ao Renascer?
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

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground font-body font-semibold text-lg py-4 rounded-full shadow-soft hover:brightness-110 transition-all mt-2"
          >
            Confirmar inscrição ✅
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
};

export default Cadastro;

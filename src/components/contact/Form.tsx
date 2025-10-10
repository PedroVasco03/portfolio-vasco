"use client";
import { useState} from "react";
import Button from "../UI/Button";
import emailjs from "emailjs-com";



const commonClass =
  "input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-[#5CF28E] placeholder:text-[15px] md:placeholder:text-lg focus:border-[#5CF28E] border-[#E6E8EB] w-full rounded-none px-0";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("✅ Mensagem enviada com sucesso!");
        // 🔹 Limpa visualmente os campos
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // 🔹 Faz a mensagem sumir suavemente após 2s
        setTimeout(() => {
          setStatus("");
        }, 2000);
      })
      .catch(() => {
        setStatus("❌ Erro ao enviar mensagem.");
      });
  };

  return (
    <div>
      <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal mb-8 text-gray-400">
        Estou sempre aberto a discutir novos projetos e ideias criativas. 
        Deixe sua mensagem vamos construir algo incrível juntos.
      </p>
      <div className="mx-2">
        <form
          className="flex flex-col gap-4 mt-4 overflow-hidden"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            type="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className={commonClass}
            required
            name="email"
          />
  
          <div className="flex max-xs:flex-col max-xs:gap-4">
            <input
              type="text"
              placeholder="Nome*"
              value={formData.name}
              onChange={handleChange}
              className={`${commonClass} xs:w-[50%] me-5`}
              required
              name="name"
            />
            <input
              type="text"
              placeholder="Assunto*"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={commonClass}
              required
              
            />
          </div>
          <textarea
            placeholder="Mensagem*"
            value={formData.message}
            onChange={handleChange}
            className={commonClass}
            required
            name="message"
          />

          <Button type="submit">Enviar</Button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Form;

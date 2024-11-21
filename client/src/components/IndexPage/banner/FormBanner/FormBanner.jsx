import "./FormBanner.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FormBanner() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/signin", { state: { nome, email } });
  };

  return (
    <div className="form_banner_container">
      <form>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          id="name_banner"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          id="email_banner"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Marcar</button>
      </form>
    </div>
  );
}

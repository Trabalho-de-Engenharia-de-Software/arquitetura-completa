import './FormSignIn.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function FormSignIn() {
  const location = useLocation();
  const { nome, email } = location.state || {};

  const [etapa, setEtapa] = useState(1);
  const [formData, setFormData] = useState({
    nome: nome || '',
    sobrenome: '',
    email: email || '',
    telefone: '',
    data_nascimento: '',
  });

  useEffect(() => {
    if (nome) {
      setFormData((prevData) => ({ ...prevData, nome }));
    }
    if (email) {
      setFormData((prevData) => ({ ...prevData, email }));
    }
  }, [nome, email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    alert('Inscrição completa!');
  };

  const handleNext = () => {
    setEtapa(etapa + 1);
  };

  const handlePrev = () => {
    setEtapa(etapa - 1);
  };

  return (
    <div className='SignIn_container'>
      <h2>Se Inscreva:</h2>
      {etapa === 1 && (
        <div className='Sign_In_Form_Container'>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <input
            type="text"
            name="sobrenome"
            placeholder="Sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
           <div className='Sign_In_buttons_container'>
          <button onClick={handleNext} className="Next_button">Próximo</button>
          </div>
        </div>
      )}
      {etapa === 2 && (
         <div className='Sign_In_Form_Container'>
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
          <input
            type="date"
            name="data_nascimento"
            placeholder="Data de Nascimento"
            value={formData.data_nascimento}
            onChange={handleChange}
          />
          <div className='Sign_In_buttons_container'>
          <button onClick={handlePrev} className='Prev_button'>Anterior</button>
          <button onClick={handleNext} className="Next_button">Próximo</button>
          </div>
        </div>
      )}
      {etapa === 3 && (
        <div className='Sign_In_Form_Container'>
          <h2>Revisar Dados</h2>
          <p>Nome: {formData.nome}</p>
          <p>Sobrenome: {formData.sobrenome}</p>
          <p>E-mail: {formData.email}</p>
          <p>Telefone: {formData.telefone}</p>
          <p>Data de Nascimento: {formData.data_nascimento}</p>
          <div className='Sign_In_buttons_container'>
          <button onClick={handlePrev} className='Prev_button'>Anterior</button>
          <button onClick={handleSubmit} className="Next_button">Enviar</button>
          </div>
        </div>
      )}
       <p className='Option2Login'>Já tem Cadastro? <a href="/Login">Entre</a></p>
    </div>
  );
}
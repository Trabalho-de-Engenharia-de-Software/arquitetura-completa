import "./introduction.css";

export default function Introduction() {
  return (
    <div className="introduction_container">
      <div className="image_gustavo"><img src="./img/Logo.png" alt="Logo da barbearia" /></div>
      <div className="text_container">
        <p>
          Sou um Barbeiro apaixonado por transformar o visual dos clientes. Desde 2019,
          meu objetivo é proporcionar um atendimento de qualidade em cada corte.
          Na minha barbearia, você encontrará um ambiente acolhedor e
          descontraído, ideal para relaxar enquanto cuida do seu estilo. Com uma
          variedade de serviços, desde cortes clássicos até os mais modernos,
          sempre com atenção aos detalhes e utilizando produtos de alta
          qualidade. Agende seu horário e venha experimentar um atendimento
          diferenciado. Estou aqui para ajudar você a se sentir confiante e
          renovado!
        </p>
      </div>
    </div>
  );
}

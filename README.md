✂️ CortaAi

O CortaAi é um sistema desenvolvido para barbearias, com o objetivo de automatizar o agendamento de serviços e melhorar a gestão de clientes.

📅 O agendamento manual pode gerar desorganização e confusão, impactando a eficiência da barbearia. Além disso, a falta de visibilidade online dificulta a divulgação dos serviços e a atração de novos clientes.

🚀 O CortaAi surge como uma solução para transformar esses desafios em oportunidades, trazendo organização, eficiência e visibilidade para o negócio.

🔥 Funcionalidades Principais

📅 Agendamento

✅ Clientes podem agendar serviços escolhendo entre os horários disponíveis.
✅ Cada agendamento tem duração fixa de 1 hora.
✅ O sistema bloqueia horários fora do expediente (10h às 18h) e verifica a disponibilidade em tempo real.

💈 Gestão de Barbeiros

📝 Cadastro de barbeiros com nome, telefone, e-mail, especialidade e senha.
🔍 Listagem de serviços oferecidos por cada barbeiro.
👀 Barbeiros podem visualizar seus agendamentos e horários disponíveis.

👤 Gestão de Clientes

📌 Cadastro de clientes com nome, e-mail, telefone e senha.
🗓️ Clientes podem visualizar e gerenciar seus agendamentos.

✂️ Serviços

📝 Cadastro de serviços oferecidos pela barbearia, com descrição e preço.
🔗 Cada serviço está associado a um barbeiro.

⏳ Disponibilidade de Horários

📅 O sistema exibe horários disponíveis com base nos agendamentos existentes.

📋 Consulta de Agendamentos

👥 Clientes podem consultar seus agendamentos.
✂️ Barbeiros podem visualizar todos os agendamentos do dia.

🛠 Tecnologias Utilizadas

🎨 Frontend
	•	HTML, CSS, JavaScript
	•	React (com bibliotecas: Axios, VLibras, React-Calendar)

⚙️ Backend
	•	📝 Linguagem: Python
	•	🚀 Framework: Flask
	•	💾 Banco de Dados: MySQL (gerenciado pelo HeidiSQL)
	•	🔄 ORM: SQLAlchemy (para mapeamento objeto-relacional)

🛠 Ferramentas de Desenvolvimento
	•	📌 Versionamento: Git
	•	🔎 Testes: Insomnia
	•	☁️ Servidor: AWS / Docker
	•	📑 Documentação: Swagger (tentativa de implementação)

⚡ Requisitos de Sistema
	•	🐍 Python: Versão 3.7 ou superior
	•	📦 Dependências:

Flask==2.3.2
Flask-CORS==4.0.0
SQLAlchemy==2.0.20
Werkzeug==2.3.6

🏗 Estrutura do Projeto

🎯 Backend

📂 Controllers
	•	📌 agendamento_controller.py – Lógica de criação e gerenciamento de agendamentos.
	•	📌 barber_controller.py – Lógica de gerenciamento de barbeiros.
	•	📌 cliente_controller.py – Lógica de gerenciamento de clientes.
	•	📌 servico_controller.py – Lógica de gerenciamento de serviços.

📂 Models
	•	📌 agendamento_model.py – Modelo de dados para agendamentos.
	•	📌 barber_model.py – Modelo de dados para barbeiros.
	•	📌 cliente_model.py – Modelo de dados para clientes.
	•	📌 servico_model.py – Modelo de dados para serviços.

📂 Database
	•	📌 database.py – Configuração do banco de dados.

📂 Routes
	•	📌 agendamento_routes.py – Rotas relacionadas a agendamentos.
	•	📌 barber_routes.py – Rotas relacionadas a barbeiros.
	•	📌 cliente_routes.py – Rotas relacionadas a clientes.
	•	📌 servico_routes.py – Rotas relacionadas a serviços.

📂 Arquivos Principais
	•	🚀 app.py – Ponto de entrada da aplicação Flask.
	•	♻️ extensions.py – Evita redundância de importação do banco de dados.
	•	📜 requirements.txt – Lista de dependências do projeto.

🚀 Como Executar o Projeto

1️⃣ Clone este repositório

git clone https://github.com/seu-usuario/cortaai.git
cd cortaai

2️⃣ Crie um ambiente virtual e instale as dependências

python -m venv venv  
source venv/bin/activate  # Linux/macOS  
venv\Scripts\activate  # Windows  
pip install -r requirements.txt  

3️⃣ Configure o Banco de Dados
	•	Edite database.py com suas credenciais do MySQL.
	•	Rode as migrações para criar as tabelas:

python database.py

4️⃣ Execute o servidor

python app.py

O servidor rodará em http://localhost:5000 🚀

💡 Contribuições

Se quiser contribuir para o projeto, fique à vontade! Basta abrir um pull request ou relatar problemas na aba de issues.

📩 Dúvidas? Entre em contato!


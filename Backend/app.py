from flask import Flask
from flask_cors import CORS
from models.database import db
from routes.services import services
from routes.team import team
from routes.contact import contact

app = Flask(__name__)
CORS(app)

# Configuração do banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///barbearia.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicialização do banco de dados
db.init_app(app)

# Registro das rotas
app.register_blueprint(services)
app.register_blueprint(team)
app.register_blueprint(contact)

@app.route('/')
def home():
    return "Backend da Barbearia funcionando!"

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Cria as tabelas do banco, se ainda não existirem
    app.run(debug=True)

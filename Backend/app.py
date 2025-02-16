from flask import Flask, jsonify
from flask_cors import CORS
from extensions import db  # Import db from extensions
from routes import barber_routes, cliente_routes, servico_routes, agendamento_routes
from flask_swagger_ui import get_swaggerui_blueprint

# Initialize the Flask app
app = Flask(__name__)
CORS(app, origins=["http://ec2-44-192-51-109.compute-1.amazonaws.com:3000"], methods=["GET", "POST", "PUT", "DELETE"], supports_credentials=True)  # Enable CORS for all routes

# Database configuration for AWS RDS
app.config['SQLALCHEMY_DATABASE_URI'] = (
    'mysql+mysqlconnector://admin:Trab?eng4@db-barber.culumbanz1fj.us-east-1.rds.amazonaws.com:3306/Barbearia'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable modification tracking

# Initialize the database
db.init_app(app)

# Configuração do Swagger UI
SWAGGER_URL = '/api/docs'  # URL para acessar a interface do Swagger UI
API_URL = '/static/swagger.json'  # URL do arquivo JSON de especificação da API

# Cria o blueprint do Swagger UI
swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "Barbearia API"
    }
)

# Registra o blueprint no Flask
app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

# Register routes
app.register_blueprint(barber_routes.barber_bp, url_prefix='/api/barber')
app.register_blueprint(cliente_routes.cliente_bp, url_prefix='/api/cliente')
app.register_blueprint(servico_routes.servico_bp, url_prefix='/api/servico')
app.register_blueprint(agendamento_routes.agendamento_bp, url_prefix='/api/agendamento')

# Test route to check if the app is running
@app.route('/')
def home():
    return jsonify({"message": "Bem-vindo à API do barbeiro!"})

# Test route to check the database connection
@app.route('/test-db', methods=['GET'])
def test_db():
    try:
        # Execute a simple query
        result = db.engine.execute('SELECT * FROM Cliente')
        data = [dict(row) for row in result]

        # Return the results as JSON
        return jsonify({"message": "Database connection successful!", "data": data})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Rota para servir o arquivo JSON do Swagger
@app.route('/static/swagger.json')
def swagger():
    return jsonify({
        "openapi": "3.0.0",
        "info": {
            "title": "Barbearia API",
            "version": "1.0.0",
            "description": "API para gerenciamento de uma barbearia"
        },
        "paths": {
            # Rotas para Barber
            "/api/barber/registro": {
                "post": {
                    "summary": "Criar um novo barbeiro",
                    "description": "Cadastra um novo barbeiro no sistema",
                    "requestBody": {
                        "required": True,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "nome": {"type": "string"},
                                        "telefone": {"type": "string"},
                                        "email": {"type": "string"},
                                        "senha": {"type": "string"},
                                        "especialidade": {"type": "string"}
                                    },
                                    "required": ["nome", "telefone", "email", "senha", "especialidade"]
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {"description": "Barbeiro criado com sucesso"},
                        "400": {"description": "Erro ao criar barbeiro"}
                    }
                }
            },
            "/api/barber/lista": {
                "get": {
                    "summary": "Listar todos os barbeiros",
                    "description": "Retorna uma lista de todos os barbeiros cadastrados",
                    "responses": {
                        "200": {"description": "Lista de barbeiros retornada com sucesso"}
                    }
                }
            },
            "/api/barber/<int:barber_id>": {
                "get": {
                    "summary": "Obter detalhes de um barbeiro",
                    "description": "Retorna os detalhes de um barbeiro específico",
                    "parameters": [
                        {
                            "name": "barber_id",
                            "in": "path",
                            "required": True,
                            "schema": {"type": "integer"}
                        }
                    ],
                    "responses": {
                        "200": {"description": "Detalhes do barbeiro retornados com sucesso"},
                        "404": {"description": "Barbeiro não encontrado"}
                    }
                }
            },
            "/api/barber/login": {
                "post": {
                    "summary": "Login de um barbeiro",
                    "description": "Realiza o login de um barbeiro",
                    "requestBody": {
                        "required": True,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "email": {"type": "string"},
                                        "senha": {"type": "string"}
                                    },
                                    "required": ["email", "senha"]
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {"description": "Login bem-sucedido"},
                        "401": {"description": "Email ou senha incorretos"}
                    }
                }
            },

            # Rotas para Cliente
            "/api/cliente/registro": {
                "post": {
                    "summary": "Criar um novo cliente",
                    "description": "Cadastra um novo cliente no sistema",
                    "requestBody": {
                        "required": True,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "nome": {"type": "string"},
                                        "email": {"type": "string"},
                                        "telefone": {"type": "string"},
                                        "senha": {"type": "string"}
                                    },
                                    "required": ["nome", "email", "telefone", "senha"]
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {"description": "Cliente criado com sucesso"},
                        "400": {"description": "Erro ao criar cliente"}
                    }
                }
            },
            "/api/cliente/clientes": {
                "get": {
                    "summary": "Listar todos os clientes",
                    "description": "Retorna uma lista de todos os clientes cadastrados",
                    "responses": {
                        "200": {"description": "Lista de clientes retornada com sucesso"}
                    }
                }
            },
            "/api/cliente/<int:client_id>": {
                "get": {
                    "summary": "Obter detalhes de um cliente",
                    "description": "Retorna os detalhes de um cliente específico",
                    "parameters": [
                        {
                            "name": "client_id",
                            "in": "path",
                            "required": True,
                            "schema": {"type": "integer"}
                        }
                    ],
                    "responses": {
                        "200": {"description": "Detalhes do cliente retornados com sucesso"},
                        "404": {"description": "Cliente não encontrado"}
                    }
                }
            },
            "/api/cliente/login": {
                "post": {
                    "summary": "Login de um cliente",
                    "description": "Realiza o login de um cliente",
                    "requestBody": {
                        "required": True,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "email": {"type": "string"},
                                        "senha": {"type": "string"}
                                    },
                                    "required": ["email", "senha"]
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {"description": "Login bem-sucedido"},
                        "401": {"description": "Email ou senha incorretos"}
                    }
                }
            },

            # Rotas para Servico
            "/api/servico/registro": {
                "post": {
                    "summary": "Criar um novo serviço",
                    "description": "Cadastra um novo serviço no sistema",
                    "requestBody": {
                        "required": True,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "nome": {"type": "string"},
                                        "preco": {"type": "number"}
                                    },
                                    "required": ["nome", "preco"]
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {"description": "Serviço criado com sucesso"},
                        "400": {"description": "Erro ao criar serviço"}
                    }
                }
            },
            "/api/servico/consulta": {
                "get": {
                    "summary": "Listar todos os serviços",
                    "description": "Retorna uma lista de todos os serviços cadastrados",
                    "responses": {
                        "200": {"description": "Lista de serviços retornada com sucesso"}
                    }
                }
            },
            "/api/servico/consulta/<int:servico_id>": {
                "get": {
                    "summary": "Obter detalhes de um serviço",
                    "description": "Retorna os detalhes de um serviço específico",
                    "parameters": [
                        {
                            "name": "servico_id",
                            "in": "path",
                            "required": True,
                            "schema": {"type": "integer"}
                        }
                    ],
                    "responses": {
                        "200": {"description": "Detalhes do serviço retornados com sucesso"},
                        "404": {"description": "Serviço não encontrado"}
                    }
                }
            },

            # Rotas para Agendamento
            "/api/agendamento/agendar": {
                "post": {
                    "summary": "Criar um novo agendamento",
                    "description": "Cria um novo agendamento para um cliente",
                    "requestBody": {
                        "required": True,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "cliente_id": {"type": "integer"},
                                        "id_servico": {"type": "integer"},
                                        "date": {"type": "string", "format": "date"},
                                        "time": {"type": "string", "format": "time"}
                                    },
                                    "required": ["cliente_id", "id_servico", "date", "time"]
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {"description": "Agendamento criado com sucesso"},
                        "400": {"description": "Erro ao criar agendamento"}
                    }
                }
            },
            "/api/agendamento/cliente/<int:cliente_id>": {
                "get": {
                    "summary": "Listar agendamentos de um cliente",
                    "description": "Retorna todos os agendamentos de um cliente específico",
                    "parameters": [
                        {
                            "name": "cliente_id",
                            "in": "path",
                            "required": True,
                            "schema": {"type": "integer"}
                        }
                    ],
                    "responses": {
                        "200": {"description": "Lista de agendamentos retornada com sucesso"},
                        "404": {"description": "Cliente não encontrado"}
                    }
                }
            },
            "/api/agendamento/barbeiro/<int:barber_id>": {
                "get": {
                    "summary": "Listar agendamentos de um barbeiro",
                    "description": "Retorna todos os agendamentos de um barbeiro específico",
                    "parameters": [
                        {
                            "name": "barber_id",
                            "in": "path",
                            "required": True,
                            "schema": {"type": "integer"}
                        }
                    ],
                    "responses": {
                        "200": {"description": "Lista de agendamentos retornada com sucesso"},
                        "404": {"description": "Barbeiro não encontrado"}
                    }
                }
            },
            "/api/agendamento/disponiveis": {
                "get": {
                    "summary": "Listar horários disponíveis",
                    "description": "Retorna os horários disponíveis para um barbeiro em uma data específica",
                    "parameters": [
                        {
                            "name": "barber_id",
                            "in": "query",
                            "required": True,
                            "schema": {"type": "integer"}
                        },
                        {
                            "name": "date",
                            "in": "query",
                            "required": True,
                            "schema": {"type": "string", "format": "date"}
                        }
                    ],
                    "responses": {
                        "200": {"description": "Lista de horários disponíveis retornada com sucesso"},
                        "400": {"description": "Parâmetros inválidos"}
                    }
                }
            },
            "/api/agendamento/consulta": {
                "get": {
                    "summary": "Listar todos os agendamentos",
                    "description": "Retorna todos os agendamentos cadastrados",
                    "responses": {
                        "200": {"description": "Lista de agendamentos retornada com sucesso"}
                    }
                }
            },
            "/api/agendamento/<int:agendamento_id>": {
                "get": {
                    "summary": "Obter detalhes de um agendamento",
                    "description": "Retorna os detalhes de um agendamento específico",
                    "parameters": [
                        {
                            "name": "agendamento_id",
                            "in": "path",
                            "required": True,
                            "schema": {"type": "integer"}
                        }
                    ],
                    "responses": {
                        "200": {"description": "Detalhes do agendamento retornados com sucesso"},
                        "404": {"description": "Agendamento não encontrado"}
                    }
                }
            }
        }
    })

if __name__ == '__main__':
    app.run(debug=True)
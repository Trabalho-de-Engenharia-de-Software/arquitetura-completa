from flask import Blueprint, jsonify
from controllers.cliente_controller import ClientController

# Define o Blueprint para as rotas de cliente
cliente_bp = Blueprint('client', __name__)

@cliente_bp.route('/registro', methods=['POST'])
def create_client():
    """
    Cria um novo cliente.
    """
    return ClientController.create_client()

@cliente_bp.route('/clientes', methods=['GET'])
def get_all_clients():
    """
    Retorna todos os clientes.
    """
    return ClientController.get_all_clients()

@cliente_bp.route('/<int:client_id>', methods=['GET'])
def get_client_by_id(client_id):
    """
    Retorna um cliente específico pelo ID.
    """
    return ClientController.get_client_by_id(client_id)

@cliente_bp.route('/login', methods=['POST'])
def login_client():
    """
    Realiza o login de um cliente.
    """
    return ClientController.login_client()
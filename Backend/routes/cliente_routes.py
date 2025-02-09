from flask import Blueprint, jsonify
from controllers.cliente_controller import ClientController

# Remove the url_prefix here since it's already defined in routes/__init__.py
cliente_bp = Blueprint('client', __name__)

@cliente_bp.route('/register', methods=['POST'])
def create_client():
    """
    Create a new cliente.
    """
    try:
        return ClientController.create_client()
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@cliente_bp.route('/clientes', methods=['GET'])
def get_all_clients():
    try:
        return ClientController.get_all_clients()
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@cliente_bp.route('/<int:client_id>', methods=['GET'])
def get_client_by_id(client_id):
    """
    Fetch all clientes.
    """
    try:
        return ClientController.get_client_by_id(client_id)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@cliente_bp.route('/login', methods=['POST'])
def login_client():
    """
    Fetch a specific barber by ID.
    """
    try:
        return ClientController.login_client()
    except Exception as e:
        return jsonify({"error": str(e)}), 500
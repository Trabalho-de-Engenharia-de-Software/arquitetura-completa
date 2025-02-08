from flask import Blueprint, jsonify
from controllers.servico_controller import ServicoController

# Remove the url_prefix here since it's already defined in routes/__init__.py
servico_bp = Blueprint('servico', __name__)

@servico_bp.route('/', methods=['POST'])
def create_service():
    try:
        return ServicoController.create_service()
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@servico_bp.route('/', methods=['GET'])
def get_all_services():
    try:
        return ServicoController.get_all_services()
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@servico_bp.route('/<int:service_id>', methods=['GET'])
def get_service_by_id(service_id):
    try:
        return ServicoController.get_service_by_id(service_id)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
from flask import Blueprint, jsonify
from controllers.servico_controller import ServicoController

# Remove the url_prefix here since it's already defined in routes/__init__.py
servico_bp = Blueprint('servico', __name__)

@servico_bp.route('/registro', methods=['POST'])
def create_servico():
    try:
        return ServicoController.create_servico()
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@servico_bp.route('/consulta', methods=['GET'])
def get_all_servicos():
    try:
        return ServicoController.get_all_servicos()
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@servico_bp.route('/consulta/<int:servico_id>', methods=['GET'])
def get_servico_by_id(servico_id):
    try:
        return ServicoController.get_servico_by_id(servico_id)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
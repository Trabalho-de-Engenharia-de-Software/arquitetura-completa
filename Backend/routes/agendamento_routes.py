from flask import Blueprint, jsonify
from controllers.agendamento_controller import AgendamentoController

# Remove the url_prefix here since it's already defined in routes/__init__.py
agendamento_bp = Blueprint('agendamento', __name__)

@agendamento_bp.route('/', methods=['POST'])
def create_agendamento():
    try:
        return AgendamentoController.create_agendamento()
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@agendamento_bp.route('/', methods=['GET'])
def get_all_agendamentos():
    try:
        return AgendamentoController.get_all_agendamentos()
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@agendamento_bp.route('/<int:agendamento_id>', methods=['GET'])
def get_agendamento_by_id(agendamento_id):
    try:
        return AgendamentoController.get_agendamento_by_id(agendamento_id)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
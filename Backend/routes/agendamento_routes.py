from flask import Blueprint, request, jsonify
from controllers.agendamento_controller import AgendamentoController
import traceback

agendamento_bp = Blueprint('agendamento', __name__)

@agendamento_bp.route('/agendar', methods=['POST'])
def create_agendamento():
    try:
        data = request.json
        cliente_id = data.get('cliente_id')
        id_servico = data.get('id_servico')
        date = data.get('date')
        time = data.get('time')

        if not (cliente_id and id_servico and date and time):
            return jsonify({"error": "Todos os campos são obrigatórios"}), 400

        return AgendamentoController.criar_agendamento(cliente_id, id_servico, date, time)
    except Exception as e:
        error_traceback = traceback.format_exc()
        return jsonify({"error": str(e), "traceback": error_traceback}), 500

@agendamento_bp.route('/disponiveis', methods=['GET'])
def get_horarios_disponiveis():
    try:
        barber_id = request.args.get('barber_id', type=int)
        date = request.args.get('date')

        if not (barber_id and date):
            return jsonify({"error": "barber_id e date são obrigatórios"}), 400

        return AgendamentoController.listar_horarios_disponiveis(barber_id, date)
    except Exception as e:
        error_traceback = traceback.format_exc()
        return jsonify({"error": str(e), "traceback": error_traceback}), 500

@agendamento_bp.route('/consulta', methods=['GET'])
def get_all_agendamentos():
    try:
        return AgendamentoController.get_all_agendamentos()
    except Exception as e:
        error_traceback = traceback.format_exc()
        return jsonify({"error": str(e), "traceback": error_traceback}), 500

@agendamento_bp.route('/<int:agendamento_id>', methods=['GET'])
def get_agendamento_by_id(agendamento_id):
    try:
        return AgendamentoController.get_agendamento_by_id(agendamento_id)
    except Exception as e:
        error_traceback = traceback.format_exc()
        return jsonify({"error": str(e), "traceback": error_traceback}), 500
from flask import jsonify, request
from models.agendamento_model import AgendamentoModel
from werkzeug.exceptions import BadRequest
from datetime import datetime

class AgendamentoController:
    @staticmethod
    def create_agendamento():
        try:
            # Obtendo os dados do corpo da requisição
            data = request.get_json()
            cliente_id = data.get('cliente_id')
            id_servico = data.get('id_servico')
            date_str = data.get('date')
            time_str = data.get('time')

            # Validação de campos obrigatórios
            if not cliente_id or not id_servico or not date_str or not time_str:
                raise BadRequest("cliente_id, id_servico, date, and time are required.")

            try:
                # Convertendo a string de data e hora para o formato correto
                date = datetime.fromisoformat(date_str)  # ISO format para a data
                time = datetime.strptime(time_str, '%H:%M:%S').time()  # Horário no formato HH:MM:SS
            except ValueError as e:
                # Caso a conversão falhe, é possível identificar o erro de formatação
                return jsonify({"error": "Invalid date or time format. Use ISO format for date and HH:MM:SS for time."}), 400

            # Criando o agendamento
            AgendamentoModel.create_agendamento(cliente_id, id_servico, date, time)
            return jsonify({"message": "Agendamento criado com sucesso"}), 201
        except BadRequest as e:
            # Retorna erro 400 para requisições mal formuladas
            return jsonify({"error": str(e)}), 400
        except Exception as e:
            # Detalhando o erro inesperado para depuração
            return jsonify({"error": f"Um erro inesperado ocorreu: {str(e)}"}), 500

    @staticmethod
    def get_all_agendamentos():
        try:
            agendamentos = AgendamentoModel.get_all_agendamentos()
            return jsonify([agendamento.to_dict() for agendamento in agendamentos]), 200
        except Exception as e:
            return jsonify({"error": "Um erro inesperado ocorreu"}), 500

    @staticmethod
    def get_agendamento_by_id(agendamento_id):
        try:
            agendamento = AgendamentoModel.get_agendamento_by_id(agendamento_id)
            if agendamento:
                return jsonify(agendamento.to_dict()), 200
            else:
                return jsonify({"message": "Agendamento not found"}), 404
        except Exception as e:
            return jsonify({"error": "Um erro inesperado ocorreu"}), 500
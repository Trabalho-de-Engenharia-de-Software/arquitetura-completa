from flask import jsonify, request
from models.agendamento_model import AgendamentoModel
from werkzeug.exceptions import BadRequest
from datetime import datetime

class AgendamentoController:
    @staticmethod
    def create_agendamento():
        try:
            data = request.get_json()
            client_id = data.get('client_id')
            service_id = data.get('service_id')
            date_str = data.get('date')
            time_str = data.get('time')

            if not client_id or not service_id or not date_str or not time_str:
                raise BadRequest("client_id, service_id, date, and time are required.")

            try:
                date = datetime.fromisoformat(date_str)
                time = datetime.strptime(time_str, '%H:%M:%S').time() 
            except ValueError:
                raise BadRequest("Invalid date or time format. Use ISO format for date and HH:MM:SS for time.")

            AgendamentoModel.create_agendamento(client_id, service_id, date, time)
            return jsonify({"message": "Agendamento criado com sucesso"}), 201
        except BadRequest as e:
            return jsonify({"error": str(e)}), 400
        except Exception as e:
            return jsonify({"error": "Um erro inesperado ocorreu"}), 500

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
import traceback
from flask import jsonify, request
from models.agendamento_model import AgendamentoModel
from werkzeug.exceptions import BadRequest
from datetime import datetime
from extensions import db

class AgendamentoController:
    @staticmethod
    def criar_agendamento(cliente_id, id_servico, date, time):
        """Cria um agendamento verificando a disponibilidade."""
        try:
            date = datetime.strptime(date, '%Y-%m-%d').date()
            time = datetime.strptime(time, '%H:%M').time()

            if AgendamentoModel.is_horario_disponivel(id_servico, date, time):
                AgendamentoModel.create_agendamento(cliente_id, id_servico, date, time)
                return jsonify({"message": "Agendamento criado com sucesso"}), 201
            else:
                return jsonify({"error": "Horário indisponível"}), 400
        except Exception as e:
            return jsonify({"error": "Erro ao criar agendamento", "message": str(e)}), 500

    @staticmethod
    def listar_horarios_disponiveis(barber_id, date):
        """Lista os horários disponíveis para um barbeiro em uma data."""
        try:
            date = datetime.strptime(date, '%Y-%m-%d').date()
            horarios_disponiveis = AgendamentoModel.get_horarios_disponiveis(barber_id, date)
            return jsonify({"horarios_disponiveis": [h.strftime('%H:%M') for h in horarios_disponiveis]}), 200
        except Exception as e:
            return jsonify({"error": "Erro ao listar horários disponíveis", "message": str(e)}), 500

    @staticmethod
    def get_all_agendamentos():
        try:
            agendamentos = AgendamentoModel.get_all_agendamentos()
            return jsonify([agendamento.to_dict() for agendamento in agendamentos]), 200
        except Exception as e:
            return jsonify({"error": "Um erro inesperado ocorreu", "message": str(e)}), 500

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
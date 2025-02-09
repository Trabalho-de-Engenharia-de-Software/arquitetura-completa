from flask import jsonify, request
from models.servico_model import ServicoModel
from werkzeug.exceptions import BadRequest
from extensions import db
import logging

class ServicoController:
    @staticmethod
    def create_servico():
        try:
            data = request.get_json()
            barber_id = data.get('barber_id')
            nome = data.get('nome')
            preco = data.get('preco')

            # Validação correta dos dados
            if barber_id is None:
                raise BadRequest("O campo 'barber_id' é obrigatório.")
            if not nome:
                raise BadRequest("O campo 'nome' é obrigatório.")
            if preco is None:  # Permite preço 0.00, mas não None
                raise BadRequest("O campo 'preco' é obrigatório.")

            # Criar um novo serviço
            new_servico = ServicoModel(
                barber_id=barber_id,
                nome_servico=nome,
                preco_servico=preco
            )

            # Salvar no banco
            db.session.add(new_servico)
            db.session.commit()

            return jsonify({"message": "Serviço adicionado com sucesso"}), 201

        except BadRequest as e:
            return jsonify({"error": str(e)}), 400

        except Exception as e:
            db.session.rollback()
            logging.error(f"Erro ao adicionar serviço: {str(e)}")  # Log no terminal
            return jsonify({"error": f"Erro inesperado: {str(e)}"}), 500  # Retorna erro real

    @staticmethod
    def get_all_servicos():
        try:
            servicos = ServicoModel.query.all()
            return jsonify([{
                "id": servico.id_servico,
                "barber_id": servico.barber_id,
                "nome": servico.nome_servico,
                "preco": servico.preco_servico
            } for servico in servicos]), 200
        except Exception as e:
            logging.error(f"Erro ao buscar serviços: {str(e)}")
            return jsonify({"error": f"Erro inesperado: {str(e)}"}), 500

    @staticmethod
    def get_servico_by_id(servico_id):
        try:
            servico = ServicoModel.query.get(servico_id)
            if servico:
                return jsonify({
                    "id": servico.id_servico,
                    "barber_id": servico.barber_id,
                    "nome": servico.nome_servico,
                    "preco": servico.preco_servico
                }), 200
            else:
                return jsonify({"message": "Serviço não encontrado"}), 404
        except Exception as e:
            logging.error(f"Erro ao buscar serviço ID {servico_id}: {str(e)}")
            return jsonify({"error": f"Erro inesperado: {str(e)}"}), 500

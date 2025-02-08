from flask import jsonify, request
from models.servico_model import ServicoModel
from werkzeug.exceptions import BadRequest
from extensions import db

class ServicoController:
    @staticmethod
    def create_service():
        try:
            data = request.get_json()
            barber_id = data.get('barber_id')
            name = data.get('name')
            price = data.get('price')

            if not name or price is None:
                raise BadRequest("Nome e preço necessários")

            # Create a new service
            new_service = ServicoModel(
                nome_servico=name,
                preco_servico=price
            )

            # Add and commit the new service to the database
            db.session.add(new_service)
            db.session.commit()

            return jsonify({"message": "Serviço adicionado com sucesso"}), 201
        except BadRequest as e:
            return jsonify({"error": str(e)}), 400
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": "Um erro inesperado aconteceu"}), 500

    @staticmethod
    def get_all_services():
        try:
            services = ServicoModel.query.all()
            return jsonify([{
                "id": service.id_servico,
                "name": service.nome_servico,
                "price": service.preco_servico
            } for service in services]), 200
        except Exception as e:
            return jsonify({"error": "Um erro inesperado aconteceu"}), 500

    @staticmethod
    def get_service_by_id(service_id):
        try:
            service = ServicoModel.query.get(service_id)
            if service:
                return jsonify({
                    "id": service.id_servico,
                    "name": service.nome_servico,
                    "price": service.preco_servico
                }), 200
            else:
                return jsonify({"message": "Serviço não encontrado"}), 404
        except Exception as e:
            return jsonify({"error": "Um erro inesperado aconteceu"}), 500
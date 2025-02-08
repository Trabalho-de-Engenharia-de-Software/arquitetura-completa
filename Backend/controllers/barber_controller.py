from flask import jsonify, request
from models.barber_model import BarberModel
from extensions import db  # Import db from extensions

class BarberController:
    @staticmethod
    def create_barber():
        data = request.get_json()
        nome = data.get('name')
        telefone = data.get('cellphone')
        email = data.get('email')
        especialidade = data.get('especialidade')

        # Create a new barber using the BarberModel
        new_barber = BarberModel(
            barber_nome=nome,
            barber_telefone=telefone,
            barber_email=email,
            barber_especialidade=especialidade
        )

        # Add and commit the new barber to the database
        db.session.add(new_barber)
        db.session.commit()

        return jsonify({"message": "Barber criado com sucesso"}), 201

    @staticmethod
    def get_all_barbers():
        # Fetch all barbers from the database
        barbers = BarberModel.query.all()
        return jsonify([{
            "id": barber.barb_id,
            "name": barber.barber_nome,
            "cellphone": barber.barber_telefone,
            "email": barber.barber_email,
            "especialidade": barber.barber_especialidade
        } for barber in barbers]), 200

    @staticmethod
    def get_barber_by_id(barber_id):
        # Fetch a barber by ID from the database
        barber = BarberModel.query.get(barber_id)
        if barber:
            return jsonify({
                "id": barber.barb_id,
                "name": barber.barber_nome,
                "cellphone": barber.barber_telefone,
                "email": barber.barber_email,
                "especialidade": barber.barber_especialidade
            }), 200
        else:
            return jsonify({"message": "Barber nao encontrado"}), 404
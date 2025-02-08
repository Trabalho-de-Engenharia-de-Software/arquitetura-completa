from flask import jsonify, request
from models.cliente_model import ClientModel
from werkzeug.exceptions import BadRequest
from extensions import db
import traceback  # Importa para capturar o traceback completo

class ClientController:


    @staticmethod
    def create_client():
        try:
            data = request.get_json()
            nome = data.get('nome')
            email = data.get('email')
            telefone = data.get('telefone')
            senha = data.get('senha')

          # Input validation
            if not nome or not email or not telefone or not senha:
                raise BadRequest(
                    f"Erro: nome='{nome}', email='{email}', telefone='{telefone}', senha='{senha}' são necessários."
                )

            # Create a new client
            new_client = ClientModel(
                cliente_nome=nome,
                cliente_email=email,
                cliente_telefone=telefone,
                cliente_senha=senha
            )

            # Add and commit the new client to the database
            db.session.add(new_client)
            db.session.commit()

            return jsonify({"message": "Cliente criado com sucesso"}), 201

        except BadRequest as e:
            # For BadRequest, return specific error message
            return jsonify({"error": str(e)}), 400
        except Exception as e:
            # Capture the full traceback for unexpected errors
            error_details = {
                "error": "Um erro inesperado aconteceu",
                "exception_type": type(e).__name__,
                "message": str(e),
                "traceback": traceback.format_exc()  # Captura o traceback completo do erro
            }
            db.session.rollback()  # Ensure to rollback if an error occurs
            return jsonify(error_details), 500

    @staticmethod
    def get_all_clients():
        try:
            clients = ClientModel.query.all()
            return jsonify([{
                "id": client.cliente_id,
                "nome": client.cliente_nome,
                "email": client.cliente_email,
                "telefone": client.cliente_telefone,
            } for client in clients]), 200
        except Exception as e:
            return jsonify({"error": "Um erro inesperado aconteceu"}), 500

    @staticmethod
    def get_client_by_id(client_id):
        try:
            client = ClientModel.query.get(client_id)
            if client:
                return jsonify({
                    "id": client.cliente_id,
                    "nome": client.cliente_nome,
                    "email": client.cliente_email,
                    "telefone": client.cliente_telefone,
                }), 200
            else:
                return jsonify({"message": "Cliente não localizado"}), 404
        except Exception as e:
            return jsonify({"error": "Um erro inesperado aconteceu"}), 500

    @staticmethod
    def login_client():
        try:
            data = request.get_json()
            email = data.get('email')
            senha = data.get('senha')

            if not email or not senha:
                raise BadRequest("Email e senha são necessários.")

            client = ClientModel.query.filter_by(cliente_email=email, cliente_senha=senha).first()
            if client:
                return jsonify({"message": "Login concluído", "client_id": client.cliente_id}), 200
            else:
                return jsonify({"message": "Login ou senha inválidos"}), 401
        except BadRequest as e:
            return jsonify({"error": str(e)}), 400
        except Exception as e:
            return jsonify({"error": "Um erro inesperado aconteceu"}), 500
from flask import Blueprint, jsonify
from controllers.servico_controller import ServicoController

# Define o Blueprint para as rotas de serviço
servico_bp = Blueprint('servico', __name__)

@servico_bp.route('/registro', methods=['POST'])
def create_servico():
    """
    Cria um novo serviço.
    """
    return ServicoController.create_servico()

@servico_bp.route('/consulta', methods=['GET'])
def get_all_servicos():
    """
    Retorna todos os serviços.
    """
    return ServicoController.get_all_servicos()

@servico_bp.route('/consulta/<int:servico_id>', methods=['GET'])
def get_servico_by_id(servico_id):
    """
    Retorna um serviço específico pelo ID.
    """
    return ServicoController.get_servico_by_id(servico_id)
from flask import Blueprint, jsonify
from controllers.barber_controller import BarberController

# Define o Blueprint para as rotas de barbeiro
barber_bp = Blueprint('barber', __name__)

@barber_bp.route('/registro', methods=['POST'])
def create_barber():
    """
    Cria um novo barbeiro.
    """
    return BarberController.create_barber()

@barber_bp.route('/lista', methods=['GET'])
def get_all_barbers():
    """
    Retorna todos os barbeiros.
    """
    return BarberController.get_all_barbers()

@barber_bp.route('/<int:barber_id>', methods=['GET'])
def get_barber_by_id(barber_id):
    """
    Retorna um barbeiro específico pelo ID.
    """
    return BarberController.get_barber_by_id(barber_id)

@barber_bp.route('/login', methods=['POST'])
def login_barber():
    """
    Realiza o login de um barbeiro.
    """
    return BarberController.login_barber()
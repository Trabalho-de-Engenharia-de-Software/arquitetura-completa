from flask import Blueprint, jsonify
from controllers.barber_controller import BarberController

# Define the Blueprint for barber routes
barber_bp = Blueprint('barber', __name__)

@barber_bp.route('/registro', methods=['POST'])
def create_barber():
    """
    Create a new barber.
    """
    try:
        return BarberController.create_barber()
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@barber_bp.route('/lista', methods=['GET'])
def get_all_barbers():
    """
    Fetch all barbers.
    """
    try:
        return BarberController.get_all_barbers()
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@barber_bp.route('/<int:barber_id>', methods=['GET'])
def get_barber_by_id(barber_id):
    """
    Fetch a specific barber by ID.
    """
    try:
        return BarberController.get_barber_by_id(barber_id)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
# Rota de login
@barber_bp.route('/login', methods=['POST'])
def login_barber():
    """
    Login a barber.
    """
    try:
        return BarberController.login_barber()
    except Exception as e:
        return jsonify({"error": str(e)}), 500
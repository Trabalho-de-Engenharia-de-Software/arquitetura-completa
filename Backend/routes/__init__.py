# routes/__init__.py
from flask import Blueprint
from .agendamento_routes import agendamento_bp
from .barber_routes import barber_bp
from .cliente_routes import cliente_bp
from .servico_routes import servico_bp

# Create a main Blueprint for all routes
main_bp = Blueprint('main', __name__)

# Register the individual Blueprints
main_bp.register_blueprint(agendamento_bp, url_prefix='/agendamentos')
main_bp.register_blueprint(barber_bp, url_prefix='/barbers')
main_bp.register_blueprint(cliente_bp, url_prefix='/clientes')
main_bp.register_blueprint(servico_bp, url_prefix='/servicos')

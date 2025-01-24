from flask import Blueprint, jsonify, request
from controllers.service_controller import ServiceController

service_routes = Blueprint('service_routes', __name__)

@service_routes.route('/services', methods=['GET'])
def get_services():
    return ServiceController.get_services()

@service_routes.route('/services', methods=['POST'])
def create_service():
    return ServiceController.create_service()
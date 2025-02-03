from flask import Blueprint
from controllers.user_controller import UserController

user_routes = Blueprint('user_routes', __name__)

@user_routes.route('/login', methods=['POST'])
def login():
    return UserController.login()

@user_routes.route('/register', methods=['POST'])
def register():
    return UserController.register()

@user_routes.route('/barbers', methods=['GET'])
def get_barbers():
    return UserController.get_barbers()
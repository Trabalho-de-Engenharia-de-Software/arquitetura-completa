from flask import jsonify, request
from ..models.user_model import UserModel

class UserController:
    @staticmethod
    def login():
        data = request.json
        email = data.get('email')
        password = data.get('password')

        user = UserModel.get_user_by_email(email)
        if user and user['password'] == password:  # In a real app, use hashed passwords!
            return jsonify({"message": "Login successful", "user": user})
        return jsonify({"message": "Invalid credentials"}), 401

    @staticmethod
    def register():
        data = request.json
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        role = data.get('role', 'client')  # Default role is 'client'

        if UserModel.get_user_by_email(email):
            return jsonify({"message": "User already exists"}), 400

        UserModel.create_user(name, email, password, role)
        return jsonify({"message": "User registered successfully"})

    @staticmethod
    def get_barbers():
        barbers = UserModel.get_all_barbers()
        return jsonify(barbers)
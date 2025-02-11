from flask import Flask, jsonify
from flask_cors import CORS
from extensions import db  # Import db from extensions
from routes import barber_routes, cliente_routes, servico_routes, agendamento_routes

# Initialize the Flask app
app = Flask(__name__)
CORS(app) # Enable CORS for all routes

# Database configuration for AWS RDS
app.config['SQLALCHEMY_DATABASE_URI'] = (
    'mysql+mysqlconnector://admin:Trab-eng4@database-barbearia.cv2ckye4yvpc.sa-east-1.rds.amazonaws.com:3306/Barbearia'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable modification tracking

# Initialize the database
db.init_app(app)

# Register routes
app.register_blueprint(barber_routes.barber_bp, url_prefix='/api/barber')
app.register_blueprint(cliente_routes.cliente_bp, url_prefix='/api/cliente')
app.register_blueprint(servico_routes.servico_bp, url_prefix='/api/servico')
app.register_blueprint(agendamento_routes.agendamento_bp, url_prefix='/api/agendamento')

# Test route to check if the app is running
@app.route('/')
def home():
    return jsonify({"message": "Bem-vindo à API do barbeiro!"})

# Test route to check the database connection
@app.route('/test-db', methods=['GET'])
def test_db():
    try:
        # Execute a simple query
        result = db.engine.execute('SELECT * FROM Cliente')
        data = [dict(row) for row in result]

        # Return the results as JSON
        return jsonify({"message": "Database connection successful!", "data": data})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    


# Run the app
    if __name__ == '__main__':
        app.run(debug=True)
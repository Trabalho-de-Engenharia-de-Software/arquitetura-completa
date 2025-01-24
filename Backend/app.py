from flask import Flask, jsonify
from flask_cors import CORS
from routes.user_routes import user_routes
from routes.services_routes import service_routes
from models.database import db  # Import the `db` object

# Initialize the Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Register routes
app.register_blueprint(user_routes, url_prefix='/api')
app.register_blueprint(service_routes, url_prefix='/api')

# Test route to check if the app is running
@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Barber Shop API!"}) 

# Test route to check the database connection
@app.route('/test-db', methods=['GET'])
def test_db():
    try:
        # Get a database connection
        conn = db()
        cursor = conn.cursor()

        # Execute a simple query
        cursor.execute('SELECT * FROM Cliente')
        results = cursor.fetchall()

        # Close the cursor and connection
        cursor.close()
        conn.close()

        # Return the results as JSON
        return jsonify({"message": "Database connection successful!", "data": results})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
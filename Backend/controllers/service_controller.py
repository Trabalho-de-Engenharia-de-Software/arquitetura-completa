from models.database import db

class ServiceController:
    @staticmethod
    def get_services():
        try:
            # Get a database connection
            conn = db()
            cursor = conn.cursor()

            # Execute a query to fetch all services
            cursor.execute('SELECT * FROM Servicos')
            services = cursor.fetchall()

            # Close the cursor and connection
            cursor.close()
            conn.close()

            # Return the services as JSON
            return jsonify({"services": services})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @staticmethod
    def create_service():
        try:
            data = request.json
            name = data.get('name')
            description = data.get('description')
            image_url = data.get('image_url')

            # Get a database connection
            conn = db()
            cursor = conn.cursor()

            # Execute a query to insert a new service
            cursor.execute(
                'INSERT INTO Servicos (name, description, image_url) VALUES (?, ?, ?)',
                (name, description, image_url)
            )
            conn.commit()

            # Close the cursor and connection
            cursor.close()
            conn.close()

            # Return a success message
            return jsonify({"message": "Service created successfully!"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500
from .database import get_db_connection

class ServiceModel:
    @staticmethod
    def get_all_services():
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM services")
        services = cursor.fetchall()
        cursor.close()
        connection.close()
        return services

    @staticmethod
    def create_service(name, description, image_url):
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO services (name, description, image_url) VALUES (%s, %s, %s)",
            (name, description, image_url)
        )
        connection.commit()
        cursor.close()
        connection.close()
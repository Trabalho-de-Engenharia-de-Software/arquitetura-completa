from .database import get_db_connection

class UserModel:
    @staticmethod
    def get_user_by_email(email):
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cursor.fetchone()
        cursor.close()
        connection.close()
        return user

    @staticmethod
    def create_user(name, email, password, role):
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO users (name, email, password, role) VALUES (%s, %s, %s, %s)",
            (name, email, password, role)
        )
        connection.commit()
        cursor.close()
        connection.close()

    @staticmethod
    def get_all_barbers():
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users WHERE role = 'barber'")
        barbers = cursor.fetchall()
        cursor.close()
        connection.close()
        return barbers
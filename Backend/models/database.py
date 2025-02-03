import pyodbc

def get_db_connection():
    """
    Establishes a connection to the SQL Server database.
    """
    try:
        # Configuração da conexão
        conn = pyodbc.connect(
            'DRIVER={ODBC Driver 17 for SQL Server};'
            'SERVER=DESKTOP-T09FVSM;'  # Replace with your server name
            'DATABASE=Barbearia;'      # Replace with your database name
            'UID=sa;'                  # Replace with your username
            'PWD=Lary1234@'            # Replace with your password
        )
        print("Conexão estabelecida com sucesso!")  # Mensagem de sucesso
        return conn
    except Exception as e:
        print(f"Ocorreu um erro ao conectar ao banco de dados: {e}")
        raise  # Re-raise the exception to handle it in the calling code

# Export the connection function as `db`
db = get_db_connection
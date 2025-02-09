# import mysql.connector
# from mysql.connector import Error

# def get_db_connection():
#     """
#     Establishes a connection to the MySQL database hosted on AWS.
#     """
#     try:
#         Configuração da conexão
#         conn = mysql.connector.connect(
#             host="database-barbearia.cv2ckye4yvpc.sa-east-1.rds.amazonaws.com",  # Endpoint do RDS
#             database="Barbearia",                   # Nome do banco de dados
#             user="admin",                   # Nome de usuário
#             password=""                # Senha do usuário
#         )
#         print("Conexão estabelecida com sucesso!")  # Mensagem de sucesso
#         return conn
#     except Error as e:
#         print(f"Ocorreu um erro ao conectar ao banco de dados: {e}")
#         raise  # Re-lança a exceção para tratamento no código que chamou a função

# Exporta a função de conexão como `db`
# db = get_db_connection()
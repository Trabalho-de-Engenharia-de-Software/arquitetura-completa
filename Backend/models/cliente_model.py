# models/cliente_model.py
import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
from extensions import db

Base = declarative_base()

class ClientModel(db.Model):
    __tablename__ = 'Cliente'
    cliente_id = db.Column(db.Integer, primary_key=True)
    cliente_nome = db.Column(db.String(60), nullable=False)
    cliente_email = db.Column(db.String(60), nullable=False, unique=True)
    cliente_telefone = db.Column(db.String(60), nullable=False)
    cliente_senha = db.Column(db.String(60), nullable=False)

    def __init__(self, cliente_nome, cliente_email, cliente_telefone, cliente_senha):
        self.cliente_nome = cliente_nome
        self.cliente_email = cliente_email
        self.cliente_telefone = cliente_telefone
        self.cliente_senha = cliente_senha

    def to_dict(self):
        return {
            'cliente_id': self.cliente_id,
            'cliente_nome': self.cliente_nome,
            'cliente_email': self.cliente_email,
            'cliente_telefone': self.cliente_telefone
        }

    @staticmethod
    def create_cliente(nome, email, telefone, senha):
        client = ClientModel(nome, email, telefone, senha)
        db.session.add(client)
        db.session.commit()

    @staticmethod
    def get_all_clients():
        return ClientModel.query.all()

    @staticmethod
    def get_client_by_id(cliente_id):
        return ClientModel.query.get(cliente_id)

    @staticmethod
    def login_client(email, senha):
        return ClientModel.query.filter_by(email=email, senha=senha).first()

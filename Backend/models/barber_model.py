import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
from extensions import db 

Base = declarative_base()

class BarberModel(db.Model):
    __tablename__ = 'Barbeiro'
    barber_id = db.Column(db.Integer, primary_key=True)
    barber_nome = db.Column(db.String(60), nullable=False)
    barber_telefone = db.Column(db.String(60), nullable=False)
    barber_email = db.Column(db.String(60), nullable=False)
    barber_especialidade = db.Column(db.String(60), nullable=False)
    barber_senha = db.Column(db.String(60), nullable=False)

    def __init__(self, barber_nome, barber_telefone, barber_email, barber_senha, barber_especialidade):
        self.barber_nome = barber_nome
        self.barber_telefone = barber_telefone
        self.barber_email = barber_email
        self.barber_senha = barber_senha
        self.barber_especialidade = barber_especialidade

    def to_dict(self):
        return {
            'barber_id': self.barber_id,
            'nome': self.barber_nome,
            'telefone': self.barber_telefone,
            'email': self.barber_email,
            'senha': self.barber_senha,
            'especialidade': self.barber_especialidade
        }

    @staticmethod
    def create_barber(nome, telefone, email, senha, especialidade):
        barber = BarberModel(nome, telefone, email, senha, especialidade)
        db.session.add(barber)
        db.session.commit()

    @staticmethod
    def get_all_barbers():
        return BarberModel.query.all()

    @staticmethod
    def get_barber_by_id(barber_id):
        return BarberModel.query.get(barber_id)

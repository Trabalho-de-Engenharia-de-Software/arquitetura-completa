import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
from extensions import db 

Base = declarative_base()

class BarberModel(db.Model):
    __tablename__ = 'Barbeiro'
    barb_id = db.Column(db.Integer, primary_key=True)
    barber_nome = db.Column(db.String(60), nullable=False)
    barber_telefone = db.Column(db.String(60), nullable=False)
    barber_email = db.Column(db.String(60), nullable=False)
    barber_especialidade = db.Column(db.String(60), nullable=False)
    barber_senha = db.Column(db.String(60), nullable=False)

    def __init__(self, nome, telefone, email, especialidade, ):
        self.nome = nome
        self.telefone = telefone
        self.email = email
        self.especialidade = especialidade

    def to_dict(self):
        return {
            'barber_id': self.barber_id,
            'nome': self.nome,
            'telefone': self.telefone,
            'email': self.email,
            'especialidade': self.especialidade
        }

    @staticmethod
    def create_barber(nome, telefone, email, especialidade):
        barber = BarberModel(nome, telefone, email, especialidade)
        db.session.add(barber)
        db.session.commit()

    @staticmethod
    def get_all_barbers():
        return BarberModel.query.all()

    @staticmethod
    def get_barber_by_id(barber_id):
        return BarberModel.query.get(barber_id)

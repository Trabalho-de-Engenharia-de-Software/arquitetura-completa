from sqlalchemy.ext.declarative import declarative_base
from extensions import db

Base = declarative_base()

class ServicoModel(db.Model):
    __tablename__ = 'Servico'
    servico_id = db.Column(db.Integer, primary_key=True)
    barber_id = db.Column(db.Integer, db.ForeignKey('Barbeiro.barber_id'))
    nome_servico = db.Column(db.String)
    preco_servico = db.Column(db.Float)

    def __init__(self, barber_id, nome_servico, preco_servico):
        self.barber_id = barber_id
        self.nome_servico = nome_servico
        self.preco_servico = preco_servico

    def to_dict(self):
        return {
            'servico_id': self.servico_id,
            'barber_id': self.barber_id,
            'nome_servico': self.nome_servico,
            'preco_servico': self.preco_servico
        }

    @staticmethod
    def create_servico(barber_id, nome, preco):
        Servico = ServicoModel(barber_id, nome, preco)
        db.session.add(Servico)
        db.session.commit()

    @staticmethod
    def get_all_servicos():
        return ServicoModel.query.all()

    @staticmethod
    def get_servico_by_id(servico_id):
        return ServicoModel.query.get(servico_id)
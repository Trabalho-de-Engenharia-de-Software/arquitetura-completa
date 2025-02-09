from sqlalchemy.ext.declarative import declarative_base
from extensions import db

Base = declarative_base()

class AgendamentoModel(db.Model):
    __tablename__ = 'Agendamento'
    agendamento_id = db.Column(db.Integer, primary_key=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('Cliente.cliente_id'))
    id_servico = db.Column(db.Integer, db.ForeignKey('Servico.id_servico'))
    date = db.Column(db.DateTime)
    time = db.Column(db.Time)

    def __init__(self, cliente_id, id_servico, date, time):
        self.cliente_id = cliente_id
        self.id_servico = id_servico
        self.date = date
        self.time = time

    def to_dict(self):
        return {
            'agendamento_id': self.agendamento_id,
            'cliente_id': self.cliente_id,
            'id_servico': self.id_servico,
            'date': self.date.isoformat(), 
        }

    @staticmethod
    def create_agendamento(cliente_id, id_servico, date, time):
        agendamento = AgendamentoModel(cliente_id, id_servico, date, time)
        db.session.add(agendamento)
        db.session.commit()

    @staticmethod
    def get_all_agendamentos():
        return AgendamentoModel.query.all()

    @staticmethod
    def get_agendamento_by_id(agendamento_id):
        return AgendamentoModel.query.get(agendamento_id)

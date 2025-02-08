import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
from extensions import db

Base = declarative_base()

class AgendamentoModel(db.Model):
    __tablename__ = 'agendamentos'
    agendamento_id = sa.Column(sa.Integer, primary_key=True)
    client_id = sa.Column(sa.Integer, sa.ForeignKey('clients.client_id'))
    service_id = sa.Column(sa.Integer, sa.ForeignKey('services.service_id'))
    date = sa.Column(sa.DateTime)
    time = sa.Column(sa.Time)

    def __init__(self, client_id, service_id, date, time):
        self.client_id = client_id
        self.service_id = service_id
        self.date = date
        self.time = time

    def to_dict(self):
        return {
            'agendamento_id': self.agendamento_id,
            'client_id': self.client_id,
            'service_id': self.service_id,
            'date': self.date.isoformat(), 
        }

    @staticmethod
    def create_agendamento(client_id, service_id, date, time):
        agendamento = AgendamentoModel(client_id, service_id, date, time)
        db.session.add(agendamento)
        db.session.commit()

    @staticmethod
    def get_all_agendamentos():
        return AgendamentoModel.query.all()

    @staticmethod
    def get_agendamento_by_id(agendamento_id):
        return AgendamentoModel.query.get(agendamento_id)

from sqlalchemy.ext.declarative import declarative_base
from extensions import db

Base = declarative_base()

class AgendamentoModel(db.Model):
    __tablename__ = 'agendamentos'
    agendamento_id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.client_id'))
    servico_id = db.Column(db.Integer, db.ForeignKey('servicos.servico_id'))
    date = db.Column(db.DateTime)
    time = db.Column(db.Time)

    def __init__(self, client_id, servico_id, date, time):
        self.client_id = client_id
        self.servico_id = servico_id
        self.date = date
        self.time = time

    def to_dict(self):
        return {
            'agendamento_id': self.agendamento_id,
            'client_id': self.client_id,
            'servico_id': self.servico_id,
            'date': self.date.isoformat(), 
        }

    @staticmethod
    def create_agendamento(client_id, servico_id, date, time):
        agendamento = AgendamentoModel(client_id, servico_id, date, time)
        db.session.add(agendamento)
        db.session.commit()

    @staticmethod
    def get_all_agendamentos():
        return AgendamentoModel.query.all()

    @staticmethod
    def get_agendamento_by_id(agendamento_id):
        return AgendamentoModel.query.get(agendamento_id)

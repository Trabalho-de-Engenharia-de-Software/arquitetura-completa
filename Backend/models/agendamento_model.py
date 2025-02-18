from datetime import datetime, time, timedelta
from sqlalchemy.ext.declarative import declarative_base
from models.servico_model import ServicoModel
from extensions import db

Base = declarative_base()

class AgendamentoModel(db.Model):
    __tablename__ = 'Agendamento'
    agendamento_id = db.Column(db.Integer, primary_key=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('Cliente.cliente_id'))
    id_servico = db.Column(db.Integer, db.ForeignKey('Servico.id_servico'))
    date = db.Column(db.Date)
    time = db.Column(db.Time)
    status_agendamento = db.Column(db.String(50), default='Agendado')  # Novo campo
    observacao_agendamento = db.Column(db.Text, nullable=True)  # Novo campo
    descricao_agendamento = db.Column(db.Text, nullable=True)  # Novo campo

    def __init__(self, cliente_id, id_servico, date, time, status_agendamento='Agendado', observacao_agendamento=None, descricao_agendamento=None):
        self.cliente_id = cliente_id
        self.id_servico = id_servico
        self.date = date
        self.time = time
        self.status_agendamento = status_agendamento
        self.observacao_agendamento = observacao_agendamento
        self.descricao_agendamento = descricao_agendamento

    def to_dict(self):
        return {
            'agendamento_id': self.agendamento_id,
            'cliente_id': self.cliente_id,
            'id_servico': self.id_servico,
            'date': self.date.isoformat(),
            'time': self.time.strftime('%H:%M:%S') if self.time else None,
            'status_agendamento': self.status_agendamento,  # Novo campo
            'observacao_agendamento': self.observacao_agendamento,  # Novo campo
            'descricao_agendamento': self.descricao_agendamento  # Novo campo
        }

    @staticmethod
    def create_agendamento(cliente_id, id_servico, date, time, status_agendamento='Agendado', observacao_agendamento=None, descricao_agendamento=None):
        agendamento = AgendamentoModel(
            cliente_id=cliente_id,
            id_servico=id_servico,
            date=date,
            time=time,
            status_agendamento=status_agendamento,
            observacao_agendamento=observacao_agendamento,
            descricao_agendamento=descricao_agendamento
        )
        db.session.add(agendamento)
        db.session.commit()

    @staticmethod
    def get_horarios_disponiveis(barber_id, date):
        """Retorna horários disponíveis para um barbeiro em uma data específica."""
        inicio = time(10, 0)
        fim = time(18, 0)
        horarios = [datetime.combine(date, inicio) + timedelta(hours=i) for i in range(8)]
        horarios = [h.time() for h in horarios]

        agendamentos = AgendamentoModel.query.join(ServicoModel).filter(
            ServicoModel.barber_id == barber_id,
            AgendamentoModel.date == date
        ).all()

        horarios_ocupados = [agendamento.time for agendamento in agendamentos]
        horarios_disponiveis = [hora for hora in horarios if hora not in horarios_ocupados]

        return horarios_disponiveis

    @staticmethod
    def is_horario_disponivel(barber_id, date, time):
        """Verifica se o horário está disponível para um barbeiro."""
        agendamento_existente = AgendamentoModel.query.join(ServicoModel).filter(
            ServicoModel.barber_id == barber_id,
            AgendamentoModel.date == date,
            AgendamentoModel.time == time
        ).first()
        return agendamento_existente is None

    @staticmethod
    def get_all_agendamentos():
        return AgendamentoModel.query.all()

    @staticmethod
    def get_agendamento_by_id(agendamento_id):
        return AgendamentoModel.query.get(agendamento_id)

    @staticmethod
    def get_agendamentos_por_barbeiro(barber_id):
        """Retorna todos os agendamentos associados a um barbeiro."""
        return AgendamentoModel.query.join(ServicoModel).filter(
            ServicoModel.barber_id == barber_id
        ).all()
    
    @staticmethod
    def delete_agendamento(agendamento_id):
        agendamento = AgendamentoModel.query.get(agendamento_id)
        if agendamento:
            db.session.delete(agendamento)
            db.session.commit()
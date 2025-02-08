import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
from extensions import db

Base = declarative_base()

class ServicoModel(db.Model):
    __tablename__ = 'services'
    service_id = sa.Column(sa.Integer, primary_key=True)
    barber_id = sa.Column(sa.Integer, sa.ForeignKey('barber.barber_id'))
    name = sa.Column(sa.String)
    price = sa.Column(sa.Float)

    def __init__(self, name, price):
        self.name = name
        self.price = price

    def to_dict(self):
        return {
            'service_id': self.service_id,
            'barber_id': self.barber_id,
            'name': self.name,
            'price': self.price
        }

    @staticmethod
    def create_service(barber_id, name, price):
        service = ServicoModel(barber_id, name, price)
        db.session.add(service)
        db.session.commit()

    @staticmethod
    def get_all_services():
        return ServicoModel.query.all()

    @staticmethod
    def get_service_by_id(service_id):
        return ServicoModel.query.get(service_id)
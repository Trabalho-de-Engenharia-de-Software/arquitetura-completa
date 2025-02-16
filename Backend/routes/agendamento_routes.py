from flask import Blueprint, request, jsonify
from controllers.agendamento_controller import AgendamentoController

# Define o Blueprint para as rotas de agendamento
agendamento_bp = Blueprint('agendamento', __name__)

@agendamento_bp.route('/agendar', methods=['POST'])
def create_agendamento():
    """
    Cria um novo agendamento.
    """
    data = request.json
    cliente_id = data.get('cliente_id')
    id_servico = data.get('id_servico')
    date = data.get('date')
    time = data.get('time')
    status_agendamento = data.get('status_agendamento', 'Agendado')  # Campo opcional
    observacao_agendamento = data.get('observacao_agendamento')  # Campo opcional
    descricao_agendamento = data.get('descricao_agendamento')  # Campo opcional

    return AgendamentoController.criar_agendamento(
        cliente_id=cliente_id,
        id_servico=id_servico,
        date=date,
        time=time,
        status_agendamento=status_agendamento,
        observacao_agendamento=observacao_agendamento,
        descricao_agendamento=descricao_agendamento
    )

@agendamento_bp.route('/cliente/<int:cliente_id>', methods=['GET'])
def get_agendamentos_cliente(cliente_id):
    """
    Retorna todos os agendamentos de um cliente específico.
    """
    return AgendamentoController.get_agendamentos_por_cliente(cliente_id)

@agendamento_bp.route('/barbeiro/<int:barber_id>', methods=['GET'])
def get_agendamentos_barbeiro(barber_id):
    """
    Retorna todos os agendamentos de um barbeiro específico.
    """
    return AgendamentoController.get_agendamentos_por_barbeiro(barber_id)

@agendamento_bp.route('/disponiveis', methods=['GET'])
def get_horarios_disponiveis():
    """
    Retorna os horários disponíveis para um barbeiro em uma data específica.
    """
    barber_id = request.args.get('barber_id', type=int)
    date = request.args.get('date')
    return AgendamentoController.listar_horarios_disponiveis(barber_id, date)

@agendamento_bp.route('/consulta', methods=['GET'])
def get_all_agendamentos():
    """
    Retorna todos os agendamentos.
    """
    return AgendamentoController.get_all_agendamentos()

@agendamento_bp.route('/<int:agendamento_id>', methods=['GET'])
def get_agendamento_by_id(agendamento_id):
    """
    Retorna um agendamento específico pelo ID.
    """
    return AgendamentoController.get_agendamento_by_id(agendamento_id)
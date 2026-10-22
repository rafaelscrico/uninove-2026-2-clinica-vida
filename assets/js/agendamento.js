'use strict';
const form = document.querySelector('#form-agendamento');
const resumo = document.querySelector('#resumo-agendamento');
function resultado(campo, aviso, valido, mensagem) {
  aviso.textContent = valido ? '' : mensagem;
  campo.classList.toggle('campo-invalido', !valido);
  campo.setAttribute('aria-invalid', String(!valido));
  return valido;
}
function validarCpf(campo, aviso) {
  // Regra didática da aula: quantidade de dígitos, sem cálculo dos verificadores.
  const digitos = campo.value.replace(/\D/g, '');
  return resultado(campo, aviso, digitos.length === 11, 'O CPF precisa ter 11 dígitos.');
}
function validarData(campo, aviso) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const escolhida = new Date(campo.value + 'T00:00:00');
  return resultado(campo, aviso, escolhida > hoje, 'A consulta precisa ser em uma data futura.');
}
function validarHorario(campo, aviso) {
  const [hora, minuto] = campo.value.split(':').map(Number);
  const minutos = hora * 60 + minuto;
  // Conforme o exemplo da aula: 07:00 inclusive; 19:00 exclusive.
  return resultado(campo, aviso, minutos >= 420 && minutos < 1140, 'A Clínica Vida+ atende das 07h às 19h (último horário antes das 19h).');
}
form.addEventListener('input', () => resumo.classList.add('oculto'));
form.addEventListener('submit', (event) => {
  event.preventDefault();
  resumo.classList.add('oculto');
  const cpf = document.querySelector('#cpf');
  const data = document.querySelector('#data');
  const horario = document.querySelector('#horario');
  const resultados = [
    validarCpf(cpf, document.querySelector('#aviso-cpf')),
    validarData(data, document.querySelector('#aviso-data')),
    validarHorario(horario, document.querySelector('#aviso-horario'))
  ];
  if (resultados.includes(false)) {
    form.querySelector('.campo-invalido').focus();
    return;
  }
  const nome = document.querySelector('#nome').value;
  const especialidade = document.querySelector('#especialidade').selectedOptions[0].textContent;
  const medico = document.querySelector('#medico').selectedOptions[0].textContent;
  const dataFormatada = data.value.split('-').reverse().join('/');
  resumo.textContent = nome + ' solicitou ' + especialidade + ' com ' + medico + ' em ' + dataFormatada + ' às ' + horario.value + '. Simulação acadêmica, sem reserva real.';
  resumo.classList.remove('oculto');
});



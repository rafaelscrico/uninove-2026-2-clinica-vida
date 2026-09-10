# Case: Clínica Vida+

A Clínica Vida+ é uma clínica com várias especialidades e um corpo clínico
próprio. Hoje o agendamento de consultas é feito por telefone e anotado em
papel, o que gera consultas em duplicidade, pacientes sem confirmação e
nenhuma visão real da agenda de cada médico. A direção da clínica quer
substituir esse controle manual por um sistema web onde o paciente consiga
consultar especialidades e horários disponíveis, a recepção registre e
acompanhe os agendamentos do dia, e o médico veja a própria agenda sem
depender de um recado escrito à mão.

O sistema tem três atores. O paciente consulta as especialidades e os
horários disponíveis e solicita um agendamento. A recepção cadastra
pacientes, confirma, remarca e cancela consultas, e acompanha a agenda do
dia inteiro. O médico consulta a própria agenda e o histórico do paciente
que vai atender, sem precisar telefonar para a recepção a cada dúvida.

Em torno desses atores giram quatro entidades principais. O Paciente é quem
é atendido, identificado por nome, CPF, data de nascimento, telefone e
e-mail. O Médico é quem atende, com nome, CRM e a especialidade a que
pertence. A Especialidade é a área de atuação da clínica, como Cardiologia
ou Pediatria, com nome e descrição. A Consulta é o agendamento em si: liga
um paciente a um médico em uma data e hora determinadas, com um status, que
pode ser confirmada, remarcada ou cancelada, e um campo de observações.

Ao final do semestre, a Clínica Vida+ precisa permitir que a recepção
cadastre médicos e especialidades, que um agendamento possa ser marcado e
cancelado sem esbarrar em conflitos de horário, e que paciente e recepção se
autentiquem no sistema, cada um enxergando apenas o que faz sentido para o
seu papel. As consultas também precisam estar disponíveis por uma API REST,
para que outros sistemas possam consultá-las, e a aplicação inteira precisa
estar publicada, acessível por uma URL na internet, e não apenas rodando na
máquina de quem a construiu.

Esse é o mini mundo que atravessa as vinte aulas da disciplina: cada
encontro faz esse mesmo sistema avançar um passo concreto, da página
estática inicial até a aplicação ASP.NET Core MVC completa, com banco de
dados, autenticação e API publicada.
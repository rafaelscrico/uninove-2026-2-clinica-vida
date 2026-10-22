# Aulas e próximos envios

A identificação e a arquitetura originais estão preservadas na raiz. A pasta aulas tem cópias por etapa.
A versão completa está na branch feature/js-agendamento: abra index.html após baixar ou clonar.
As cópias das aulas 1 e 2 refletem os documentos já existentes; isso não certifica as evidências.

| Aula | Branch | Pull Request |
|---|---|---|
| 1 e 2 | main | Já existiam |
| 3 | feature/pagina-inicial | #1 |
| 4 | feature/estilo-inicial | #2 |
| 5 | feature/agendamento | #3 |
| 6 | feature/js-agendamento | Consulte Pull requests |

## Revisão e integração
O PR #1 fica aberto para a entrega da aula 3. Ainda falta a captura do W3C.
As branches seguintes partem da anterior, para publicar todas as etapas sem antecipar o merge da aula 3.
Depois da avaliação/liberação: integre #1 em main. No PR #2, use Edit e troque a base para main; revise e integre.
Repita com #3 e depois com o PR da aula 6, sempre depois de integrar a etapa anterior.
Não integre uma aula na branch anterior: troque a base para main primeiro.

## Baixar no Windows
Instale Git e abra o terminal do VS Code:
```powershell
git clone https://github.com/rafaelscrico/uninove-2026-2-clinica-vida.git
cd uninove-2026-2-clinica-vida
git switch feature/js-agendamento
```
Abra essa pasta no VS Code. Abra index.html no navegador.
A versão é um exercício local; não possui backend nem grava consultas.

## Enviar uma alteração para a aula 6
Dentro da pasta clonada:
```powershell
git config user.name "Rafael Scrico Oliveira"
git config user.email "SEU EMAIL CADASTRADO NO GITHUB"
git switch feature/js-agendamento
git pull
```
Edite e salve os arquivos. Confira o que mudou:
```powershell
git status
git diff
git add index.html agendamento.html assets
git diff --staged
git commit -m "fix: descreva aqui o ajuste realizado"
git push
```
Esses comandos atualizam o mesmo PR da aula 6. Se editar a versão raiz e quiser manter a cópia da aula sincronizada, copie também os arquivos alterados para aulas/aula-06 e inclua essa pasta no git add.
Na primeira autenticação, conclua o login pelo navegador.

## Próxima aula
Após integrar as anteriores à main:
```powershell
git switch main
git pull
git switch -c feature/aula-07
```
Edite os arquivos, use git add com os caminhos alterados, faça commit e envie:
```powershell
git push -u origin feature/aula-07
```
Abra Pull requests > New pull request. Destino: main do seu próprio fork. Origem: feature/aula-07.

## Verificações
Sintaxe dos dois scripts conferida com Node. IDs, rótulos e caminhos dos recursos conferidos.
Doze casos das regras de CPF, data e horário passaram em teste local.
Ainda pendentes: validação externa no W3C, captura de evidência e teste visual em 360, 768 e 1200 px.
O CPF segue a regra didática de 11 dígitos; não verifica autenticidade.
A aula 5 usa POST /agendamento sem backend. A aula 6 apenas mostra um resumo local.

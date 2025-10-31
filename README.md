# Projeto ODIN - Documentação Oficial

Bem-vindo à documentação do Projeto ODIN. Este repositório serve como a fonte central de informações para a equipa de desenvolvimento, centralizando todos os artefactos e o progresso do projeto.

---

### 🔗 Links Rápidos

- **📊 Apontamento de Atividades:** [Planilha de Atividades Realizadas](https://fatecspgov-my.sharepoint.com/:x:/r/personal/anderson_fernandes3_fatec_sp_gov_br/Documents/Arquivos%20de%20Chat%20do%20Microsoft%20Teams/Apontamento%20das%20Atividades%20Realizadas%20(1)%201.xlsx?d=w0254fcfb84cf49c09eb00b9f839fc727&csf=1&web=1&e=olYHHB&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0)
- **💻 Repositório do Software:** [Odin-Software](https://github.com/CodeGators/ODIN-Software)
- **🤝 Parceiro:** INPE - Laboratório de Sensoriamento Remoto em Agricultura

---

## 🎯 1. Visão do Projeto

> O projeto ODIN visa solucionar a complexidade enfrentada por pesquisadores e estudantes para identificar, aceder e comparar dados geoespaciais gratuitos de diferentes satélites. O objetivo é desenvolver uma aplicação web intuitiva que permita a um utilizador, com um simples clique no mapa, descobrir os satélites disponíveis, comparar variáveis (como NDVI) lado a lado e, assim, escolher o produto de dado mais apropriado para a sua necessidade.

---

## ✅ 2. Requisitos

#### Requisitos Funcionais (RF)

- **RF01:** Permitir ao utilizador selecionar um ponto de interesse num mapa interativo.
- **RF02:** Retornar uma lista de satélites com dados gratuitos para a área selecionada, detalhando resolução e variáveis.
- **RF03:** Permitir a comparação visual (gráficos) de séries temporais de variáveis similares de diferentes satélites.
- **RF04:** Oferecer filtros (por satélite, variável, período) e permitir a exportação de metadados/dados.

#### Requisitos Não Funcionais (RNF)

- **RNF01 (Usabilidade):** Interface intuitiva e de fácil navegação.
- **RNF02 (Performance):** Carregamento rápido de mapas e dados.
- **RNF03 (Escalabilidade):** Capacidade de lidar com o crescimento de utilizadores e fontes de dados.
- **RNF04 (Confiabilidade):** Precisão, atualização e atribuição correta das fontes de dados.

---

## 🚀 3. Sprints & Progresso

O andamento detalhado do projeto, incluindo as tarefas de cada sprint, é gerido através do nosso Trello.

### Sprint 1: "Ponta pé inicial" 
**Período:** 16/09/2025 a 02/10/2025 
**Status:** Meta Atingida

#### Meta da Sprint
O principal objetivo da sprint era ter uma boa compreensão do que era desejado pelo cliente e apresentar uma interface inicial e funcional, visando atingir os requisitos impostos.

#### Resultados e Observações
- **Pontos Positivos:**
    A equipe demonstrou bom entrosamento, cooperação mútua e proatividade dos membros ao auxiliar os demais.
    O desenvolvimento das tarefas propostas foi considerado ágil e efetivo.
    A gestão das documentações da equipe foi bem realizada, baseando-se na metodologia ágil do Scrum.
    A equipe teve a oportunidade de ter contato direto com o cliente para esclarecer ideias e requisitos.
- **Desafios e Dificuldades:**
    Foram encontradas dificuldades com as APIs apresentadas devido à extensa quantidade de informações que elas continham.
    Houve dificuldades em compreender claramente o objetivo principal do projeto, pois alguns requisitos eram ambíguos.
    Surgiram dúvidas sobre a utilização de um banco de dados, uma vez que foi disponibilizada uma API com dados em tempo real.
    A equipe enfrentou dificuldades com a infraestrutura (internet, tomadas, etc.).

  #### BurnDown
  <img width="1100" height="776" alt="image" src="https://github.com/user-attachments/assets/6a861d77-8631-4be9-ba77-922926a40ff2" />


#### Próximos Passos
Apresentar o que foi desenvolvido ao cliente.
Aprimorar e personalizar a parte visual da aplicação.
Aplicar as funcionalidades das demais APIs apresentadas pelo cliente.

- **Sprint 2 (Futura):** Desenvolvimento da página de dados e dashboard, implementação da api WTSS e aperfeiçoamento da estilização.
- **Sprint 3 (Futura):** Planeamento a ser definido.

---

## 🧑‍💻 4. Histórias de Utilizador

#### Mapa Interativo
> **Como usuário,** quero ter uma representação visual de localização, poder mover-me e selecionar regiões.

#### Download das Informações
> **Como usuário,** quero que os dados exibidos possam ser descarregados localmente na minha máquina.

#### Exibição de Percentagem de Nuvens
> **Como usuário,** quero que as informações das percentagens de nuvens de cada região sejam exibidas, tanto a percentagem quanto a imagem.

#### Exibição de Desmatamento
> **Como usuário,** quero que as informações do desmatamento de cada região sejam exibidas.

#### Filtragem por satélite:
> **Como usuário,** quero ter a liberdade de escolher qual satélite me atenderá na exibição das informações.
 
 
#### Filtragem por linha temporal:
> **Como usuário,** quero ter a liberdade de filtrar a linha do tempo dos dados que desejo ver, quero ter acesso a determinados períodos de tempo.

---

## 📁 5. Artefatos do Projeto

Os documentos e arquivos gerados pela equipa estão organizados nas seguintes pastas:

- **[/APIs/](./APIs/)**: Documentação técnica das APIs utilizadas ou desenvolvidas.
- **[/Modelagem BD/](./Modelagem BD/)**: Diagramas, scripts e dicionário de dados do banco de dados.
- **[/Prototipos/](./Prototipos/)**: Arquivos e links para os protótipos de interface (Figma).
- **[/Bibliografia/](./Bibliografia/)**

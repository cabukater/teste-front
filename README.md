# Teste IoT

## Sobre o Projeto

O projeto Teste IoT é uma aplicação desenvolvida para demonstrar uma implementação prática de uma aplicação Internet das Coisas (IoT) utilizando o Angular para o frontend e um servidor Flask para o backend. Este projeto exemplifica a comunicação entre uma interface de usuário construída com Angular e um servidor Flask, provendo uma base para desenvolvimentos mais complexos em sistemas IoT.

### Tecnologias Utilizadas

- **Frontend:** Angular 15.2.0
- **Backend:** Flask (Python 3)
- **Estilização:** Bootstrap 5.3.3 e FontAwesome 6.5.2
- **Testes Unitários:** Jasmine e Karma

### Pré-requisitos

Para rodar este projeto, você precisará ter instalado em sua máquina:

- Node.js (Preferencialmente a versão LTS mais recente)
- Angular CLI (15.2.10)
- Python 3
- Flask

## Configuração do Ambiente

### Passo 1: Clone o Repositório

Primeiro, clone o repositório para a sua máquina local:

```bash
git clone https://github.com/cabukater/teste-front

```

### Passo 2: Instalação das Dependências

Navegue até o diretório do projeto e instale as dependências do Angular:

```bash
cd teste-iot
npm install
```

Para o backend em Flask, assegure-se de ter um ambiente virtual Python configurado e instale as dependências necessárias. Supondo que você já tenha o Python 3 e o pip instalados:

```bash
cd back
python3 -m venv venv
source venv/bin/activate # No Windows use venv\Scripts\activate
pip install flask
```

### Passo 3: Configuração do Backend Flask

Garanta que o script `app.py` está configurado corretamente no diretório `back` e que ele pode ser executado sem problemas.

### Passo 4: Executando a Aplicação

No diretório raiz do projeto Angular, execute o seguinte comando para iniciar simultaneamente o servidor Angular e o servidor Flask:

```bash
npm start
```

Este comando utiliza o pacote `concurrently` para rodar os servidores de frontend e backend em paralelo.

### Passo 5: Acessando a Aplicação

Após iniciar os servidores, a aplicação estará disponível em `http://localhost:4200` no seu navegador, enquanto o backend Flask estará rodando em `http://localhost:5000`.

## Executando Testes

Para executar os testes unitários desenvolvidos para o frontend Angular, utilize o comando:

```bash
npm test
```

Este comando rodará os testes configurados com o Karma e Jasmine, exibindo os resultados no terminal.

## Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para forkar o repositório, fazer suas alterações e abrir um Pull Request para a branch main.

## Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

# Projeto de Gestão de Dispositivos IoT

## Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio técnico para a vaga de Desenvolvedor Front-End Angular no Centro de Pesquisas Avançadas Wernher von Braun. O objetivo é criar uma aplicação Angular para cadastro e compartilhamento de acesso a dispositivos IoT, permitindo aos usuários gerenciar dispositivos (CRUD).

### Tecnologias Utilizadas

- Angular para o frontend
- API REST para integração backend
- SweetAlert2 para feedback visual
- Bootstrap e FontAwesome para estilização

## Funcionalidades

- **Autenticação de Usuários:** Login seguro para acessar as funcionalidades de gestão de dispositivos.
- **Cadastro de Dispositivos:** Interface para adicionar novos dispositivos IoT à plataforma.
- **Visualização de Dispositivos:** Listagem de todos os dispositivos cadastrados com descrição e fabricante.
- **Edição de Dispositivos:** Permite que os proprietários modifiquem informações dos dispositivos cadastrados.
- **Exclusão de Dispositivos:** Remoção de dispositivos da plataforma por seus proprietários.

## Design e Usabilidade

- **Interface Intuitiva:** Fácil de usar, com navegação clara e fluxos de trabalho lógicos.
- **Design Responsivo:** Funciona em desktops, tablets e smartphones.
- **Feedback Visual:** Confirmação de sucesso e mensagens de erro claras.

## Segurança

- Implementação de medidas de segurança para proteção de dados dos usuários e integridade das operações de gestão de dispositivos.

## Testes Unitários

- **Cobertura Inicial:** Foram realizados testes unitários abrangendo funcionalidades principais.
- **Futuras Melhorias:** Reconhecemos a importância de expandir a cobertura de testes para garantir maior confiabilidade.

## Como Rodar o Projeto

```bash
# Clone este repositório
git clone https://github.com/seuusuario/projeto-iot

# Instale as dependências
cd projeto-iot
npm install

# Execute a aplicação
ng serve

# Acesse a aplicação em http://localhost:4200

## REGISTRO DE TRANSAÇÕES - Pedro Paolo de Oliveira Picinin

## INICIALIZAÇÃO

-- Utilize o script pré-configurado: dentro da pasta do projeto -> yarn start

## RESUMO DA APLICAÇÃO

-- É possível cadastrar transações de depósito e de retirada; As transações são registradas no banco simulado pelo MIRAGEjs e apresentadas na tela. Todas as operações são realizadas através de um formulário na forma de um Modal. Como a aplicação não utiliza um banco de dados verdadeiro, os dados não persistem caso a aplicação seja recarregada.

-- Tecnologias Utilizadas:
- create-react-app - estrutura inicial
- Axios - Requisição dos dados
- Miragejs - Banco de dados simulado (https://miragejs.com/) 
- Contexto - compartilhamento de dados entre os componentes
- Styled-components - Estilização (https://styled-components.com/)

## OBSERVAÇÕES

OBS: Importante! Atenção à linha 8 do arquivo App.tsx
Modal.setAppElement('#root');


-- REGISTROS DE TRANSAÇÕES

RESUMO DA APLICAÇÃO

Aplicação desenvolvida em React.Js, durante o desenvolvimento do segundo módulo do curso Ignite da RocketSeat (https://app.rocketseat.com.br/ignite) objetivando a familiarização do aluno com os seguintes conceitos:

- Criação da estrutura da aplicação através do create-react-app

- Componentização: Criação de componentes e implementação dos mesmos no projeto.

- Consumir API: criando FrontEnd sem um backend através do MirageJS, utilização do Axios.

- Utilização de bibliotecas de componentes nativas do React: Criação de Modal para preenchimento de formulário

- Utilização de Contextos e Hooks


-- É possível cadastrar transações de depósito e de retirada; As transações são registradas no banco fake do mirage e apresentadas na tela. Todas as operações são realizadas através de um formulário na forma de um Modal. Como a aplicação não utiliza um banco de dados verdadeiro, os dados não persistem caso a aplicação seja recarregada.

-- A estilização foi feita utilizando o styled-components

--Todos os pacotes instalados para implementação do projeto estão listadas no arquivo "package.json"

INICIALIZAÇÃO

--Utilize o script pré-configurado: dentro da pasta do projeto -> yarn start


<------------------------------------------------------------------------------------------------------------->

OBS: Importante! Atenção à linha 8 do arquivo App.tsx

Modal.setAppElement('#root');
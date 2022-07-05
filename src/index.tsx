import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';
// import {reportWebVitals} from './reportWebVitals';

// Implementação do mirage.js => Banco de dados fake
// criação da instância do servidor, definição dos caminhos e retornos para cada método que poderá ser invocado

createServer({

  //entidade no  Banco de dados interno do Mirage.js

  models: {
    transaction: Model,
  },

  // Populando a tabela modelo transaction com transações aleatórias para que a mesma não comece vazia

  seeds(server){
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Meu primeiro salário',
        type: 'deposit',
        category: 'dev',
        amount: 2200,
        createdAt: new Date('2022-04-07 9:00:00')
      },

      {
        id: 2,
        title: 'Meu primeiro corre',
        type: 'withdraw',
        category: 'beck',
        amount: 250,
        createdAt: new Date('2022-04-07 11:00:00')
      }
    
    ]
    })

  },

  
  routes(){
    this.namespace = 'api';

    this.get('/transactions' , ()=> {

      // Retorna todos os dados dentro do modelo passado como parâmetro
      return this.schema.all('transaction')
    })

    // Método POST mirage!!! Verificar documentação para entender os parâmetros 
    // Os valores são retornados como texto, logo, utiliza-se JSON.parse

    this.post('/transactions' , (schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      // schema representa o banco de dados
      // parâmetros esperados: em qual Model será inserido + quais dados serão inseridos

      return schema.create('transaction' , data);

    })

    

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


// reportWebVitals();

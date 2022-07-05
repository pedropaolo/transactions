import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import  Modal  from 'react-modal';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './TransactionsContext';



// --> IMPORTANTE!!! ADICIONAR POR QUESTÃO DE ACESSIBILIDADE

Modal.setAppElement('#root');

// IMPORTANTE!!! ADICIONAR POR QUESTÃO DE ACESSIBILIDADE <--

export function App() {

  
  // criação de variável de estado através do hook useState
  // array com nome da variável de estado , função que altera o estado
  // Do outro lado, setamos o hook e o valor inicial do estado utilizado;

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  // funções que operam o estado do modal, de acordo com as interações do usuário

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
    }

  function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }


  return (
    
      // Contexto TransactionsContext é compartilhado por todos os elementos que ele envolve!
      // Para este caso, todos: Header, Dashboard, NewTransactionsModel
      // value => obrigatório => valor do contexto (atual)
      // Agora o provider pode ser consumido! TransactionsContext.Consumer --> SUMARY

      <TransactionsProvider>
     
      {/* Controle do estado da aplicação é feito a partir do componente Header */}
      <Header onOpenNewTransactionModal= {handleOpenNewTransactionModal}/>

      <Dashboard/>

      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
      </TransactionsProvider>
      
  );
}



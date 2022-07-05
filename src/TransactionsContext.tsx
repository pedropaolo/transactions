import { createContext, useState, useEffect, ReactNode } from 'react'
import { api } from './services/axios';

interface Transactions {
    id: string,
    title: string,
    amount: number, 
    type: string,
    category: string, 
    createdAt: string

}

type TransactionsInput = Omit<Transactions, 'id' | 'createdAt'>

interface TransactionsContextData {
    transactions: Transactions[],
    createTransaction: (transaction : TransactionsInput) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode
}


// Criação do contexo e definição do valor inicial
//Create context

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );

// Contexto retorna, para este caso, um componente.
// Componente realiza chamada à API através do hook useeffect e os armazena em uma variável de estado
//É possível observar na declaração do estado, que o mesmo armazena um array do tipo Transactions



export function TransactionsProvider({ children }: TransactionsProviderProps) {
    
    // Criação de um estado que armazena dados vindo da api, no caso, um array de objetos
    // useState<Transactions[]>([]) ===>> TYPESCRIPT INDICA QUE O ESTADO É UM ARRAY DE TRANSAÇÊS, DEFINIDO EM INTERFACE

    const [ transactions , setTransactions] = useState<Transactions[]>([]);
    
    // Método GET executado eplo useEffect está definido em index.tsx; faz a requisição da api e resgata um array de objetos. Utiliza a função setTransactions para alterar o estado de transactions e armazenar os dados resgatados

    useEffect(
        ()=>{
            api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
        },
        []);

    // Esta função aqui definida realiza a postagem dos dados na API do mirage
    // função assincrona que retorna uma promisse

    // transactionsInput corresponde ao dado que é recebido como parâmetro para que a função funcione

        async function createTransaction(transactionsInput: TransactionsInput){

            const response =  await api.post('transactions', {
            ...transactionsInput,
            createdAt: new Date()
        });
            const { transaction } = response.data;

            // Adicionando a informação nova ao array já existente
            setTransactions([
                ...transactions,
                transaction
            ])
             console.log("POSTADO PAIZAO");
            
        }

        // A Prop children garante que o componente jsx possa receber algo como parâmetro.
        // Neste caso, isso é importante para que a tag de fato possa envolver outras tags

    return <TransactionsContext.Provider value={{ transactions , createTransaction}}>
            {children}
            </TransactionsContext.Provider>
}


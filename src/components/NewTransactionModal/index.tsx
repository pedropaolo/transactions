import Modal from 'react-modal'
import { Container , NewTransactionContainer, RadioButton } from './styles';
import ImgClose from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { FormEvent, useContext, useState } from 'react';
import { api } from '../../services/axios';
import { TransactionsContext } from '../../TransactionsContext';


// Definiçao props typescript: Seguem o mesmo princípio do Modal puro trazido de react-modal
// Recebe um booleano ( estado ) que indica se o modal está aberto ou fechado
// Recebe a função que altera o estado do modal para fecha-lo

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: ()=> void;
}

// Modal.setAppElement('root');


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps ){

    const { createTransaction } = useContext(TransactionsContext)

    // É criado um estado para cada um dos valores do formulário
    // Título
    const [title , setTitle] = useState('');
    // Valor
    const [amount , setAmount] = useState(0);
    // Categoria
    const [category , setCategory] = useState('');
    //Tipo (definido pelo Radio button)
    const [ type, setType] = useState('deposit')

    function handleIncomeClick() {

        setType('deposit');
        
    }

    function handleOutcomeClick() {
        
        setType('withdraw');
    }

    // ON SUBMIT: Trata os dados do formulário apoós o mesmo ser submitado kkkkkk

    async function handleCreateNewTransaction(event : FormEvent) {
        event.preventDefault();

        // Função que posta nova transação na api do Mirage é definida dentro do próprio contexto

        await createTransaction({
            title,
            amount,
            type,
            category,
        })

        // Antes de fechar o modal, é necessário zerar as variáveis de estado do Modal
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    return(

    // Em caso de dúvida com relação às props do componente Modal, verificar a documentação: react-modal

        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

        <button type='button' onClick={onRequestClose} className="react-modal-close">
            <img src={ImgClose} alt="fechar-modal" />
        </button>


        <Container onSubmit={handleCreateNewTransaction}>
            
            <h2>Cadastrar Transação</h2>

            {/* value: campo aponta para variável de estado que vai armazenar o valor do input
                onChange é a propriedade que realiza uma função quando o valor do input é alterado */}
            <input 
            placeholder='Título' 
            value={title} 
            onChange={event => setTitle(event.target.value)} />

            {/* event.target.value sempre retorna um valor do tipo string 
            método Number realiza a transformação de string para número
            */}
            <input 
            placeholder='Valor' 
            type='number' 
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
            />

            {/* Div com os botões que definem o tipo da transação ( entrada ou saída ) */}

            <NewTransactionContainer>
                <RadioButton 
                type='button' 
                onClick={handleIncomeClick}
                isActive={type === "deposit"}
                >
                    <img src={IncomeImg} alt="entrada" />
                    <span>Entrada</span>
                </RadioButton>

                <RadioButton 
                type='button' 
                onClick={handleOutcomeClick}
                isActive={type === "withdraw"}
                >
                    <img src={OutcomeImg} alt="saída" />
                    <span>Saída</span>
                </RadioButton>
            </NewTransactionContainer>

            <input 
            placeholder='Categoria' 
            value={category} 
            onChange={event => setCategory(event.target.value)} 
            />

            <button type="submit">Cadastrar</button>


        </Container>
         
         

        </Modal>
    )

}
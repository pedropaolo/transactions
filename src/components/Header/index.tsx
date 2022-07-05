import LogoImg from '../../assets/favicon.png'
import { Container , Content } from './styles'
// import Modal from 'react-modal'

// Typescript utilizado nas props: descreve o que o componente recebe e  seu tipo
// Neste caso, a prop recebida (onOpenNewTransactionModal) é uma função que altera um estado definido dentro de App.tsx, onde o componente é invocado
// No parâmetro de header, passa-se a tipagem da prop 

interface HeaderProps {
    onOpenNewTransactionModal: ()=> void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){

    return (
        <>
        <Container>
            <Content>
                <header>
                    <img src={LogoImg} alt="logo-img" />
                    <button type="button" onClick={onOpenNewTransactionModal}>
                        NOVA TRANSAÇÃO
                    </button>
                </header>
            </Content>
        </Container>
        </>
    )
}
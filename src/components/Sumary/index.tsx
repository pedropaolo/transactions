import { Container } from "./styles"
import EntradaImg from '../../assets/income.svg'
import SaidaImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext"
import { useContext } from "react"

export function Sumary(){

    // Hook useContext!

    const { transactions } = useContext(TransactionsContext);
    console.log("hook trazendo contexto", transactions)


    const sumary = transactions.reduce((acc , transaction) => {
        if(transaction.type === 'deposit'){

            acc.deposits += transaction.amount;
            acc.total += transaction.amount;

        }

        else {

            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;

        }

        return acc;

    }, 
    {
        deposits: 0,
        withdraws: 0,
        total: 0

    })

    return(
            <Container>

                <div>
                    <header>
                        <p>Entrada</p>
                        <img src={EntradaImg} alt="imagem-entrada" />
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-BR' , {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(sumary.deposits)}
                    </strong>
                </div>

                <div>
                    <header>
                        <p>Saída</p>
                        <img src={SaidaImg} alt="imagem-saida" />
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-BR' , {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(sumary.withdraws)}
                    </strong>
                </div>

                <div className="highlighted-div">
                    <header>
                        <p>Total</p>
                        <img src={TotalImg} alt="imagem-total" />
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-BR' , {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(sumary.total)}
                    </strong>
                </div>
            </Container>
            
        
        
    )
}
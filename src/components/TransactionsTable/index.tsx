
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";


export function TransactionsTable() {

    // Importação das transações através de hook useContext

    const { transactions } = useContext(TransactionsContext);
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        // TODO METODO MAP PRECISA DO PARAMETRO KEY ESPECIFICADO

                        // Utilização de Intl para formatação da data e dos valores financeiros
                        transactions.map( transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    { new Intl.NumberFormat('pt-BR' , {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    { new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.amount)
                                )}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </Container>
        
    )
}
import styled from "styled-components";

export const Container = styled.form`

h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    
}

input {

    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-size: 1rem;

    /* Para todo input que tiver um input antes dele */
    & + input{
        margin-top: 1rem;
    }

}

/* Proprieadde de estilização válida apenas para botões do tipo submit */

button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1rem;
    border: 0;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);
    }




}


`

export const NewTransactionContainer = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;

`

// Definição de prop para um styled component
// Utilizado neste caso para definir se o botão está ou não ativo

interface RadioBoxProps {
    isActive: boolean;
}

export const RadioButton = styled.button<RadioBoxProps>`
        width: 49%;
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        font-size: 1rem;
        padding: 0 1.5rem;

        /* Condicional para uma estilização! Se a prop isActive for TRUE #eee, se não, transparent
        a prop definida acima recebe o estado do button para definir a cor do mesmo
        */
        background: ${(props)=> props.isActive ? '#ccc' : 'transparent' };

        display: flex;
        justify-content: space-around;
        align-items: center;
`
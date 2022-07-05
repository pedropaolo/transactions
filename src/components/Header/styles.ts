import styled from "styled-components";

export const Container = styled.header`
background: var(--blue);
`

export const Content = styled.div`

max-width: 1120px;
margin: 0 auto;
padding: 2rem 1rem 10rem;

header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}


button {
    font-size: 1rem;
    color: #FFFF;
    background-color: var(--blue-light);
    height: 3rem;
    border-radius: 0.25rem;
    padding: 0 2rem;

    /* Ao passar o cursor por cima do botão */

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);
    }
    
}
`
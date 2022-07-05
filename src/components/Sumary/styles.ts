import styled from "styled-components"

export const Container= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: -5rem;

div {
    background: #FFFF;
    padding: 1.5rem;
    /* border: solid red 2px; */
    border-radius: 0.3rem;
    width: 30%;
    color: var(--text-title);

    /* Assim se usa uma classe no styled-components */
    
    &.highlighted-div {
    background: var(--green);
    color: #FFFF;
}
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

strong {
    display: block;
    font-size: 1.5rem;
    margin-top: 1rem;
}


`
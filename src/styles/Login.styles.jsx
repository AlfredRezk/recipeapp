import styled from "styled-components";


export const LoginContiner = styled.div`
height:100vh;
display: flex;
justify-content: center;
align-items: center;


form{
    width: 400px;
    min-width: 400px;
}
input{
    width: 100%;
    margin-top: 1rem;
}

`;


export const Button = styled.button`
margin-top: 1rem;
background-color: ${({theme})=> theme.palette.secondary.main};
color: white;
&:hover{
    background-color: ${({theme})=> theme.palette.secondary.dark};
    transition: all 0.3s ease-in;
}
`;

export const Error = styled.p`
color: red;
font-size: 12px ;
margin-top: 0.25rem;
`;
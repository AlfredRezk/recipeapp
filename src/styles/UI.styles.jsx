import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.containerWidth};
  width: 100%;
  margin: 0 auto;
`;

export const Stack = styled.div`
    display: flex;
    flex-direction: ${({direction})=> direction};
    flex-wrap: wrap;
    justify-content:  ${({justify})=> justify};
    align-items:  ${({align})=> align};
    gap:${({gap})=> gap};

`

export const Card = styled.div`
    border:${({border})=> border };
    background-color: ${({bg})=> bg };
    color: ${({color})=> color };
    padding: 2rem;
    border-radius: 5px;
    box-shadow: ${({shadow})=> shadow&&'1px 1px 5px rgba(0,0,0,0.4)'};
`

import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailsContainer = styled.div`
  z-index: -1;
  margin-top: 100px;
  width: 100%;
  padding: 1rem;
  h3 {
    text-align: center;
  }

  .right-side {
    flex: 1;
    margin-left: 2rem;
    @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
      margin: 0;
    }
  }

  #nutrients-card{
    margin-top: 1rem;
    @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
      margin: 0;
    }
  }
`;

export const StyledImage = styled.img`
  width: 30%;
  max-height: 400px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h2`
margin-bottom: 0.5rem;
text-align: center;
color: ${({theme})=> theme.palette.primary.main};
`

export const List = styled.ul`
margin-top:0.5rem;
font-size: 18px;
li{
    margin-bottom: 0.1rem;
    text-align:left;
}
`


export const Section = styled.section`
width:30%;
margin-top: 1rem;
@media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    width: 100%;
}
`;

export const Button = styled(Link)`

padding:  0.5rem 1rem;
color: white;
background-color: ${({theme})=> theme.palette.primary.main};
font-size: 1rem;
border: none;
border-radius: 5px;
margin-top: 1rem;
display: inline-block;
cursor: pointer;
`;

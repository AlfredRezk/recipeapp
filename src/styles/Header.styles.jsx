import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 1rem;
  margin-bottom: 2rem;

  h2{
    font-size: 30px;
    margin-bottom: 1rem;
    text-align: center;
  }

  .searchIcon {
    font-size: 20px;
  }

  select{
    border-radius: 5px;
    padding: 5px;
    border: none;
    font-size: 1rem;
    outline: none;
    width: 25%;
    height: 2.5rem;
    @media screen and (max-width: ${({theme})=> theme.breakpoint}){
        width:100%
    }

    .form-fields{
        @media screen and (max-width: ${({theme})=> theme.breakpoint}){
        flex-direction: column;
        width: 100%;
    }
    }

  }
`;

export const Button = styled.button`
background-color: ${({theme})=> theme.palette.primary.main};
color: white;
&:hover{
    background-color: ${({theme})=> theme.palette.primary.dark};
    transition: all 0.3s ease-in
}
`;

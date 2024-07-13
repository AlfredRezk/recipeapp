import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body{
    font-family: "Roboto", sans-serif;
    background-image: url('/img/login1.png'), url('/img/login2.png');
    background-repeat: no-repeat, no-repeat;
    background-size: auto, auto;
    background-position: right top, bottom left;
    background-attachment: fixed;
    @media screen and (max-width:${({theme})=> theme.breakpoint}){
        background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/img/login1.png'), url('/img/login2.png');
    }
}



a{
    text-decoration: none;
}

button{
    padding: 0.5rem 1rem;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
input{
    height: 2.5rem;
    outline: none;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
}

.text-center{
    text-align: center;
}

.text-primary{
 
    color: ${({theme})=> theme.palette.primary.main}
}

.text-secondary{
 
 color: ${({theme})=> theme.palette.secondary.main}
}


`


export default GlobalStyles
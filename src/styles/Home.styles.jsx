import styled from "styled-components";
import { Card } from "./UI.styles";

export const HomeContainer = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;

    img{
        width: 100%;
        margin-top: 1rem;
    }


`

export const StyledCard = styled(Card)`

width:24%;
padding: 1rem;
text-align: center;
border-radius: 0;
position: relative;


@media screen and (max-width: ${({theme})=> theme.breakpoint}){
    width: 100%;
    margin-left: 1rem;
    margin-right: 1rem;
}
`;


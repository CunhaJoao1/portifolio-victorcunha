import styled from "styled-components";
import { Card } from "./Cards";




const Div = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #010208;
    color: aliceblue;
    padding: 5rem 5%;
    .title{
        h3{
            font-family: 'Work Sans';
            font-size: clamp(35px, 50%, 40px);
            font-weight: 400;
            color: #7D7D81;
            margin-bottom: 3rem;
            span{
                font-weight: 600;
                color: aliceblue;
            }
        }
    }
`
export function Projetos(){
    return(
        <Div>
            <div className="title">
                <h3>Alguns dos meus <span>Projetos</span> </h3>
            </div>
            <div className="cards">
                <Card/>                 
            </div>
        </Div>
    )
}
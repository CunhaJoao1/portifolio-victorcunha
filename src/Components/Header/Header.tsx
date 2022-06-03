import styled from "styled-components"
import { Link } from "react-router-dom"
const Div = styled.div`
    width: 100%;
    height: 7vh;
    background-color: #010208;
    color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    ul{
        display: flex;
        gap: 2rem;
        li{
        list-style: none;
        cursor: pointer;
        font: 600 16px 'Work Sans';
        transition: all .2s ease;
        &:hover{
            background: linear-gradient(to right top, #bc3cd8, #c63ac1, #c93dad, #c9439b, #c54b8c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
             }
        }
    }
    
`
export function Header(){
    return(
        <Div>
            <h2 className="logo">Victor Cunha</h2>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>SOBRE</li>
                    <li>TRABALHOS</li>
                </ul>
            </nav>
        </Div>
    )    
}
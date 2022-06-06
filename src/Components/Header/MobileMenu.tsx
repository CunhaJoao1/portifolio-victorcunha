import { ReactNode } from "react";
import styled from "styled-components";



const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #111;
    position: absolute;

    z-index: 10;

    top: 0;
    left: 0;
    nav{
        height: 100vh;
        ul{
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            li{
                font-size:38px;
            }
        }
    }

`
type MobilePrps = {
    content: ReactNode
}
export function MobileMenu(props: MobilePrps){
    return(
        <Div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Proejetos</li>
                </ul>
            </nav>
        </Div>
    )
}
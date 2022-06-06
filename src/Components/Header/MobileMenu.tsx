import { ReactNode } from "react";
import styled from "styled-components";
import {motion} from "framer-motion"


const Div = styled.div`
    
    .menu{
        width: 100vw;
        height: 70vh;
        background-color: #2a2b2e;
        position: absolute;

        z-index: 10;

        top: 0;
        left: 0;
        nav{
        height: 70vh;
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
    }
   

`
type MobilePrps = {
    content: ReactNode,
    openMenu: boolean
}
export function MobileMenu(props: MobilePrps){
    return(
        <Div>
            <motion.div className="menu"
            initial={{ height: 0}}
            animate={{ height: '70vh'}}
            exit={{ height: 0}}>
                <motion.nav
                >
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Proejetos</li>
                    </ul>
                </motion.nav>
            </motion.div>
            
        </Div>
    )
}
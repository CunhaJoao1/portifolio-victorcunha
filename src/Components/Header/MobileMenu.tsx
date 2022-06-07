import { ReactNode } from "react";
import styled from "styled-components";
import {motion} from "framer-motion"


const Div = styled.div`
    
    .menu{
        width: 100vw;
        height: 100%;
        background-color: #2a2b2e;
        position: fixed;

        z-index: 10;

        top: 0;
        left: 0;
        nav{
        height: 100%;
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
    openMenu: boolean,
    sections: string[]
}
export function MobileMenu(props: MobilePrps){
    return(
        <Div>
            <motion.div className="menu"
            initial={{ height: 0}}
            animate={{ height: '100vh'}}
            transition={{duration: 0.2, stiffness: 100}}
            exit={{ height: 0}}>
                <motion.nav
                >
                    <ul>
                        {props.sections.map((section) =>{
                            return <li>{section}</li>
                        })}
                    </ul>
                </motion.nav>
            </motion.div>
            
        </Div>
    )
}
import styled from "styled-components";
import {GrReactjs} from "react-icons/gr"
import {motion} from "framer-motion"
import {MdKeyboardArrowDown} from "react-icons/md"
import { Link, BrowserRouter } from "react-router-dom";
import { HeaderNavigation } from "../Header/Header";

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #010208;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: relative;
    .title{
        color: aliceblue;
        text-align:center;
        width: min(5000px, 70%);
        font-family: 'Work Sans';
        font-weight: 300;
        font-size: clamp(30px , 56px, 5vw);
        color: #E3E4E68C;
        span{
            font-weight: 600;
            color: white;
        }
    }
    .buttons{
        gap: 2rem;
        button{
            height: clamp(3rem, 5rem, 2vw);
            cursor: pointer;
            padding: 0 .5rem;
            font-family:'Work Sans';
            font-weight: 600;
            font-size:  clamp(10px, 16px, 2vw);
            
            background: linear-gradient(to right top, #bc3cd8, #c63ac1, #c93dad, #c9439b, #c54b8c);
            border: 2px solid white;
            border-radius: 5px;
            color: white;

            margin-top: 2rem;
            margin-left: min(2rem, 1vw);
        }
    }
    .arrow{
        position: absolute;
        bottom:2rem;
        cursor: pointer;
        animation: arrow .5s infinite alternate;
        @keyframes arrow {
            0%{
                transform: translateY(7%);
            }
            100%{
                transform: translateY(0);

            }
        }
    }
    
`
export function Home(){
    const variants = {
        hidden: { opacity: 0, scale: 0.9},
        visible: { opacity: 1, scale: 1},
      } 
      window.onscroll = function(){changePageScroll()}
    return(
        <Div>
            <motion.h1 className="title" 
            initial="hidden"
            animate="visible"
            transition={{duration: 1}}
            variants={variants}>
                Eu sou <span>Victor Cunha</span>, em uma incansável jornada para me tornar um <span>Frontend Developer</span>  especialista em <span>React</span> <GrReactjs color="#61DAFB"/> </motion.h1>

            <motion.div className="buttons"
             initial={{ opacity: 0, y: 50}}
             animate={{ opacity: 1, y:0}}
             transition={{duration: 1}}
             >
                <button type="button">Download CV</button>
                <button type="button">Entrar em contato</button>
            </motion.div>
         <Link to="/sobre" className="arrow"><div className="arrow"><MdKeyboardArrowDown color="white" size={'2em'}/></div> </Link>
        </Div>
    )
}

function changePageScroll() {
    console.log("Ola mundo")
}

import styled from "styled-components";
import { motion } from "framer-motion";

import imageEu from "/src/assets/eu01.jpg"
import imageEu2 from "/src/assets/eu02.jpg"

import {IoIosArrowForward} from "react-icons/io"
import { Link } from "react-router-dom";

const Div = styled.div`
    width: 100%;
    min-height: 93vh;
    height: 100%;
    
    background-color: #010208;
    padding: 5rem 0;
    /* display: flex;
    flex-direction: column;
    align-items: center; */

    .content{
        color: aliceblue;
        text-align: center;       
        h4{
            margin-bottom: 29px;
            text-align: left;
            font-family: 'Work Sans';
            font-weight: 600;
            font-size: clamp( 50%,30px,35px) ;
        }
        .images{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;

            @media screen and (max-width: 890px) {
                flex-direction: column;
            }
            .image-div{
                width: min(90%, 24rem);
                img{
                    width: 100%;
                    border-radius: 10px;
                    height: 37.0625rem;
                    object-fit: cover;
                    }
                .image2{
                    margin-top: 4rem;
                    }
            }
            
        }

        .apresentacao{
            display: grid;
            grid-template-areas: 
            ". title ."
            ". content ."
            ". button .";
            grid-template-columns: auto min(90%, 50rem) auto;
            .title-apres{
                grid-area: title;
                margin-top: 70px;
            }
            .content-apres{
                grid-area: content;
                text-align: justify;
                font-family: 'Work Sans';
                font-weight: 400;
                font-size: clamp( 20px,50%,30px) ;
            }
            .contato{
                grid-area: button;
                margin-top: 2rem;
                text-align: left;
                button{
                    padding: 0.8rem 1.5rem;
                    background-color: #0078D7;
                    color: aliceblue;
                    font-family: 'Work Sans';
                    font-weight: 600;
                    font-size: clamp( 50%,16px,15px) ;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                    transition:background .2s ease ;
                    &:hover{
                        background-color: #1683dc;
                    }
                }
            }
        }       
        
    }
`
export function Sobre(){
    return(
        <Div>
            <motion.div className="content">
                <div className="images">    
                    <div className="image-div">
                        <h4>Esse aí sou eu!</h4>
                        <img src={imageEu} alt="" />
                    </div>
        
                    <div className="image-div">
                        <img src={imageEu2} className="image2" alt="" />
                    </div>
                </div>
                <div className="apresentacao">
                    <h4 className="title-apres">E quem sou eu?</h4>
                    <p className="content-apres">Acima de tudo, um apaixonado por tecnología. Nascido e criado no Piuaí, comecei a faculdade de sistemas de infomação em 2019. Comecei a trabalhar com tecnología no Rio de Janeiro como Programador RPA, mas a minha grande paixão é o desenvolvimento Frontend em especial com React 💙</p>
                    
                   <div className="contato">
               <Link to={"/projetos"}>    <button>
                       Projetos <IoIosArrowForward/>
                   </button> </Link>

                   </div>
                </div>
            </motion.div>
        </Div>
    )
}
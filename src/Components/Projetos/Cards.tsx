import styled from "styled-components";
import chat_img from "../../assets/chatapp.png"
import {IoIosArrowForward} from "react-icons/io"


const Div = styled.div`
    display: grid;
    margin-bottom: 6rem;

    grid-template-areas: 
                        ". image . ."
                        ". image content .";
    grid-template-columns:auto clamp(15rem, 50%, 25rem) min(50%, 50rem);
    @media screen and (max-width: 650px) {
        grid-template-columns:auto clamp(15rem, 50%, 25rem) min(35%, 50rem);
        
    }
    @media screen and (max-width: 425px) {
        grid-template-areas: 
                        ". image ."
                        ". content .";
    grid-template-columns: auto min( 90%,22rem) auto;

    }
    gap: 1rem;
    .image{
        grid-area: image;
        img{
            width: 100%;
            border-radius: 15px;
            object-fit: cover;
        }
    }
    .text{
        grid-area: content;
        h5{
            font-family: 'Work Sans';
            font-size: 16px;
            font-weight: 600;
        }
        .description{
            font-family: 'Work Sans';
            font-size: clamp(1.3rem , 3vw, 2rem);
            font-weight: 400;
            color: #7D7E81;

            margin: 1rem 0 1.5rem 0;
            span{
                font-family: 'Work Sans';
                font-size: inherit;
                font-weight: 600;
                color: aliceblue;
            }
        }
        .type{
            font-family: 'Work Sans';
            font-size: 18px;
            font-weight: 400;
            color: #E3E4E6;
        }
        button{
            border: 1px solid #7D7E81;
            border-radius: 100px;
            padding: .3rem 1rem;
            background: none;
            font-family: 'Work Sans';
            font-size: 16px;
            font-weight: 400;
            color: #E3E4E6;

            display: flex;
            align-items: center;

            cursor: pointer;
            margin-top: 2rem;
            p{
                margin-top: .35rem;
            }
            
            transition: all .2s ease;
            &:hover{
                background: linear-gradient(to right top, #bc3cd8, #c63ac1, #c93dad, #c9439b, #c54b8c);
                font-weight: 600;

            }
        }
    }
`

export function Card(){
    return(
        <Div>
            <div className="image">
                <img src={chat_img} alt="" />
            </div>
            <div className="text">
                <h5>REAL TIME CHAT APP</h5>
                <p className="description">Um web app que utiliza <span>React, NodeJS e Socket.io como WebSockets</span> para usar como um aplicativo de mensagens instantâneas</p>
                <p className="type">Web App</p>
                <button type="button" onClick={()=>window.open("https://github.com/CunhaJoao1/RealTimeChat", "_blank")}>Ver projeto <p><IoIosArrowForward size={'1.5em'}/></p> </button>
            </div>
        </Div>
    )
}
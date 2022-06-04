import styled from "styled-components";
import { useState, ChangeEvent, FormEvent } from "react";
const Div = styled.div`
    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input, textarea{
            width: 100%;
            height: 3rem;
            border-radius: 15px;
            resize: none;
            padding: 0 2rem;
            color: aliceblue;

            font: 400 16px 'Work Sans';
            border: 1px solid aliceblue;
            background:none ;
            &:focus{
                outline: none;
            }
            &::placeholder{
                font-family: 'Work Sans';
                font-weight: 400;
                font-size: clamp( 20px,50%,30px) ;

            }
        }
        textarea{
            height: 7rem;
            padding-top: 1rem;
        }
        button{
            width: 15rem;
            height: 3rem;
            border-radius:15px;
            cursor: pointer;
            background-image: linear-gradient(to right top, #0078d7, #007bd4, #007dd0, #0080cc, #0082c8);
            border: 1px solid aliceblue;
            color: aliceblue;
            font:600 18px 'Work Sans';

            transition: all .2s ease;
            &:hover{
                transform: scale(1.01);
            }
            &:active{
                transform: scale(0.99);
            }
        }
    }
`
export function Contato(){
    return(
        <Div>
            <form>
                <input type="text" name="userName" id="" placeholder="Seu nome" />
                <input type="email" name="userMail" id="" placeholder="Email" />
                <textarea name="userMessage" id="" placeholder="Digite sua menssagem" ></textarea>
                <button type="submit">Enviar</button>
            </form>
        </Div>
    )
}
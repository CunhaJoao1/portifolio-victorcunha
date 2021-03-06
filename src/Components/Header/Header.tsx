import styled from "styled-components"
import {Link} from "react-router-dom"

import { useState, useEffect } from 'react';

import { Squash as Hamburger } from 'hamburger-react'
import { MobileMenu } from "./MobileMenu";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Div = styled.div`
    width: 100%;
    height: 7vh;
    background-color: #010208;
    color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;

    position: fixed;
    z-index: 1000;
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
    .toggle{
      position: absolute;
      z-index: 150;
      right: 5%;
    }
    
`
const Nav = styled.nav`
  ul{
    li{
      color: aliceblue;
    }
  }
`
const LinkStyle = `list-style: none; color: inherit;`
export function HeaderNavigation(){
    const { height, width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false)

    function Navigation(){
      return(
            <Nav>
              <ul>
              <Link to={"/"}><li> HOME </li></Link>  
                <Link to={"/sobre"}><li>SOBRE</li></Link>  
                <Link to={"/projetos"}> <li>PROJETOS</li></Link>             
              </ul>
            </Nav>
      )
    }
    return(
        <Div>
            <>                
                <h2 className="logo">Victor Cunha</h2>
                {width > 768? <Navigation/>:  
                <> 
                  <div className="toggle">
                    <Hamburger toggled={isOpen} toggle={setIsOpen}/>
                  </div> 
                  {isOpen? <MobileMenu setOpen={(data: boolean)=>setIsOpen(data)} sections={["Home", "Sobre", "Projetos"]} openMenu={isOpen} content/>: ''}
                </>}                 
            </>
        </Div>
    )    
}
import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  function menu() {
    return (
      <>
        <p><a href='/home'>Home</a></p>
        <p><a href='/whatgpt3'>What is Gpt3?</a></p>
        <p><a href='/openai'>OpenAI</a></p>
        <p><a href='/library'>Library</a></p>
        <p><a href='/casestudies'>CaseStuduies</a></p>
      </>

    );
  }
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-link'>
        <div className='gpt3__navbar-links-logo '>
          <img src={logo} />
        </div>
        <div className='gpt3__navbar-links-container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>

        </div>
      </div>
      
      <div className='gpt3__navbar-sign'>

        <button className='gpt3__navbar-sign-signin'>Sign in</button>
        <button className='gpt3__navbar-sign-signup' style={{backgroundColor:"#ff4820",padding:"1rem 2rem",borderRadius:"0.3rem"}}>Sign up</button>

      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size='27 ' onClick={() => { setToggleMenu(false); }} />
          : <RiMenu3Line color='#fff' size='27 ' onClick={() => { setToggleMenu(true); }} />
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
              <div className='gpt3__navbar-menu_container-links-sign'>
              <div className='gpt3__navbar-sign' style={{display:"block"}}>
                <button>Sign in</button>
              </div>
              <div className='gpt3__navbar-sign' style={{display:"block"}}>
                <button>Sign up</button>
              </div>
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  )
}

export default Navbar

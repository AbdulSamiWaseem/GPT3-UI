import React from 'react';
import {Article,Brand,CTA,Navbar,Feature} from './components/index'
import {Header,Footer,Features,WhatGPT3,Possibility,Blog} from './containers'
import './app.css'
function App(){
    return(
   <div className='App'>
    <div className='bg_gradient'>
        <Navbar/>
        <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>

   </div>
    )
}

export default App;

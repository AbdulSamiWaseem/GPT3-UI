import React from 'react';
import './feature.css';
import rectangle from '../../assets/Rectangle_26.png'

const Feature = (props) => {
  return (
    <div className='gpt3__feature'>
    <img src={rectangle}/>
    <h1>{props.title}</h1>
    <div>{props.detail}</div>
     
    </div>
  )
}

export default Feature

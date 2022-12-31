import React from 'react'
import CardButton from '../cardbutton/cardbutton'
import { snapvoteClick } from '../functions/functions'
const Card = ({title,onClick, handleRepo,img }) => {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <div className='card-img-div'>
            <img src={img}></img>
            </div>
            <div className='button-container'>
            <CardButton className='button' onClick={onClick} onClickRepo={handleRepo}>Visit me</CardButton>
            </div>
           
        </div>
    )
}

export default Card
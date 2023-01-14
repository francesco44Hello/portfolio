import React from 'react'
import CardButton from '../cardbutton/cardbutton'
import { snapvoteClick } from '../functions/functions'
const Card = ({title,onClick, handleRepo,img }) => {
    
    return (
        <div className='card '>
            <>
            <img src={img}></img>
            </>
            <div className='bottom-card'>
            <h2>{title}</h2>
            <div className='button-container'>
            <CardButton className='button' onClick={onClick} onClickRepo={handleRepo}>Visit me</CardButton>
            </div>
            </div>
            
           
        </div>
    )
}

export default Card
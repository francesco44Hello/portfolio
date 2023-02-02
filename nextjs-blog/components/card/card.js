import React from 'react'
import CardButton from '../cardbutton/cardbutton'
import Image from 'next/image'
const Card = ({title,onClick, handleRepo,img }) => {
    
    return (
        <div className='card '>
            <>
            <Image src={img} width={1000} height={1000} alt='project-picture'></Image>
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
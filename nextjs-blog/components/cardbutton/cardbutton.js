import React from 'react'

const CardButton = ({onClick,onClickRepo}) => {
    return (
        <>
        <button className='button' onClick={onClick}>Visit me</button>
        <button className='card-button' onClick={onClickRepo}>Github</button>
        </>
       

    )
}

export default CardButton
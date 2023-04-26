import React from 'react'
import Image from 'next/image'

const CardTest = ({title, img, Subtitle, label1, label2, label3, label4, description,link}) => {
    return (
        <div className="projcard-innerbox">
        <a href={link} alt='link' target='_blank' style={{textDecoration: 'none', color: 'black'}}>
        <Image className="projcard-img" src={img} width={2000} height={2000} alt='Francesco Longo project image'/>
        <div className="projcard-textbox">
          <div className="projcard-title">{title}</div>
          <div className="projcard-subtitle">{Subtitle}</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">{description}</div>
          <div className="projcard-tagbox">
          {/* {labels.map(function(label){
            return (
                <span class="projcard-tag">{label}</span>
            )
          })} */}
            <span className="projcard-tag">{label1}</span>
            <span className="projcard-tag">{label2}</span>
            <span className="projcard-tag">{label3}</span>
            <span className="projcard-tag">{label4}</span>
          </div>
        </div>
        </a>
      </div>
    )
}

export default CardTest
import React, { useState } from 'react'
import './wrapGalery.css'
import {AiFillLeftCircle} from 'react-icons/ai'
import {AiFillRightCircle} from 'react-icons/ai'
import {SiIfixit} from 'react-icons/si'
const WrapGalery = ({ galeryImages }) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(0)
    const handleOpenModal = (index) =>{
        setSlideNumber(index)
        setOpenModal(true)
    }
    const handleCloseModal = () =>{
        setOpenModal(false)
    }
    const prevSlide = () =>{
        slideNumber ===0? setSlideNumber(galeryImages.length-1): setSlideNumber(slideNumber-1)
    }
    const nextSlide = () =>{
        slideNumber +1 === galeryImages.length? setSlideNumber(0) : setSlideNumber(slideNumber+1)
    }
    return (
        <div>
            {
                openModal &&
                <div className='sliderWrap'>
                    <SiIfixit  className='btnClose' onClick={handleCloseModal}/>
                    <div className='galeryCountList'>{slideNumber+1}/{galeryImages.length}</div>
                    <AiFillLeftCircle  className='btnPrev' onClick={prevSlide}/>
                    <AiFillRightCircle  className='btnNext' onClick={nextSlide}/>
                    <div className='fullScreenImage'>
                        <img src={galeryImages[slideNumber].img} alt='' />
                    </div>
                </div>
            }
            <div className='galeryWrap'>
                {
                    galeryImages && galeryImages.slice(0,8).map((slide, index) => {
                        return (
                            <div className='single' key={index} onClick={ () => handleOpenModal(index)}
                            >
                                <img src={slide.img} alt=''/>
                            </div>
                        )
                    })
                }
            </div>
                <div className='buttonBox'>
            <button className='wrapGaleryViewAll' onClick={ () => handleOpenModal(0)}>View All ➜ </button></div>
        </div>
    )
}

export default WrapGalery

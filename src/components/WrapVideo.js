import React, { useState } from 'react'
import './wrapGalery.css'
import { SiIfixit } from 'react-icons/si'
import {AiFillPlayCircle} from 'react-icons/ai'

const WrapVideo = ({ videoSrc }) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div>
      <div className='buttonBoxTwo'>
        <div className='wrapGaleryWatchIt' onClick={handleOpenModal}>
          <AiFillPlayCircle className='wrapGaleryWatchItButton'/> <h2 className='wrapGaleryWatchItText'>watch it now</h2>
        </div>
      </div>
      {openModal && (
        <div className='sliderWrap'>
          <SiIfixit className='btnClose' onClick={handleCloseModal} />
          <div className='fullScreenImage'>
          <iframe className='videoFrame' src={videoSrc} title='Interview' />
          </div>
        </div>
      )}
    </div>
  )
}

export default WrapVideo
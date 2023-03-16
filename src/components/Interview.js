import React from 'react'
import './style.css'
import WrapVideo from './WrapVideo'
const interview = () => {
  return (
    <div className='interview' id="interview">
        <h1 className='interviewQuote'>“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”</h1>
        <WrapVideo videoSrc={'https://www.youtube.com/embed/NPlEYjRALDU'}/>
    </div>
  )
}

export default interview

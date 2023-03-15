import React from 'react'
import './style.css'
import one from './storyPictures/img.png'

const Story = () => {
  return (
    <div className='story' id='about'>
      <img src={one} className='storyPicture'/>
      <div className='sotryTexts'>
        <h1 className='myStroy'>My Story</h1>
        <h4 className='storyDescription'>In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.</h4>
        <h4 className='storyDescription'>Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.</h4>
        <h3 className='knowMore'>Know More ➜</h3>
      </div>
    </div>
  )
}

export default Story

import React, {useState} from 'react'
import './style.css'

const reviewObj =[
  {
    text:`The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique. They will properly consult with you.`,
    name: `Jack Geoffrey`,
    title: `Tattoo Artisy`
  },
  {
    text:`The atmosphere was great and the staff were extremely friendly. They made me feel highly comfortable and at ease throughout the entire process.`,
    name: `Rachel Jackson`,
    title: `Graphic Designer`
  },
  {
    text:`"I had an amazing experience! The team was attentive and made sure I was comfortable throughout the entire process. I highly recommend them."`,
    name: `Sophia Johnson`,
    title: `Fitness Trainer`
  }
]

const Reviews = () => {
  const [current, setCurrent] = useState(0)
  const length = reviewObj.length
  const nextInterview = () =>{
    setCurrent(current === length-1 ?0:current+1 )
  }
  const prevInterview = () =>{
    setCurrent(current === 0 ?length-1:current-1 )
  }

  return (
    <div className='reviews'>
      <h1 className='quotMark'>“</h1>
      <div className='reveiwBox'>
        <h2 className='reviewText'>{reviewObj[current].text}</h2>
        <div className='nameTitle'>
          <div className='nameText'>
          <h2 className='name'>{reviewObj[current].name}</h2>
          <h2 className='title'>{reviewObj[current].title}</h2></div>
          <div className='reviewBTNs'>
            <button className='moveLeft' onClick={prevInterview}>⬅</button>
            <button className='moveRight' onClick={nextInterview}>➡</button></div>
        </div>
      </div>

    </div>
  )
}

export default Reviews

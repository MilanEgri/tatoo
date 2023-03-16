import React from 'react'
import WrapGalery from './WrapGalery'
import t1 from './galeryPictures/t1.png'
import t2 from './galeryPictures/t2.png'
import t3 from './galeryPictures/t3.png'
import t4 from './galeryPictures/t4.png'
import t5 from './galeryPictures/t5.png'
import t6 from './galeryPictures/t6.png'
import t7 from './galeryPictures/t7.png'
import t8 from './galeryPictures/t8.png'
import t9 from './galeryPictures/t9.png'
import t10 from './galeryPictures/t10.png'
import t11 from './galeryPictures/t11.png'
import t12 from './galeryPictures/t12.png'
import t13 from './galeryPictures/t13.png'
import t14 from './galeryPictures/t14.png'
import t15 from './galeryPictures/t15.png'
import t16 from './galeryPictures/t16.png'
import t17 from './galeryPictures/t17.png'

const galeryImages =[
    {img: t1},
    {img: t2},
    {img: t3},
    {img: t4},
    {img: t5},
    {img: t6},
    {img: t7},
    {img: t8},
    {img: t9},
    {img: t10},
    {img: t11},
    {img: t12},
    {img: t13},
    {img: t14},
    {img: t15},
    {img: t16},
    {img: t17},
]
const Galery = () => {
 
    return (
    <div className='galery' id='gallery'>
        <h1 className='chechkGalery'>check my gallery:</h1>
      <WrapGalery galeryImages={galeryImages}/>
    </div>
  )
}

export default Galery

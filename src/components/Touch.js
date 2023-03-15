import React from 'react'
import './style.css'
import {ImLocation,ImPhone} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'
const Touch = () => {
  function clearer () {
    document.getElementById('name').value=''
    document.getElementById('email').value=''
    document.getElementById('message').value=''
  }
    return (
    <div className='touch' id='contact'>
        <div className='touchDatas'>
            <h1 className='getInTouch'>Get in touch with me:</h1>
            <div className='adresses'>
                <div className='adress'>
                    <h3 className='officeName'>LA office</h3>
                    <h3 className='officeDescription'>In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus</h3>
                    <h3 className='touchDatasWithIcons'>
                        <ImLocation/> 784 Norman Street, Los Angeles.<br />
                        <ImPhone/> +49 01 23456789.<br />
                        <MdEmail/> contact@tattosite.com.
                        </h3>
                        <a href='https://www.google.com/maps/search/784+Norman+Street,+Los+Angeles/@34.0201613,-118.6919205,10z/data=!3m1!4b1' target='_blank' className='getLocation'>Get location</a>
                </div>
                <div className='adress'>
                <h3 className='officeName'>NYC office</h3>
                <h3 className='officeDescription'>Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus</h3>
                <h3 className='touchDatasWithIcons'>
                    <ImLocation/> 1630 Elm Drive, New York City.<br />
                    <ImPhone/> +49 98 76543210.<br />
                    <MdEmail/> contact@tattosite.com
                </h3>
                <a href='https://www.google.com/maps/place/1630+Elm+Dr,+The+Bronx,+NY+10462,+Egyes%C3%BClt+%C3%81llamok/@40.8417706,-73.8585937,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2f4ba363c8abb:0x924c7a7119741bf7!8m2!3d40.8417706!4d-73.856405' target=' blank' className='getLocation'>Get location</a>
                </div>
            </div>
        </div>
        <div className='message'>
            <input className='messageInput' placeholder='Write your name here' id='name'/>
            <input className='messageInput' placeholder='Write your email address' id='email'/>
            <input className='messageInput' placeholder='Write your messages here' id='message'/>
            <button className='messageSend' onClick={clearer}>Send it</button>
        </div>
    </div>
  )
}

export default Touch

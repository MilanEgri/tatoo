import React from 'react'
import './style.css'
import { ImLocation, ImPhone } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import {FaRegPaperPlane} from 'react-icons/fa'

const Footer = () => {
    function clear () {
        document.getElementById("newsLetterEmail").value = '';
    }
    return (
        <div className='footer'>
            <div className='aboutVoidTattoo'>
                <h2 className='footerTitle'>About void tattoo</h2>
                <h3 className='aboutVoidTattooDesciption'>Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus</h3>
                <h3 className='aboutVoidTattooAdresses'>
                    <ImLocation /> 784 Norman Street, Los Angeles.<br />
                    <ImPhone /> +49 01 23456789.<br />
                    <MdEmail /> contact@tattosite.com.
                </h3>
            </div>
            <div className='usefulLinks'>
                <h2 className='footerTitle'>Usefull links</h2>
                <div className='usefullLinkslinks'>
                    <a className='usefullLinkslink' href='#about'>About me</a>
                    <a className='usefullLinkslink' href='#gallery'>My gallery</a>
                    <a className='usefullLinkslink' href='#services'>My services</a>
                    <a className='usefullLinkslink' href='#contact'> Contact me</a>
                </div>
            </div>
            <div className='WorkingTime'>
                <h2 className='footerTitle'>Working time</h2>
                <h3 className='openedHours'>Mon - Tue / Appointment<br />
                    Wed - Fri / 10:00 - 9:00pm<br />
                    Sat / 10:00 - 6:00pm<br />
                    Sun / no work on this day</h3>
            </div>
            <div className='getNewsletter'>
                <h2 className='footerTitle'>Get newsletter</h2>
                <h3 className='aboutVoidTattooDesciption'>Elit duis porttitor massa tellus nun in velit arcu posuere integer.</h3>
                <div className='emailSender'>
                    <input className='emailInput' placeholder='Your email address' id='newsLetterEmail'/>
                    <FaRegPaperPlane className='sendLogo' onClick={clear}/>
                </div>
            </div>
        </div>
    )
}

export default Footer

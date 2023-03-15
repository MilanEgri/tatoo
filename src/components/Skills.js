import React from 'react'
import Counter from './Counter'
import './style.css'
const Skills = () => {
    return (
        <div className='skills' id='services'>
            <div className='stats'>
                <div className='skill'>
                    <Counter end={90} />
                    <h4 className='skillText'>Full body tattoo</h4>
                </div>
                <div className='skill'>
                    <Counter end={85} />
                    <h4 className='skillText'>Safely piercing</h4>
                </div>
                <div className='skill'>
                    <Counter end={75} />
                    <h4 className='skillText'>full colour tattoo</h4>
                </div>
                <div className='skill'>
                    <Counter end={95} />
                    <h4 className='skillText'>Temporary tatoo</h4>
                </div>

            </div>
        </div>
    )
}

export default Skills

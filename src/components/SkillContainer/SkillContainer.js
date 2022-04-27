import React from 'react'
import { Element } from 'react-scroll'
import imag1 from '../../assests/1500-0-.jpg'
import './SkillContainer.css'
import LinearProgress from '@mui/material/LinearProgress';



const SkillContainer = () => {
    return (
      <Element id='skills' className='SkillContainer'>
          <div className='SkillContainer__image'>
              <img src={imag1}></img>
          </div>
          <div className='SkillContainer__text'>
               <h2>SKILLSETS</h2>
               <div className='SkillContainer__SkillSet'>
                   <h5>React</h5>
                   <div className='SkillContainer__slider SkillContainer__slider1 '>
                   <LinearProgress variant="determinate" value={80} />
                   </div>
               </div>
               <div className='SkillContainer__SkillSet'>
                   <h5>Node JS</h5>
                   <div className='SkillContainer__slider SkillContainer__slider2 '>
                   <LinearProgress variant="determinate" value={70} />
                   </div>
               </div>
               <div className='SkillContainer__SkillSet'>
                   <h5>Java Script</h5>
                   <div className='SkillContainer__slider SkillContainer__slider3 '>
                   <LinearProgress variant="determinate" value={60} />
                   </div>
               </div>
               <div className='SkillContainer__SkillSet'>
                   <h5>MySQL</h5>
                   <div className='SkillContainer__slider SkillContainer__slider4 '>
                   <LinearProgress variant="determinate" value={80} />
                   </div>
               </div>
               <div className='SkillContainer__SkillSet'>
                   <h5>Bootstrap</h5>
                   <div className='SkillContainer__slider SkillContainer__slider5 '>
                   <LinearProgress variant="determinate" value={85} />
                   </div>
               </div>
               <div className='SkillContainer__SkillSet'>
                   <h5>MangoDB</h5>
                   <div className='SkillContainer__slider SkillContainer__slider6 '>
                   <LinearProgress variant="determinate" value={70} />
                   </div>
               </div>
             
          </div>


      </Element>
    )
}

export default SkillContainer

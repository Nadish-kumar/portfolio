import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import { Facebook,Instagram,LinkedIn,GitHub} from '@material-ui/icons'
import './Contact.css'


const Contact = () => {
    return (
        <Element id="contact" className='contact'>
            <h1>Contact</h1>
            <div className='contact__container'>
                <p>
                    Email: <span>kumarnadi22@gmail.com</span>
                </p>
                <p>
                    Github Username: <span>Nadish-kumar</span>
                </p>
           
            <div className='contact__icons'>
                
                <a href='https://github.com/Nadish-kumar' target="_blank">
                <IconButton>
                     <GitHub />
                     </IconButton>
                </a>
           
                <a href='https://www.linkedin.com/in/nadish-kumar-19b53322a/' target="_blank">
                <IconButton>
                     <LinkedIn />
                </IconButton>
                </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact

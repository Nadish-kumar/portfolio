import React from 'react'
import { useState } from 'react'
import './Project.css'
import GitHubIcon from '@material-ui/icons/GitHub';

const Projects = (props) => {

    const [show, setshow] = useState(false)
    return (
        <a href={props.name.link} target="_blank">
            <div
            className="projects" 
            onMouseEnter={() => setshow(true)} 
            onMouseLeave={() => setshow(false)} > 
            
                {
                    show ? (
                        <div className='project__content'>
                            <h4>{props.name.title}</h4>
                            <p>{props.name.desp}</p>
                            <a href={props.name.github} target="_blank"><GitHubIcon /></a>
                        </div>
                    ) :
                        (
                            <img src={props.name.image}></img>
                        )

                }
            </div>
        </a>
    )
}

export default Projects

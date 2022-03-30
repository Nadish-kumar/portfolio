import React from 'react'
import {Element} from 'react-scroll'
import Projects from '../Projects/Projects'
import './ProjectContainer.css'
import dairy from "../../assests/pic1.png"

const ProjectContainer = () => {
    let data =[
        {
            image: "https://firebasestorage.googleapis.com/v0/b/remember-project-498c3.appspot.com/o/profile%2FScreenshot%20(45).png?alt=media&token=c00c2c2e-7e97-40d2-a504-2a5c55c34600",  
             title : "Pizza Project",
            desp : "Customize your pizza what your want, admin to sell their product",
            link :"https://distracted-goldwasser-d44018.netlify.app/"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/remember-project-498c3.appspot.com/o/profile%2Fpic1.png?alt=media&token=88cb6f97-bba5-4d37-bc39-5f6964adced1",
            title : "Dairy Project",
            desp : "Add your memories with a short description and store your memorable image",
            link : "https://verdant-salmiakki-b2c083.netlify.app/"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/remember-project-498c3.appspot.com/o/profile%2FScreenshot%20(43).png?alt=media&token=9bc72fd8-dae4-4736-8472-5976fe83caf0",
            title : "Gmail clone",
            desp : "Login with your credential and send your information through mail",
            link : "https://melodious-dragon-c173b1.netlify.app/"
        },
        {
            image: "https://images.indianexpress.com/2021/06/labrador-retriever-1210559_1920.jpg",
            title : "Artificial Intelligence ",
            desp : "Run machine learning models in your Android, iOS, and Web apps",
            link :"https://mui.com/components/progress/#main-content"
        },
    
  
    ]
    return (
        <Element className='ProjectContainer' id='project'>
        <h1>Projects</h1>
        <p>
            Here somae projects which I done for making people live easier.
        </p>
        <div className='ProjectContainer__projects'>
           {
              data.map(obj => <Projects name ={obj}></Projects>)
           }
        </div>
        </Element>
            
        
    )
}

export default ProjectContainer

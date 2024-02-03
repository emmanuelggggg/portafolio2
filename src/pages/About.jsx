import React from 'react'
import '../assets/css/about.css'

import yo from '../assets/img/imgUser/im.png'
import cv from '../assets/pdf/cv-jesus-emmanuel.pdf'

const About = () => {
    return (
        
        <div className='content1'>
            <div className='principal'>
                <div className='testimonio'>
                    <div className='photo-container'>
                        <img className='photo' src={yo} alt="" />
                    </div>
                    <div>
                        <p className='text'>
                            Hola! soy  Jesus Emmauel Carballo C. soy de La Paz B.C.S.
                            Actualmente soy ingeniero en desarrollo de software , mis estudios : egresado de la Universidad Autonoma de Baja California Sur.
                            1 año de experiencia trabajando en web como front-end. Mis otras profeciones son maestro de musica y fotografo.
                        </p>
                    </div>
                    <div className='cv'>
                        <a href={cv} target="_blank" rel="noopener noreferrer" download="CV-Jesus-Emmanuel.pdf">Descargar CV</a>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default About
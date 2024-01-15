import React from 'react'
import Slideshow from '../components/Slideshow'
import sesea1 from '../assets/img/projects/sesea/sesea1.png'
import sesea2 from '../assets/img/projects/sesea/sesea2.png'
import sesea3 from '../assets/img/projects/sesea/sesea3.png'
import sesea4 from '../assets/img/projects/sesea/sesea4.png'
import sesea5 from '../assets/img/projects/sesea/sesea5.png'
import sesea6 from '../assets/img/projects/sesea/sesea6.png'
import sesea7 from '../assets/img/projects/sesea/sesea7.png'
import sesea8 from '../assets/img/projects/sesea/sesea8.png'
import sesea9 from '../assets/img/projects/sesea/sesea9.png'
import sesea10 from '../assets/img/projects/sesea/sesea10.png'
import sesea11 from '../assets/img/projects/sesea/sesea11.png'

import sea1 from '../assets/img/projects/sea/sea1.png'
import sea2 from '../assets/img/projects/sea/sea2.png'
import sea3 from '../assets/img/projects/sea/sea3.png'
import sea4 from '../assets/img/projects/sea/sea4.png'
import sea5 from '../assets/img/projects/sea/sea5.png'
import sea6 from '../assets/img/projects/sea/sea6.png'

import edi1 from '../assets/img/projects/design/edi1.png'
import edi2 from '../assets/img/projects/design/edi2.png'
import edi3 from '../assets/img/projects/design/edi3.png'
import edi4 from '../assets/img/projects/design/edi4.png'
import edi5 from '../assets/img/projects/design/edi5.png'
import edi6 from '../assets/img/projects/design/edi6.png'
import edi7 from '../assets/img/projects/design/edi7.png'

import gaba1 from '../assets/img/projects/gaba/gaba1.png'
import gaba2 from '../assets/img/projects/gaba/gaba2.png'
import gaba3 from '../assets/img/projects/gaba/gaba3.png'
import gaba4 from '../assets/img/projects/gaba/gaba4.png'
import gaba5 from '../assets/img/projects/gaba/gaba5.png'

const Projects = () => {
    const sesea = [
        sesea1,sesea2,sesea3,
        sesea4,sesea5,sesea6,
        sesea7,sesea8,sesea9,
        sesea10,sesea11
    ];
    const edites = [edi1,edi2,edi3,edi4,edi5,edi6,edi7] ;
    const sea =[
        sea1,sea2,sea3,sea4,sea5,sea6
    ]

    const gaba =[gaba1,gaba2,gaba3,gaba4,gaba5]
    return (       
        <div className='content1'>
            <div className='fl'>
                <div>
                    <p className='name'>My Systems</p>
                </div>
            </div>            
            <div className='carrusel'>
                <Slideshow 
                    img={sesea} 
                    titulo='SESEA' 
                    link='https://seseabcs.gob.mx/sesea/'/>
            </div>
            <div className='carrusel'>
                <Slideshow 
                    img={sea} 
                    titulo='SEA'
                    link={'https://www.seabcs.gob.mx/'}/>
            </div>
            <div className='carrusel'>
                <Slideshow 
                    img={edites} 
                    titulo='EDITEST'
                    link={'https://www.seabcs.gob.mx/'}/>
            </div>
            <div className='carrusel'>
                <Slideshow 
                    img={gaba} 
                    titulo='Portafolio Gabael'
                    link={'https://gabaeltylorportafolio.000webhostapp.com/'}/>
            </div>
        </div> 
    )
}

export default Projects
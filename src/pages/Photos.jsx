import React from 'react'
import Slideshow from '../components/Slideshow'

import foto1 from '../assets/img/projects/fotos/foto1.JPG'
import foto2 from '../assets/img/projects/fotos/foto2.JPG'
import foto3 from '../assets/img/projects/fotos/foto3.JPG'
import foto4 from '../assets/img/projects/fotos/foto4.JPG'
import foto5 from '../assets/img/projects/fotos/foto5.JPG'
import foto6 from '../assets/img/projects/fotos/foto6.JPG'
import foto7 from '../assets/img/projects/fotos/foto7.png'


const Photos = () => {

  const fotos =[foto1,foto2,foto3,foto4,foto5,foto6,foto7];
  return (
    <div className="content1">
      <div className='fl'>
          <div>
              <p className='name'>My Designs</p>
          </div>
      </div>            
      <div className='carrusel'>
          <Slideshow 
              img={fotos} 
              titulo='EDITEST (figma)' 
              link=''/>
      </div>
    </div>
  )
}

export default Photos
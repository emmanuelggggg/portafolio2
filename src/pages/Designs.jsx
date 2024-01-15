import React from 'react'
import Slideshow from '../components/Slideshow'

import edi1 from '../assets/img/projects/design/edi1.png'
import edi2 from '../assets/img/projects/design/edi2.png'
import edi3 from '../assets/img/projects/design/edi3.png'
import edi4 from '../assets/img/projects/design/edi4.png'
import edi5 from '../assets/img/projects/design/edi5.png'
import edi6 from '../assets/img/projects/design/edi6.png'
import edi7 from '../assets/img/projects/design/edi7.png'

import fig1 from '../assets/img/projects/design/fig1.png'
import fig2 from '../assets/img/projects/design/fig2.png'
import fig3 from '../assets/img/projects/design/fig3.png'
import fig4 from '../assets/img/projects/design/fig4.png'
import fig5 from '../assets/img/projects/design/fig5.png'
import fig6 from '../assets/img/projects/design/fig6.png'

import movie1 from '../assets/img/projects/design/movie1.png'
import movie2 from '../assets/img/projects/design/movie2.png'
import movie3 from '../assets/img/projects/design/movie3.png'
import movie4 from '../assets/img/projects/design/movie4.png'
import movie5 from '../assets/img/projects/design/movie5.png'
import movie6 from '../assets/img/projects/design/movie6.png'
import movie7 from '../assets/img/projects/design/movie7.png'


const Designs = () => {
  const edites = [edi1,edi2,edi3,edi4,edi5,edi6,edi7] ;
  const fig =[fig1,fig2,fig3,fig4,fig5,fig6] ;
  const movie =[movie1,movie2,movie3,movie4,movie5,movie6,movie7];
  return (
    <div className='content1'>
      <div className='fl'>
          <div>
              <p className='name'>My Designs</p>
          </div>
      </div>            
      <div className='carrusel'>
          <Slideshow 
              img={edites} 
              titulo='EDITEST (figma)' 
              link='#'/>
      </div>
      <div className='carrusel'>
          <Slideshow 
              img={fig} 
              titulo='Fiagma (figma)' 
              link='#'/>
      </div>
      <div className='carrusel'>
          <Slideshow 
              img={movie} 
              titulo='MovieDB (figma)' 
              link='#'/>
      </div>
      
  </div> 
  )
}

export default Designs
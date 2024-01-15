import React from 'react'
import video  from '../assets/img/video/chimuelo-bailando.mp4'
import '../assets/css/error.css'
const Error = () => {
  return (
    <div className="content1">
      <video width="640" height="360"  autoPlay loop>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      
      <div className='error'>
          <h2 className="animation_background_test">Error</h2>
          <h1 className="animation_background_test">404</h1>
      </div>
    </div>
  )
}

export default Error
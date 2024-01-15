import React, {useEffect, useState} from 'react'
import '../assets/css/slideshow.css'



const Slideshow = ({ img, titulo, link } ) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Función para cambiar a la siguiente imagen
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % img.length);
    };
    useEffect(() => {     
        const intervalId = setInterval(() => {
            nextImage();
        }, 3000);     
      return () => {
        clearInterval(intervalId);
    };
}, [currentImageIndex, img]);

    return (
    <div className="slideshow-container">
        <div className='direction'>
            <div>
                <p className="slide-text">Project : {titulo} </p>
            </div>
            <div>
                <a className="button-visit" target="_blank" rel="noreferrer" href={link}>Visit site</a>
            </div>
        </div>
        <div>
            
            {img.map((image, index) => (
                <div key={index} className={`slide ${index === currentImageIndex ? 'active' : ''}`}>
                    <img className='img-slide' src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
    </div>
    );
};

export default Slideshow
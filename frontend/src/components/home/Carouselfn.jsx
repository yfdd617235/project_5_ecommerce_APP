import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'
import img3 from './imgs/img3.jpg'
import img4 from './imgs/img4.jpg'
import './carouselfn.css'

function Carouselfn() {
  return (
    <>
      <div className='carouseldiv'>
      <Carousel fade interval={2000}>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h5>Cell Phones</h5>
            <p>Best Cell Phones at the best prices you can find.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img2} alt="First slide" />
          <Carousel.Caption>
            <h5>Laptops</h5>
            <p>Most powerful and latest laptops of the year.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img3} alt="First slide" />
          <Carousel.Caption>
            <h5>Smart TV</h5>
            <p>Amoled TVs with million of color and a real image.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img4} alt="First slide" />
          <Carousel.Caption>
            <h5>Smart Watch</h5>
            <p>Carry out the best technology everywhere with the best SmartWatches.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

    </>

  )
}

export default Carouselfn
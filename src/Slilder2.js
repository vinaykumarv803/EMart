import Carousel from 'react-bootstrap/Carousel';
import img1 from './pics/banner2.jpg';
import img2 from './pics/banner3.jpg';
import img3 from './pics/banner4.jpg';

import './Slider2.css';

function Slider2() {
  return (


    <center>
    <div className="Slider2Size" >
    
    <Carousel data-bs-theme="dark">

      <Carousel.Item>
        <a href='/' alt="/"><img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        /></a>
      </Carousel.Item>

      <Carousel.Item>
        <a href='/' alt=""><img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        /></a>
      </Carousel.Item>

      <Carousel.Item>
        <a href='/' alt="/"><img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        /></a>
      </Carousel.Item>

    </Carousel>
    </div>
    </center>
   
  );
}

export default Slider2;













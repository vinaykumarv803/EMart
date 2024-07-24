
import Carousel from 'react-bootstrap/Carousel';
import img1 from './pics/Banners/b1.jpg';
import img2 from './pics/Banners/b2.jpg';
import img3 from './pics/Banners/b3.jpg';
import img4 from './pics/Banners/b4.jpg';
import img5 from './pics/Banners/b5.jpg';
import img6 from './pics/Banners/b6.jpg';

function Banners() {
  return (
    <div style={{ maxWidth: '100%', minHeight: '100px' }}>
      <Carousel controls={true} indicators={false} pause={false} data-bs-theme="dark">
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
        <Carousel.Item>
          <a href='/' alt="/"><img
            className="d-block w-100"
            src={img4}
            alt="4 slide"
          /></a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='/' alt="/"><img
            className="d-block w-100"
            src={img5}
            alt="5 slide"
          /></a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='/' alt="/"><img
            className="d-block w-100"
            src={img6}
            alt="6 slide"
          /></a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banners;








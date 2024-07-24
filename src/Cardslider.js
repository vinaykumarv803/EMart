import "react-multi-carousel/lib/styles.css";
import cards from './cards.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from "react-multi-carousel";

import img1 from './pics/cards/image1-1.jpg';
import img2 from './pics/cards/image9.jpg';
import img3 from './pics/cards/image3.webp';
import img4 from './pics/cards/image10.jpg';

export default function Cardslider() 
{
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <div id={cards.mainDiv}>
        
        <div id={cards.cardSlider}>

                <Carousel responsive={responsive}>
                         <div id={cards.box}>
                            <Card style={{ width: '270px', height:'370px' }}>
                            <Card.Img variant="top" src={img1} />
                                <Card.Body>
                                    <Card.Title>iPhone 15 Pro</Card.Title>
                                    <Card.Text>
                                    Mobile was launched on 12th September 2023. Comes with a 120 Hz refresh rate
                                    </Card.Text>
                                    <Button variant="primary">$Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div id={cards.box}>
                            <Card style={{ width: '270px', height:'370px' }}>
                                <Card.Img variant="top" src={img2} />
                                <Card.Body>
                                    <Card.Title>macBook</Card.Title>
                                    <Card.Text>
                                    MacOS with a 13.30-inch display that has a resolution of 2560x1600 pixels.
                                    </Card.Text>
                                    <Button variant="primary">$Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div id={cards.box}>
                            <Card style={{ width: '270px', height:'370px' }} >
                                <Card.Img variant="top" src={img3} />
                                <Card.Body>
                                    <Card.Title>Redmi Note 13 Pro</Card.Title>
                                    <Card.Text>
                                    Redmi Note 13 Pro+ 5G is equipped with a flagship-level 200MP main camera 
                                    </Card.Text>
                                    <Button variant="primary">$Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div id={cards.box} >
                            <Card style={{ width:'270px', height:'370px', }} >
                                <Card.Img variant="top" src={img4} />
                                <Card.Body>
                                    <Card.Title>Apple iPad</Card.Title>
                                    <Card.Text>
                                    Apple iPad 7th generation Wi-Fi & Cellular & GPS: A2200, A2198 Global
                                    </Card.Text>
                                    <Button variant="primary">$Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>
                 </Carousel>;
                 </div>
                 
  </div>
  )
}


 
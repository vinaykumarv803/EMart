
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './pics/cards/image1-1.jpg';
import img2 from './pics/cards/image9.jpg';
import img3 from './pics/cards/image3.webp';
import img4 from './pics/cards/image10.jpg';
import cards from './cards.module.css';
function BasicExample() {
    return (
        <>    

        <div id={cards.BackDiv}> 

            <div id={cards.container} >

                        <div className={cards.topmodels}>
                            <h2 className={cards.topmodelFont}>Top Models</h2>
                        </div>

                    <div className={cards.alignItems}>

                        <div id={cards.box}>
                            <Card className={cards.cardProduct} >
                            <Card.Img variant="top" src={img1} />
                                <Card.Body>
                                    <Card.Title className={cards.cardTitle}>iPhone 15 Pro</Card.Title>
                                    <Card.Text className={cards.cardText}>
                                    Mobile was launched on 12th September 2023. Comes with a 120 Hz refresh rate
                                    </Card.Text>
                                    <Button variant="primary">$Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div id={cards.box}>
                            <Card className={cards.cardProduct}>
                                <Card.Img variant="top" src={img2} />
                                <Card.Body>
                                    <Card.Title className={cards.cardTitle}>macBook</Card.Title>
                                    <Card.Text className={cards.cardText}>
                                    MacOS with a 13.30-inch display that has a resolution of 2560x1600 pixels.
                                    </Card.Text>
                                    <Button variant="primary">$Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div id={cards.box}>
                            <Card className={cards.cardProduct} >
                                <Card.Img variant="top" src={img3} />
                                <Card.Body>
                                    <Card.Title className={cards.cardTitle}>Redmi Note 13 Pro</Card.Title>
                                    <Card.Text className={cards.cardText}>
                                    Redmi Note 13 Pro+ 5G is equipped with a flagship-level 200MP main camera 
                                    </Card.Text>
                                    <Button variant="primary">$Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div id={cards.box} >
                            <Card className={cards.cardProduct} >
                                <Card.Img variant="top" src={img4} />
                                <Card.Body>
                                    <Card.Title className={cards.cardTitle}>Apple iPad</Card.Title>
                                    <Card.Text className={cards.cardText}>
                                    Apple iPad 7th generation Wi-Fi & Cellular & GPS: A2200, A2198 Global
                                    </Card.Text>
                                    <Button variant="primary">$Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    </div>

            </div>
            </div>

                


            

        </>
    );
}

export default BasicExample;

/* <div id={cards.container}>

<div id={cards.box}>hello</div>
<div id={cards.box}>hello</div>
<div id={cards.box}>hello</div>
</div>*/




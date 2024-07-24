import React from 'react'
import style from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faXTwitter, faReact } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div>
            <footer>

                <div id={style.panel1}>
                    <h5>Back To top</h5>
                </div>

                <div id={style.panel2} className={style.secPannel}>


                    <div id={style.panel2items} className={style.secItmes}>
                        <ul >
                       
                            <h5 id={style.title}> Get to Know Us</h5>
                            <a href={'/'} alt={''} id={style.d1}><li>About Us</li></a>
                            <a href={'/'} alt={''} id={style.d1}><li>Careers</li></a>
                            <a href={'/'} alt={''} id={style.d1}><li>Press Releases</li></a>
                            <a href={'/'} alt={''} id={style.d1}><li>Science</li></a>
                        </ul>
                    </div>

                    <div id={style.panel2items} className={style.secItmes}>
                        <ul >
                            <h5 id={style.title}>Connect with Us</h5>
                            <a href={'/'} id={style.d1}> <li>Facebook</li></a>
                            <a href={'/'} id={style.d1}> <li>Twitter</li></a>
                            <a href={'/'} id={style.d1}> <li>Instagram</li></a>
                        </ul>
                    </div>

                    <div id={style.panel2items} className={style.secItmes}>
                        <ul>
                            <h5 id={style.title}>Make Money with Us</h5>
                            <a href={'/'} id={style.d1}> <li>Protect and Build Your Brand</li></a>
                            <a href={'/'} id={style.d1}> <li>Become an Affiliate</li></a>
                            <a href={'/'} id={style.d1}> <li>Fulfilment by Amazon</li></a>
                            <a href={'/'} id={style.d1}> <li>Advertise Your Products</li></a>

                        </ul>
                    </div>

                    <div id={style.panel2items} className={style.secItmes}>
                        <ul>

                            <h5 id={style.title}>Let Us Help You</h5>
                            <a href={'/'} id={style.d1}> <li>COVID-19 </li></a>
                            <a href={'/'} id={style.d1}> <li>Your Account</li></a>
                            <a href={'/'} id={style.d1}> <li>Returns Centre</li></a>
                            <a href={'/'} id={style.d1}> <li>100% Purchase Protection</li></a>
                            <a href={'/'} id={style.d1}> <li>Help</li></a>

                        </ul>
                    </div>
                </div>
            </footer>

            <footer id={style.footer2} className={style.secItmes}>

                <center>
                    <div >
                        <FontAwesomeIcon icon={faInstagram} id={style.icon} />
                        <FontAwesomeIcon icon={faFacebook} id={style.icon} />
                        <FontAwesomeIcon icon={faXTwitter} id={style.icon} />
                    </div>
                </center>

                <center>
                    <div>
                        <p style={{ fontFamily: 'trebuchet',color:'rgb(179, 235, 220)'}}>Powered by Vinay Kumar with -  <FontAwesomeIcon icon={faReact} /></p>
                    </div>
                </center>

            </footer>
        </div>
    )
}






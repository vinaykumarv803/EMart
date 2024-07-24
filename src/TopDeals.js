import React from 'react'
import style from './TopDeals.module.css'
import img1 from './pics/div/topdeals1.jpg'
import img2 from './pics/div/topdeals2.jpg'
import img3 from './pics/div/topdeals3.jpg'
import img4 from './pics/div/topdeals4.jpg'
import img5 from './pics/div/topdeals5.jpg'
import img6 from './pics/div/topdeals6.jpg'
import img7 from './pics/div/topdeals7.jpg'
import img8 from './pics/div/topdeals8.jpg'
import img9 from './pics/div/topdeals9.jpg'
import img10 from './pics/div/topdeals10.jpg'
import img11 from './pics/div/topdeals11.jpg'
import img12 from './pics/div/topdeals12.jpg'

export default function Test() {
  return (

    <div className={style.ContainerDiv}>
      <div id={style.ContainerDiv2}>
        <div id={style.Container}>
          <div id={style.innerDiv}>
            <h2>Top deals of the week</h2>
          </div>

          <div id={style.innerDiv2}>

            <a href={'/'} alt={''}> <img src={img1} alt='' id={style.img}></img></a>
            <a href={'/'} alt={''}><img src={img2} alt='' id={style.img}></img></a>
            <a href={'/'} alt={''}><img src={img3} alt='' id={style.img}></img></a>
            <a href={'/'} alt={''}><img src={img4} alt='' id={style.img}></img></a>
            <a href={'/'} alt={''}><img src={img5} alt='' id={style.img}></img></a>
            <a href={'/'} alt={''}><img src={img6} alt='' id={style.img}></img></a>
            <a href={'/'} alt={''}><img src={img12} alt='' id={style.img}></img></a>
            <a href={'/'} alt={''}><img src={img7} alt='' id={style.img}></img></a>
            <a href={'/'} alt={''}><img src={img8} alt='' id={style.img}></img></a>
            <a href={'/'} alt={''}><img src={img9} alt='' id={style.img}></img></a>
            <a href={'/'} alt={''}><img src={img10} alt='' id={style.img}></img></a>
            <a href={'/'} alt={''}><img src={img11} alt='' id={style.img}></img></a>







          </div>

        </div>

      </div>


    </div>

  )
}

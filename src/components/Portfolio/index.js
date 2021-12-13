import React from 'react'
import noteTaker from '../../assets/noteTaker.png'
import quizApp from '../../assets/quizApp.png'
import EthicalSM from '../../assets/EthicalSM.png'
import TuneItOut from '../../assets/TuneItOut.png'
import weather from '../../assets/weather.png'
import passGen from '../../assets/passGen.png'
import GitHub from '../../assets/GitHub.png'

function Portfolio() {

    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <div className='image'>
                <img className="image__img" src={noteTaker}></img>
                <div className="image_overlay">
                    <a href="https://salty-inlet-45159.herokuapp.com/">
                        <div className="img_title">Live Site</div></a>
                    <a href="https://github.com/AaronCox73/Note_Taker">
                        <img className="image_description" src={GitHub} />
                    </a>
                </div>
            </div>
            <div className='image'>
                <img className="image__img" src={EthicalSM} ></img>
                <div className="image_overlay">
                    <a href="https://quiet-journey-83566.herokuapp.com/">
                        <div className="img_title">Live Site</div></a>
                    <a href="https://github.com/conleyannmarie/ethical-media">
                        <img className="image_description" src={GitHub} />
                    </a>
                </div>
            </div>
            <div className='image'>
                <img className="image__img" src={TuneItOut} ></img>
                <div className="image_overlay">
                    <a href="https://johnson90cm.github.io/tune-it-out/">
                        <div className="img_title">Live Site</div></a>
                    <a href="https://github.com/Johnson90cm/tune-it-out">
                        <img className="image_description" src={GitHub} />
                    </a>
                </div>
            </div>
            <div className='image'>
                <img className="image__img" src={weather} ></img>
                <div className="image_overlay">
                    <a href="https://aaroncox73.github.io/Weather/">
                        <div className="img_title">Live Site</div></a>
                    <a href="https://github.com/AaronCox73/Weather">
                        <img className="image_description" src={GitHub} />
                    </a>
                </div>
            </div>
            <div className='image'>
                <img className="image__img" src={passGen} ></img>
                <div className="image_overlay">
                    <a href="https://aaroncox73.github.io/PassGen2/">
                        <div className="img_title">Live Site</div></a>
                    <a href="https://github.com/AaronCox73/PassGen2">
                        <img className="image_description" src={GitHub} />
                    </a>
                </div>
            </div>
            <div className='image'>
                <img className="image__img" src={quizApp} ></img>
                <div className="image_overlay">
                    <a href="https://aaroncox73.github.io/quizApp/">
                        <div className="img_title">Live Site</div></a>
                    <a href="https://github.com/AaronCox73/quizApp">
                        <img className="image_description" src={GitHub} />
                    </a>
                </div>
            </div>


        </section>
    )

}

export default Portfolio
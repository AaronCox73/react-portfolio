import React from 'react';
import "./about.css"
import SLC from '../../assets/slc.jpeg'

function About() {
    return (
        <section>
            <div className='about-me'>
                <img src={SLC} className="aboutBackground" />

                <p className="aboutInfo">
                    Hello there, my name is Aaron Jefferson Cox but you should call me AJ.
                    I am a college-educated-knuckle-bashing-blue-collar worker who traded his wrenchs for a keyboard and a mouse.
                    I have discovered a passion for software engineering and that is what you can find me doing with most of my time.
                </p>

            </div>
        </section >

    )
}

export default About;
import React from 'react';
import ProfilePic from '../../assets/profilePic.jpeg'

function About() {
    return (
        <section className='about-me'>
            <h1 id='about'>
                About Me
            </h1>
            <img src={ProfilePic}  />
            <p>
                My name is Aaron Jefferson Cox and I am a programmer from Salt Lake City, Utah, USA.
            </p>
        </section>

    )
}

export default About;
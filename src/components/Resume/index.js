import React from 'react'
import '../Resume/resume.css'
import resume from '../../assets/resume.png'


function Resume() {
    return (
        <section className='resume'>
            <h2 id ='resumeTitle'>Resume</h2>
            <p id='about' >
                download my <a href={resume} download>Resume</a>
            </p>
        </section>

    )
}

export default Resume;
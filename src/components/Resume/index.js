import React from 'react'
import resume from '../../assets/resume.png'

function Resume() {
    return (
        <section className='resume'>
            <h2>Resume</h2>
            <p id='about' >
                download my <a href={resume} download>Resume</a>
            </p>
        </section>

    )
}

export default Resume;
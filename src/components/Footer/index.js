import React from 'react';
import GitHub from '../../assets/GitHub.png'
import Linkedin from '../../assets/linkedinImg.png'
import Youtube from '../../assets/youtubeImg.png'

function Footer() {

    return (
        <footer className="footer">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/aaron-j-cox-55b415213/">
                        <img src={Linkedin}></img>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/AaronCox73">
                        <img src={GitHub}></img>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCYx3CNYRuEsioEB2hPGwpHA">
                        <img src={Youtube}></img>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer
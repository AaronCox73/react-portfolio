import React from 'react';
import GitHub from '../../assets/GitHub.png'
import Linkedin from '../../assets/linkedinImg.png'
import Youtube from '../../assets/youtubeImg.png'

function Footer() {

    return (
        <footer className="">
            <ul className="footer">
                <li className="footerImg">
                    <a href="https://www.linkedin.com/in/aaronjeffersoncox/">
                        <img src={Linkedin}></img>
                    </a>
                </li>
                <li className="footerImg">
                    <a href="https://github.com/AaronCox73">
                        <img src={GitHub}></img>
                    </a>
                </li>
                <li className="footerImg">
                    <a href="https://www.youtube.com/channel/UCYx3CNYRuEsioEB2hPGwpHA">
                        <img src={Youtube}></img>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer
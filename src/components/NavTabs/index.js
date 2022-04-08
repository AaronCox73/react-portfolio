import React from 'react';
import './NavTabs.css'

function NavTabs(props) {
    const tabs = ['About', 'Resume', 'Portfolio', 'Contact'];
    return (
        <header className="app-header">

            <ul className="nav nav-tabs flex-row ">
                
                {tabs.map(tab => (
                    <li className="nav-item mx-2" key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.setCurrentPage(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default NavTabs;

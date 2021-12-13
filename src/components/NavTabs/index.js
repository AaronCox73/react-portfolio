import React from 'react';


function NavTabs(props) {
    const tabs = ['About', 'Resume', 'Portfolio', 'Contact'];
    return (
        <header className="app-header">

            <ul className="nav nav-tabs flex-row ">
                <h2>Aaron J. Cox</h2>
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

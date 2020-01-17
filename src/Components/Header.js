import React from 'react';

/**
 * SPA Header
 */
function Header() {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href={'/'}>IT People Corporation Challenge</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href={'#block'}>BLOCK</a></li>
                    <li><a href={'#transaction'}>TRANSACTION</a></li>
                    <li><a href={'#where'}>WHERE</a></li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
import React from 'react'

const Header = () => {

    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                    <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">++</i></a>
                </ul>
            </div>
        </nav>
    )
}

export default Header 
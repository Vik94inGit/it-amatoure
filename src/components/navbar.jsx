import React from 'react';
import s from './navbar.module.css'

// let s = {
//     'nav': 'navbar_nav__ooQW5',
//     'item': 'navbar_item__wDfU3'
// }

const Navbar = () => {
    return <nav className ={s.nav}>
        <div className={s.item}>
        <a>Profile</a>
    </div>
        <div className={s.item}><a>Messenges</a></div>
        <div className={s.item}><a>Settings</a> </div>
        <div className={s.item}><a>News</a></div>
        <div className={s.item}><a>Music</a></div>
    </nav>
}

export default Navbar;
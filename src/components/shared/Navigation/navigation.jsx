import React from "react";
import { Link } from "react-router-dom";
import styles from './Navigation.module.css'

const Navigation = ()=>{
    const brandstyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center'
    };

    const logotext = {
        marginLeft : '10px'
    }

    return(
        <nav className={`${styles.navbar} container`}>
            <Link to='/' style={brandstyle}>
                <img src="/images/logo.png" alt="Logo"></img>
                <span style={logotext}>VoiceVibe</span>
            </Link>
        </nav>
    )
}

export default Navigation;
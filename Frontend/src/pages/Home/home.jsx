import React from "react";
import styles from './Home.module.css'
import { Link,useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/card";
import Button from "../../components/shared/Button/button";
const Home = () => {

    const navigate = useNavigate();
    function startRegister(){
        navigate('/authenticate')
        console.log("Button clicked")
    }   

    // You can't style having inside the Module like you are inside the Link then you have to use inline style

    const siginLinkStyle = {
        color: '#0077FF',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px'
    }
    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to VoiceVibe!" icon="logo">
            <p className={styles.text}>Experience the thrill of real-time conversations as if you're sitting in the same room with your fellow participants. No delays, just fluid and spontaneous discussions.</p>
                <div>
                    <Button onClick={startRegister} text="Let's go" icon="next"/>
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>Have an Invite text?</span>
                    {/* <Link style={siginLinkStyle} to="/login">Sign in</Link> */}
                </div>
            </Card>
        </div>
    )
}

export default Home;
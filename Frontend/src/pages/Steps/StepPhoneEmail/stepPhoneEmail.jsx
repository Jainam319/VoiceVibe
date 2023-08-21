import React, { useState } from "react";
import Phone from "./Phone/phone";
import Email from "./Email/email";
import styles from './StepPhoneEmail.module.css'

const phoneEmailMap = {
    phone: Phone,
    email: Email
}
const StepPhoneEmail = ({ onNext }) => {
    const [type, setType] = useState('phone');
    const Component = phoneEmailMap[type];

    // function onNext() {
    //     setType('email')
    // }

    return (
        <>
            <div className={styles.cardWrapper}>
                <div>
                    <div className={styles.buttonWrap}>
                        <button className={`${styles.tabButton} ${type === 'phone' ? styles.active : ''}`} onClick={() => {
                            setType('phone')
                        }}>
                            <img src="/images/mobile.png" alt="phone"></img>
                        </button>
                        <button className={`${styles.tabButton} ${type === 'email' ? styles.active : ''}`} onClick={() => {
                            setType('email')
                        }}>
                            <img src="/images/mail.png" alt="email"></img>
                        </button>
                    </div>
                    <Component onNext={onNext} />
                </div>
            </div>

        </>
    )
}

export default StepPhoneEmail;
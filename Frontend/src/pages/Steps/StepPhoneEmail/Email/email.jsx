import React from "react";
import Card from "../../../../components/shared/Card/card";
import Button from "../../../../components/shared/Button/button";
import TextInput from "../../../../components/shared/TextInput/textInput";
import { useState } from "react";
import styles from '../StepPhoneEmail.module.css'

const Email = ({ onNext }) => {
    const [email, setEmail] = useState('');
    return (
        <>
            <Card title="Enter your email id" icon="mail">
                <TextInput value={email} onChange={(e) => { setEmail(e.target.value) }}>
                </TextInput>
                <div>
                    <div className={styles.actionButtonWrap}>
                        <Button text="Next" icon="next" onClick={onNext} />
                    </div>
                    <p className={styles.bottomPara}>By entering your email. you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
                </div>
            </Card>
        </>
    )
}

export default Email;
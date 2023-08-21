import React, { useState } from "react";
import Card from "../../../components/shared/Card/card";
import TextInput from "../../../components/shared/TextInput/textInput";
import Button from "../../../components/shared/Button/button";
import styles from './StepOtp.module.css'

const StepOtp = ({ onNext }) => {
    const [otp, setOtp] = useState('');
    return (
        <>
            <div className={styles.cardWrapper}>
                <Card title="Enter the code we just texted you" icon="lock" >
                    <TextInput value={otp} onChange={(e) => { setOtp(e.target.value) }}></TextInput>
                    <div className={styles.actionButtonWrap}>
                        <Button onClick={onNext} text="next" icon="next"></Button>
                    </div>
                    <p className={styles.bottomPara}>
                        By entering your number. you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
                    </p>
                </Card>
            </div>
        </>
    )
}

export default StepOtp
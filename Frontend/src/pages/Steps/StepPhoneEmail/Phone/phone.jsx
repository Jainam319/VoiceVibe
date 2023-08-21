import React, { useState } from "react";
import Card from "../../../../components/shared/Card/card";
import Button from "../../../../components/shared/Button/button";
import TextInput from "../../../../components/shared/TextInput/textInput";
import styles from "../StepPhoneEmail.module.css"

const Phone = ({ onNext }) => {
    const [phoneNumber, setphoneNumber] = useState('');
    return (
        <>
            <Card title="Enter your phone number" icon="phone">
                <TextInput value={phoneNumber} onChange={(e) => { setphoneNumber(e.target.value) }}>
                </TextInput>
                <div>
                    <div className={styles.actionButtonWrap}>
                        <Button text="Next" icon="next" onClick={onNext} />
                    </div>
                    <p className={styles.bottomPara}>By entering your number. you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
                </div>
            </Card>
        </>
    )
}

export default Phone;
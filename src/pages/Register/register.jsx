import React, { useState } from "react";
// import styles from "./Register.module.css"
import StepAvatar from "../Steps/StepAvatar/stepAvatar";
import StepName from "../Steps/StepName/stepName";
import StepOtp from "../Steps/StepOtp/stepOtp";
import StepPhoneEmail from "../Steps/StepPhoneEmail/stepPhoneEmail";
import StepUsername from "../Steps/StepUsername/stepUsername";


const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername
}

const Register = () => {

    function onNext(){
        setStep(step+1);
    }

    const [step, setStep] = useState(1);
    const Step = steps[step];

    return (
        <Step onNext={onNext}/>
    )
}

export default Register;
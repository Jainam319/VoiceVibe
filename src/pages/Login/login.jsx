import React, { useState } from "react";
import StepOtp from "../Steps/StepOtp/stepOtp";
import StepPhoneEmail from "../Steps/StepPhoneEmail/stepPhoneEmail";

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
}

const Login = () => {

    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return (
        <>
            <p>Login page</p>
            <Step onNext={onNext}/>
        </>
    )
}

export default Login;
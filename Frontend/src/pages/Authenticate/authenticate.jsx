import React, { useState } from "react";
import StepOtp from "../Steps/StepOtp/stepOtp";
import StepPhoneEmail from "../Steps/StepPhoneEmail/stepPhoneEmail";
// import StepAvatar from "../Steps/StepAvatar/stepAvatar";

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
}

const Authenticate = () => {

    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return (
        <>
            <Step onNext={onNext}/>
        </>
    )
}

export default Authenticate;
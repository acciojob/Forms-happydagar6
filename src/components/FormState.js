import React, { useState } from "react";

const FormState = () => {
    const [fullNameValue, setFullNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordConfirmationValue, setPasswordConfirmationValue] = useState("");

    return (
        <div>
            <h2>Form using useState</h2>
            <form id="info-form">
                <div>
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text"
                    typeof="text"
                    id="full_name"
                    value={fullNameValue}
                    onChange={(event) => setFullNameValue(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                    id="email"
                    value={emailValue}
                    onChange={(event) => setEmailValue(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    id="password"
                    value={passwordValue}
                    onChange={(event) => setPasswordValue(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password"
                    id="password_confirmation"
                    value={passwordConfirmationValue}
                    onChange={(event) => setPasswordConfirmationValue(event.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormState;
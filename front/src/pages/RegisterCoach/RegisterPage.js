import {useState} from "react";
import { HeaderRegister } from "../../components/heading/HeaderRegister";

import RegistrationForm from "../../components/RegistrationFormCoach/RegistrationForm";


export default function RegisterPage() {
    return(
        <div className="App">
            <>
                <HeaderRegister/>
                <RegistrationForm />
            </>
        </div>
    );
    
}
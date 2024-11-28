import { useState } from "react"
import { SignInService } from "../services/LoginService";

const useSignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        passwords: '',
    });

    const [formError, setFormError] = useState({})

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const validate = async () => {
        const errors = {};

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!emailPattern.test(formData.email)) {    
            errors.email = 'Invalid email format';
        } 

        if (!formData.passwords) {
            errors.passwords = 'Passwords is required';
        } 

        setFormError(errors);

        return Object.keys(errors).length === 0
    }

    // API email and password
    const isExitEmailPasswords = async (email, passwords) =>{
        try {
            return await SignInService.checkEmailPasswords(email, passwords)
        }
        catch (error){
            throw error;
        }
    }

    const handSubmitForm = async (e) => {
        e.preventDefault();
        if (await validate()){
            // isExitEmailPasswords()
            console.log('test');
            
        }
    }

    const handleAddData = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData);
    }

    return {
        formData,
        formError,
        handSubmitForm,
        handleAddData
    }
}

export default useSignIn
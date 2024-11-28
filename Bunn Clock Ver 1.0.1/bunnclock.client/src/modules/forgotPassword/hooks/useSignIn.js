import { useState } from "react"

const useSignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        passwords: '',
    });

    const [formError, setFormError] = useState({})

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const validate = () => {
        const errors = {};

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!emailPattern.test(formData.email)) {
            errors.email = 'Invalid email format';
        } else if (!isExitedEmail(formData.email)){
            if (formData.passwords){
                errors.email = 'Email or Passwords is not correct'
            } else if (!formData.passwords){
                errors.email = 'Email not exit'
            }
        }

        if (!formData.passwords) {
            errors.passwords = 'Passwords is required';
        } else if (!isTruePasswords(formData.passwords)){
            errors.passwords = 'Passwords is not correct'
        }

        setFormError(errors);
        return Object.keys(errors).length === 0
    }

    // API email ADD ASYNC
    const isExitedEmail = (email) =>{
        try {
            // return await 
            return true
        }
        catch{
            
        }

    }

    const isTruePasswords = (passwords) =>{
        return false
    }

    const handSubmitForm = (e) => {
        e.preventDefault();
        if (validate()){
            console.log('handle ok');
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
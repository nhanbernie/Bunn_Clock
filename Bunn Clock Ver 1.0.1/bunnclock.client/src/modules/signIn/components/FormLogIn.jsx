/* eslint-disable no-unused-vars */
import { useState } from 'react'
import '../styles/FormLogIn.css'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import useSignIn from '../hooks/useSignIn.js'
import { Link } from 'react-router-dom';

function FormLogIn() {
    const [isClose, setIsClose] = useState(false);
    const { formData, formError, handSubmitForm, handleAddData } = useSignIn()

    return (
        <div className='mt-4'>
            <div className=''>
                <div className='pt-5 title-bunn'>
                    <h3>Welcome to</h3>
                    <h1>Bunn Clock</h1>
                </div>
            </div>
            <div className='mt-5 create-account'>
                <p>Do you need a Bunn Clock Account?
                    <Link className='text-decoration-none fw-bold' to="/signup">Create Account now</Link>
                </p>
            </div>
            <div className='col-md-12 col-lg-10 col-sm-12'>
                <div className='mt-4'>
                    <form action="" onSubmit={handSubmitForm}>

                        <div className="form-outline mb-2">
                            <input
                                type="email"
                                id=''
                                name='email'
                                placeholder='Enter Email'
                                className="form-control input-form-log"
                                onChange={handleAddData}
                            />
                            {
                                formError.email && <span className='error-span'>{formError.email}</span>
                            }
                        </div>

                        <div className="form-outline mb-4 position-relative">
                            <div>
                                <input type={isClose ? "password" : "text"}
                                    id=""
                                    name='passwords'
                                    placeholder='Enter passwords'
                                    className="form-control input-form-log"
                                    onChange={handleAddData}
                                />
                                {
                                    formError.passwords && <span className='error-span'>{formError.passwords}</span>
                                }
                                <div className='position-absolute eye-password' onClick={() => setIsClose(!isClose)}>
                                    {
                                        isClose ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='d-flex align-items-center'>
                            <div className='pt-2 me-5'>
                                <button className='btn-log fw-bold rounded-2'>Log In</button>
                            </div>
                            <div className='ms-4'>
                                <Link className='text-decoration-none forgot-passwords' to="/forgot-password">Forgot passwords?</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormLogIn
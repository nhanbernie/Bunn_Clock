import AuthLayout from "@shares/layouts/AuthLayout"
import { FormSignUp } from '../components'
function SignUp() {
  return (
    <AuthLayout FormComponent={FormSignUp}/>
  )
}

export default SignUp
import 'bootstrap/dist/css/bootstrap.min.css'
import { FormLogIn } from '../components'
import AuthLayout from '../../../shares/layouts/AuthLayout'

function SignIn() {
  return (
    <>
        <AuthLayout FormComponent={FormLogIn}/>
    </>
  )
}

export default SignIn
import SimpleForm from "../../components/Auth/SimpleForm";
import useAuthHandler from "../../hooks/useAuthHandler";
import AuthLayout from "../../layouts/AuthLayout";
import { SignupSchema } from "../../schema/authSchema";

type SignupFormFields = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    confirmPassword: string
  }
  
  type FieldType = { type: "email" | "password" | "text"; name: keyof SignupFormFields }[]

const Signup = () => {

    const conf = {
        authType: "Sign Up",
        description: "Let's create your account!",
        urlLabel: "Already have an account?",
        urlText: "Log in",
        url: "/login",
      } as const

      const fields: FieldType = [
        { type: "text", name: "firstName" },
        { type: "text", name: "lastName" },
        { type: "email", name: "email" },
        { type: "password", name: "password" },
        { type: "password", name: "confirmPassword" },
      ]

      const { onSignup, isSignupLoading } = useAuthHandler()

  return (
    <AuthLayout {...conf} >
      <SimpleForm fields={fields} schema={SignupSchema} buttonText={conf.authType} onSubmit={onSignup} isLoading={isSignupLoading}/>
   </AuthLayout>
  )
}

export default Signup
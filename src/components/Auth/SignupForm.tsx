import { SignupSchema, SignupSchemaType } from "../../schema/authSchema";
import SimpleForm from "./SimpleForm";

type FieldType = { type: "email" | "password" | "text"; name: keyof SignupSchemaType }[]

type SignupFormProps = {
    onSignup: (data: SignupSchemaType) => void
    isLoading: boolean
}

const SignupForm = ({onSignup, isLoading}: SignupFormProps) => {
    const fields: FieldType = [
        { type: "text", name: "firstName" },
        { type: "text", name: "lastName" },
        { type: "email", name: "email" },
        { type: "password", name: "password" },
        { type: "password", name: "confirmPassword" },
      ]

  return (
    <SimpleForm fields={fields} schema={SignupSchema} buttonText="Sign Up" onSubmit={onSignup} isLoading={isLoading}/>
  )
}

export default SignupForm
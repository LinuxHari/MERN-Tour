import { useForm } from "react-hook-form";
import Button from "../Shared/Button/Button";
import Input from "../Shared/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import keyToTitle from "../../utils/keyToTitle";

type AuthFormProps = {
  fields: {
    type: "email" | "password" | "text";
    name: string;
  }[],
  buttonText: string,
  onSubmit: (data: any) => void;
  authSchema: ZodSchema
}

const AuthForm = ({fields, buttonText, authSchema, onSubmit }: AuthFormProps) => {
  const { register, handleSubmit, formState: {errors} } = useForm({resolver: zodResolver(authSchema)})
  return (
    <form className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30" onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({type, name}) => (
          <Input key={name} wrapperClassName="my-4" type={type} label={keyToTitle(name)} {...register(name)}/>
      ))}
      <Button type="submit" buttonType="primary" className="my-4">
        {buttonText}
      </Button>
    </form>
  );
};

export default AuthForm;

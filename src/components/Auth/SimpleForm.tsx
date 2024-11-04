import { useForm, FieldValues, Path } from "react-hook-form";
import Button from "../Shared/Button/Button";
import Input from "../Shared/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import keyToTitle from "../../utils/keyToTitle";
import useAfterEffect from "../../hooks/useAfterEffect";
import { getFormErrorMessages } from "../../utils/getFormErrorMessages";
import toast from "react-hot-toast";

type SimpleFormProps<T extends FieldValues> = {
  fields: {
    type: "email" | "password" | "text";
    name: Path<T>;
  }[];
  onSubmit: (data: T) => void;
  schema: ZodSchema<T>;
  buttonText: string;
  isLoading: boolean;
  className?: string
};

const SimpleForm = <T extends FieldValues>({ fields, onSubmit, schema, buttonText, isLoading, className="border-1 rounded-12 px-60 py-60 md:px-25 md:py-30" }: SimpleFormProps<T>) => {
  const { register, handleSubmit, formState: { errors } } = useForm<T>({ resolver: zodResolver(schema) });

  useAfterEffect(() => {
    if(Object.keys(errors).length){
      const {errorMessages} = getFormErrorMessages(errors)
      toast.error(errorMessages[0])
    }
  },[errors])

  return (
    <form className={`contactForm ${className}`} onSubmit={handleSubmit(onSubmit)} noValidate>
      {fields.map(({ type, name }) => (
        <Input key={name} wrapperClassName="my-4" type={type} label={keyToTitle(name)} {...register(name)} />
      ))}
      <Button type="submit" buttonType="primary" className="my-4 w-100" disabled={isLoading}>
        {buttonText}
      </Button>
    </form>
  );
};

export default SimpleForm;

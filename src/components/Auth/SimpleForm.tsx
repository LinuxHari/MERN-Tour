import { useForm, FieldValues, Path } from "react-hook-form";
import Button from "../Shared/Button/Button";
import Input from "../Shared/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import keyToTitle from "../../utils/keyToTitle";

type SimpleFormProps<T extends FieldValues> = {
  fields: {
    type: "email" | "password" | "text";
    name: Path<T>;
  }[];
  onSubmit: (data: T) => void;
  schema: ZodSchema<T>;
  buttonText: string;
  isLoading: boolean;
};

const SimpleForm = <T extends FieldValues>({ fields, onSubmit, schema, buttonText, isLoading }: SimpleFormProps<T>) => {
  const { register, handleSubmit, formState: { errors } } = useForm<T>({ resolver: zodResolver(schema) });

  return (
    <form className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30" onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({ type, name }) => (
        <Input key={name} wrapperClassName="my-4" type={type} label={keyToTitle(name)} {...register(name)} />
      ))}
      <Button type="submit" buttonType="primary" className="my-4" disabled={isLoading}>
        {buttonText}
      </Button>
    </form>
  );
};

export default SimpleForm;

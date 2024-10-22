import Button from "../Shared/Button/Button";
import Input from "../Shared/Input/Input";

type AuthFormProps = {
  fields: {
    type: "email" | "password" | "text";
    label: string;
  }[],
  buttonText: string
}

const AuthForm = ({fields, buttonText}: AuthFormProps) => {
  return (
    <form className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30">
      {fields.map(({type, label}) => (
          <Input key={label} wrapperClassName="my-4" type={type} label={label}/>
      ))}
      <Button type="submit" buttonType="primary" className="my-4">
        {buttonText}
      </Button>
    </form>
  );
};

export default AuthForm;

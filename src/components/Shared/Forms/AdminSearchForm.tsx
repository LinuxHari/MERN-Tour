import {useLayoutEffect} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {getFormErrorMessages} from "../../../utils/getFormErrorMessages";
import {getAdminSearchSchema} from "../../../schema/userSchema";

type FormValues = {
  search: string;
};

type AdminSearchFormProps = {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
  minLength?: number;
  maxLength?: number;
};

const AdminSearchForm = ({placeholder, onSearch, minLength = 2, maxLength = 40}: AdminSearchFormProps) => {
  const schema = getAdminSearchSchema(minLength, maxLength);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => onSearch(data.search);

  useLayoutEffect(() => {
    if (Object.keys(errors).length) {
      const {errorMessages} = getFormErrorMessages(errors);

      toast.error(errorMessages[0]);
    }
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex gap-1 align-items-center contactForm" noValidate>
      <Input
        type="text"
        label="Search"
        className="py-1 search-input"
        placeholder={placeholder}
        {...register("search")}
      />
      <Button
        type="submit"
        buttonType="primary"
        className="rounded py-1 d-flex align-items-center gap-1 search-button"
        showIcon={false}
      >
        <i className="icon-search text-white" />
      </Button>
    </form>
  );
};

export default AdminSearchForm;

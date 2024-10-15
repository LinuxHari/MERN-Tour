import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import { LANGUAGES } from "../../../config/tourConfig";

const LanguageSection = () => {
  const { register } = useFormContext();
  
  return (
    <div className="row y-gap-20 justify-between">
      <div className="col-md-8">
        <div className="row y-gap-20">
          {LANGUAGES.map((language) => (
            <div className="col-4" key={language}>
              <Input
                type="checkbox"
                label={language}
                value={language}
                {...register("languages")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSection;

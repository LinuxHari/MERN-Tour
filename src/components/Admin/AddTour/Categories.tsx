import Select from "../../Shared/Select/Select";
import { CATEGORIES } from "../../../config/tourConfig";
import { useFormContext } from "react-hook-form";

const Categories = () => {
  const { setValue, register } = useFormContext();

  const handleCategory = (category: string) => {
    setValue("category", category);
  };
  return (
    <div {...register("category")}>
      <Select defaultValue="" onChange={handleCategory} className = "w-100">
      <Select.Button className="d-flex justify-content-between w-100 border p-3 rounded-12">Category :&nbsp; </Select.Button>
      <Select.Menu className="w-100">
        {CATEGORIES.map((category) => (
          <Select.Option key={category} value={category}>
            {category}
          </Select.Option>
        ))}
      </Select.Menu>
    </Select>
    </div>
  );
};

export default Categories;

import Select from "../../Shared/Select/Select";
import { categories } from "../../../config/tourConfig";
import { useFormContext } from "react-hook-form";

const Categories = () => {
  const { setValue } = useFormContext();

  const handleCategory = (category: string) => {
    setValue("category", category);
  };
  return (
    <Select defaultValue="" onChange={handleCategory} className = "w-100">
      <Select.Button className="d-flex justify-content-between w-100 border p-3 rounded-12">Category: </Select.Button>
      <Select.Menu className="w-100">
        {categories.map((category) => (
          <Select.Option key={category} value={category}>
            {category}
          </Select.Option>
        ))}
      </Select.Menu>
    </Select>
  );
};

export default Categories;

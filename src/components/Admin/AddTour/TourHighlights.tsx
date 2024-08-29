import { useFieldArray, useFormContext } from "react-hook-form"
import Input from "../../Shared/Input/Input"
import Button from "../../Shared/Button/Button"

const TourHighlights = () => {
  const {register} = useFormContext()
  const {fields, append, remove} = useFieldArray({name: "highlights" ,rules: { minLength:2 }})


  console.log(fields);
  
  return (
    <>
    {
      fields.map((field, index:number) => (
        <div key={field.id}>
        <Input type="text" label={`Hightlight-${index}`} {...register(`highlight.${index}`)}/>
        {index > 1 && <Button buttonType="secondary" className="-sm" showIcon={false} onClick ={() => remove(index)}>
          <i className="icon-delete"/>
        </Button>}
        </div>
      ))
    }
    <Button buttonType="primary" className="-md -outline-dark-1 text-dark bg-light-1" showIcon={false} onClick={() => append("hello")}>
      <i className="icon-add-button text-16 mr-10"/>Add highlight</Button>
    </>
  )
}

export default TourHighlights
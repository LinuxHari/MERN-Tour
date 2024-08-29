import { useFieldArray, useFormContext } from "react-hook-form"
import Input from "../../Shared/Input/Input"
import Button from "../../Shared/Button/Button"

const TourHighlights = () => {
  const {register} = useFormContext()
  const {fields, append, remove} = useFieldArray({name: "tourHighlights",rules:{minLength:2}})
  return (
    <>
    {
      fields.map((field, index:number) => (
        <>
        <Input type="text" key={field.id} label={`Hightlight-${index}`} {...register(`highlight-${index}`)}/>
        <Button buttonType="secondary" showIcon={false} onClick ={() => remove(index)}>
          <i className="bi bi-trash"/>
        </Button>
        </>
      ))
    }
    <Button buttonType="primary" className="-md -outline-dark-1 bg-light-1" showIcon={false} onClick={() => append("")}>
      <i className="icon-add-button text-16 mr-10"/>Add highlight</Button>
    </>
  )
}

export default TourHighlights
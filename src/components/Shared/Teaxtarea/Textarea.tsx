import { forwardRef, TextareaHTMLAttributes } from "react"

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((Props, ref) => {
  const {label, ...textareaProps} = Props
return (

      <div className="form-input">
        <textarea {...textareaProps} ref={ref}></textarea>
        <label className="lh-1 text-16">{label}</label>
      </div>
)
})

export default Textarea
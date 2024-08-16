import { TextareaHTMLAttributes } from "react"

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string
}

const Textarea = (Props: TextareaProps) => {
    const {label, ...textareaProps} = Props
  return (

        <div className="form-input">
          <textarea {...textareaProps}></textarea>
          <label className="lh-1 text-16">{label}</label>
        </div>
  )
}

export default Textarea
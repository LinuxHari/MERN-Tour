import { TextareaHTMLAttributes } from "react"

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string
}

const Textarea = (Props: TextareaProps) => {
    const {label, ...textareaProps} = Props
  return (
    <div className="col-12">
        <div className="form-input ">
          <textarea {...textareaProps}></textarea>
          <label className="lh-1 text-16 text-light-1">{label}</label>
        </div>
      </div>
  )
}

export default Textarea
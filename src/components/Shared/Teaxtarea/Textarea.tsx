import {forwardRef, TextareaHTMLAttributes} from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((Props, ref) => {
  const {label, ...textareaProps} = Props;

  return (
    <div className="form-input">
      <textarea {...textareaProps} ref={ref} />
      <label className="lh-1 text-16">{label}</label>
    </div>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;

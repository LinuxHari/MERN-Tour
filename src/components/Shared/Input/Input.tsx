import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  type: "text" | "checkbox" | "email" | "password";
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, type, ...inputProps } = props;

  if (type === "checkbox") {
    return (
      <div className="d-flex items-center">
        <div className="form-checkbox">
          <input type="checkbox" {...inputProps} ref={ref}/>
          <div className="form-checkbox__mark">
            <div className="form-checkbox__icon">
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="lh-16 ml-10">{label}</div>
      </div>
    );
  }

  return (
      <div className="form-input">
        <input {...inputProps} ref={ref}/>
        <label className="lh-1 text-16 text-light-1">{label}</label>
      </div>
  );
})

export default Input;

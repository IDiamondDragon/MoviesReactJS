import React from "react";
import { FieldHookConfig, useField, Field } from 'formik';

type BaseTextFieldProps = FieldHookConfig<string> & {
	title: string
};

export function InputField(props: BaseTextFieldProps): JSX.Element  {
  const [field, meta, helpers] = useField(props);
  const { title } = props
  const errorInput = meta.touched && meta.error ? "field__input--error" : "";

  return (
    <>
      <div className="field">
        <div className="field__title">{title}</div> 
        {/* <input          className="field__input"     wont' remove
          {...field} /> */}
        <Field 
          className={`field__input ${errorInput}`}
          {...field} 
          {...props}
			  />
        {meta.touched && meta.error  &&
        <div className="field__error-message">{meta.error}</div>}
      </div>
    </>
  );
}

export default InputField
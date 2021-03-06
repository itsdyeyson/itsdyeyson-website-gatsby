import React, { Fragment } from "react"
import clsx from "clsx"
import { Field, ErrorMessage } from "formik"

const TextAreaInput = ({
  name,
  label,
  rows,
  placeholder,
  value,
  onChange,
  noResize,
  maxLength,
}) => {
  return (
    <Field name={name} value={value} onChange={onChange}>
      {({ field, form, meta }) => {
        const inputId = `textarea-input-${name}`
        const remainingValueLength =
          maxLength && maxLength > 0 ? maxLength - field.value.length : 0
        const inputClass = clsx(
          "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white",
          {
            "border-red-500": meta.touched && meta.error,
            "resize-none": noResize,
          }
        )

        return (
          <Fragment>
            <div className="flex items-center justify-between mb-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
                htmlFor={inputId}
              >
                {label}
              </label>
              {maxLength && (
                <span className="self-end text-gray-600 text-sm">
                  {remainingValueLength} characters left
                </span>
              )}
            </div>

            <textarea
              id={inputId}
              className={inputClass}
              rows={rows}
              placeholder={placeholder}
              {...field}
            />

            <ErrorMessage
              name={field.name}
              render={msg => (
                <span className="text-red-500 text-sm italic">{msg}</span>
              )}
            />
          </Fragment>
        )
      }}
    </Field>
  )
}

TextAreaInput.defaultProps = {
  label: "",
}

export default TextAreaInput

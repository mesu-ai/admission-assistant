import React from "react";
import { ErrorMessage, Field } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { EyeIcon } from "../../assets/svgs";

const InputField = ({
  placeholder,
  name,
  type,
  icon,
  showPassword,
  setShowPassword,
  showPass = false,
}) => {
  const { t } = useTranslation();

  return (
    <div className="my-5">
      <div className="flex rounded-lg py-3 px-3 w-full border-2 border-mercury">
        <div className="flex justify-center items-center">{icon}</div>

        <Field
          className="outline-0 mx-2 w-full text-sm font-medium"
          name={name}
          placeholder={t(`${placeholder}`)}
          type={type}
        />

        {showPass && (
          <button onClick={() => setShowPassword(!showPassword)} type="button">
            <EyeIcon className="w-4 h-5" />
          </button>
        )}
      </div>

      <ErrorMessage
        className="text-start text-red-600"
        name={name}
        component="div"
      />
    </div>
  );
};

export default InputField;

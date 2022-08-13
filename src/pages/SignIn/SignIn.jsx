import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Email from "../../assets/svgs/Email";
import Eye from "../../assets/svgs/Eye";
import Lock from "../../assets/svgs/Lock";
import InputField from "../../components/atoms/InputField";
import { validationSchema } from "./validation/validationSchema";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 md:p-10 p-4 sm:p-5  border-mercury border-2 rounded-lg">
        <p className="font-bold text-4xl pb-10 text-center">
          {t("Log in to Admission Assistance")}
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="">
            <InputField
              icon={<Email className="w-4 h-5" />}
              name="email"
              type="email"
              placeholder="Enter Email"
            />
            <InputField
              icon={<Lock className="w-4 h-5 " />}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showPass
            />

            <Link to="/reset-password">
              <p className="text-end mt-5 mb-3">{t("Forgot Password?")}</p>
            </Link>

            <button
              className="w-full bg-action rounded-lg py-3 text-white font-semibold"
              type="submit"
            >
              {t("Log in")}
            </button>
          </Form>
        </Formik>
        <p className="text-center mt-5">
          {t("Don’t have an account?")}
          <Link to="/signup">
            <span className="font-semibold mx-1">{t("Join Now")}</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Email from '../../assets/svgs/Email';
import Eye from '../../assets/svgs/Eye';
import Lock from '../../assets/svgs/Lock';
import { validationSchema } from './validation/validationSchema';

const SignIn = () => {
	const { t } = useTranslation();
	const [showPassword, setShowPassword] = useState(false);

	const initialValues = {
		email: '',
		password: '',
	};

	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 md:p-10 p-4 sm:p-5  border-mercury border-2 rounded-lg">
				<p className="font-bold text-4xl pb-10 text-center">{t('Log in to C2C')}</p>

				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
					<Form className="">
						<div className="my-5">
							<div className="flex rounded-lg py-3 px-3 w-full border-2 border-mercury">
								<div className="flex justify-center items-center">
									<Email className="w-4 h-5 " />
								</div>

								<Field
									className="outline-0 mx-2 w-full text-sm font-medium"
									name="email"
									placeholder={t('Email address')}
									type="email"
								/>
							</div>

							<ErrorMessage className="text-start text-red-600" name="email" component="div" />
						</div>

						<div>
							<div className="flex rounded-lg py-3 px-3 w-full border-2 border-mercury">
								<div className="flex justify-center items-center">
									<Lock className="w-4 h-5 " />
								</div>
								<Field
									className="outline-0 mx-2 w-full text-sm font-medium"
									name="password"
									placeholder={t('Password')}
									type={showPassword ? 'text' : 'password'}
									id="password"
								/>
								<button onClick={() => setShowPassword(!showPassword)} type="button">
									<Eye className="w-4 h-5" />
								</button>
							</div>

							<ErrorMessage className="text-start text-red-600" name="password" component="div" />
						</div>

						<Link to="/reset-password">
							<p className="text-end mt-5 mb-3">{t('Forgot Password?')}</p>
						</Link>

						<button className="w-full bg-darkblue rounded-lg py-3 text-white font-semibold" type="submit">
							{t('Log in')}
						</button>
					</Form>
				</Formik>
				<p className="text-center mt-5">
					{t('Don’t have an account?')}
					<Link to="/signup">
						<span className="font-semibold mx-1">{t('Join Now')}</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignIn;

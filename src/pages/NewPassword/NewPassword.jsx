/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Eye from '../../assets/svgs/Eye';
import Lock from '../../assets/svgs/Lock';
import { validationSchema } from './validation/validationSchema';

const NewPassword = () => {
	const { t } = useTranslation();

	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const initialValues = {
		password: '',
		confirm_password: '',
	};

	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 md:p-10 p-4 sm:p-5  border-mercury border-2 rounded-lg">
				<p className="font-bold text-4xl text-center">{t('New Password')}</p>
				<p className="text-center	pt-5 pb-6">
					{t('Your password must be between 8 to 16 characters Uppercase & Lowercase letters & at least one number')}
				</p>

				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
					<Form className="space-y-5">
						<div>
							<div className="flex rounded-lg py-3 px-3 w-full border-2 border-mercury">
								<div className="flex justify-center items-center">
									<Lock className="w-4 h-5 " />
								</div>
								<Field
									className="outline-0 mx-2 w-full text-sm font-medium"
									name="password"
									placeholder={t('New Password')}
									type={showNewPassword ? 'text' : 'password'}
								/>
								<button onClick={() => setShowNewPassword(!showNewPassword)} type="button">
									<Eye className="w-4 h-5" />
								</button>
							</div>

							<ErrorMessage className="text-start text-red-600" name="password" component="div" />
						</div>
						<div>
							<div className="flex rounded-lg py-3 px-3 w-full border-2 border-mercury">
								<div className="flex justify-center items-center">
									<Lock className="w-4 h-5 " />
								</div>
								<Field
									className="outline-0 mx-2 w-full text-sm font-medium"
									name="confirm_password"
									placeholder={t('Confirm New Password')}
									type={showConfirmPassword ? 'text' : 'password'}
								/>
								<button onClick={() => setShowConfirmPassword(!showConfirmPassword)} type="button">
									<Eye className="w-4 h-5" />
								</button>
							</div>

							<ErrorMessage className="text-start text-red-600" name="confirm_password" component="div" />
						</div>

						<button className="w-full bg-darkblue rounded-lg py-3 text-white font-semibold" type="submit">
							{t('Submit')}
						</button>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default NewPassword;

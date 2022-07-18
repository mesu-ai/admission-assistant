import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import Email from '../../assets/svgs/Email';
import { validationSchema } from './validation/validationSchema';

const ResetPassword = () => {
	const { t } = useTranslation();
	const initialValues = {
		email: '',
	};

	const onSubmit = (values) => {
		console.log(values);
	};
	return (
		<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 md:p-10 p-4 sm:p-5  border-mercury border-2 rounded-lg">
				<div>
					<h2 className="pb-10 text-center text-4xl font-bold text-gray-900">{t('Reset Password')}</h2>
					<h2 className="text-center text-base text-gray-900">
						{t("Please enter your email address and we'll send you a link to reset your password.")}
					</h2>
				</div>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
					<Form>
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
							<button
								type="submit"
								className="group relative w-full flex justify-center  py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-darkblue hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 "
							>
								{t('Submit')}
							</button>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default ResetPassword;

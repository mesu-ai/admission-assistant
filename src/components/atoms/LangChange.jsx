import { useTranslation } from 'react-i18next';

const LangChange = () => {
	const { i18n } = useTranslation();

	const languages = [
		{
			code: 'en',
			name: 'English',
			// dir: 'ltr',
			country_code: 'gb',
		},
		{
			code: 'bn',
			name:'বাংলা',
			// dir: 'rtl',
			country_code: 'bn',
		},
	];

	const changeLanguageOnSelect = (lang) => {
		localStorage.setItem('language', lang);
		i18n.changeLanguage(lang);
	};

	console.log(i18n.language)
	return (
		<select
			id="country"
			name="country"
			value={i18n?.language}
			className="w-20 text-slategray font-semibold block border-none bg-white rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base "
			onChange={(e) => changeLanguageOnSelect(e.target.value)}
		>
			{languages.map((language) => (
				<option disabled={i18n?.language === language.code} key={language.code} value={language.code}>
					{language.name}
				</option>
			))}
		</select>
	);
};
export default LangChange;

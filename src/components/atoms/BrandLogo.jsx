import { Link } from 'react-router-dom';
import Logo from '../../assets/svgs/Logo';

const BrandLogo = () => {
	return (
		<Link to="/">
			<Logo className="h-16 w-16" />
		</Link>
	);
};

export default BrandLogo;

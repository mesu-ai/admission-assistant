import { Suspense } from 'react';

import Loader from '../assets/svgs/Loader';
import { COPYRIGHT_HEIGHT, FOOTER_HEIGHT, HEADER_HEIGHT } from '../config/constants';
import routeConfig from '../routes/routeConfig';
import routes from '../routes/routes';
import Footer from './footer/Footer';
import Header from './header/Header';

const BaseLayout = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<Loader className="h-10 w-10" />}>
				<main style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT + COPYRIGHT_HEIGHT}px)` }}>
					{routeConfig(routes)}
				</main>
			</Suspense>
			<Footer />
		</>
	);
};

export default BaseLayout;

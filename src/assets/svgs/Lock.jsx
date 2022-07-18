/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Lock = ({ height = 16, width = 17, className = '' }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.3173 6.08579V4.47554C10.3173 2.59079 8.78881 1.06229 6.90406 1.06229C5.01931 1.05404 3.48481 2.57504 3.47656 4.46054V4.47554V6.08579"
				stroke="#23262F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.76225 14.9372H4.0315C2.461 14.9372 1.1875 13.6645 1.1875 12.0932V8.87647C1.1875 7.30522 2.461 6.03247 4.0315 6.03247H9.76225C11.3327 6.03247 12.6062 7.30522 12.6062 8.87647V12.0932C12.6062 13.6645 11.3327 14.9372 9.76225 14.9372Z"
				stroke="#23262F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.89648 9.65186V11.3176"
				stroke="#23262F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

Lock.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default Lock;

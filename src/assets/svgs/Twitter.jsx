/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Twitter = ({ height = 17, width = 22, className = '', fill = '#000000' }) => {
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
				d="M22 2.01254C21.1819 2.35385 20.3101 2.58008 19.4012 2.68992C20.3363 2.159 21.0499 1.32469 21.3854 0.319077C20.5136 0.813385 19.5511 1.16254 18.5254 1.35738C17.6976 0.519154 16.5179 0 15.2309 0C12.7339 0 10.7236 1.92754 10.7236 4.29054C10.7236 4.63054 10.7539 4.95746 10.8281 5.26869C7.0785 5.09477 3.76063 3.38562 1.53175 0.782C1.14262 1.42408 0.914375 2.159 0.914375 2.95015C0.914375 4.43569 1.71875 5.75254 2.91775 6.51492C2.19313 6.50185 1.48225 6.30177 0.88 5.98662C0.88 5.99969 0.88 6.01669 0.88 6.03369C0.88 8.11815 2.44337 9.84954 4.4935 10.2484C4.12637 10.3438 3.72625 10.3896 3.311 10.3896C3.02225 10.3896 2.73075 10.3739 2.45712 10.3164C3.0415 12.0151 4.69975 13.2639 6.6715 13.3045C5.137 14.4461 3.18863 15.1339 1.07938 15.1339C0.7095 15.1339 0.35475 15.1182 0 15.0751C1.99787 16.3004 4.36562 17 6.919 17C15.2185 17 19.756 10.4615 19.756 4.794C19.756 4.60438 19.7491 4.42131 19.7395 4.23954C20.6346 3.63538 21.3867 2.88085 22 2.01254Z"
				fill={fill}
			/>
		</svg>
	);
};

Twitter.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default Twitter;
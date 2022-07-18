/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Facebook = ({ height = 18, width = 18, className = '', fill = '#000000' }) => {
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
				d="M15.4174 0H2.90227C1.75191 0 0.816406 0.935509 0.816406 2.08586V14.601C0.816406 15.7514 1.75191 16.6869 2.90227 16.6869H15.4174C16.5678 16.6869 17.5033 15.7514 17.5033 14.601V2.08586C17.5033 0.935509 16.5678 0 15.4174 0Z"
				fill={fill}
			/>
			<path
				d="M14.8962 8.34356H12.2889V6.2577C12.2889 5.682 12.7561 5.73623 13.3318 5.73623H14.3747V3.12891H12.2889C10.5607 3.12891 9.16008 4.52956 9.16008 6.2577V8.34356H7.07422V10.9509H9.16008V16.687H12.2889V10.9509H13.8533L14.8962 8.34356Z"
				fill="white"
			/>
		</svg>
	);
};

Facebook.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default Facebook;

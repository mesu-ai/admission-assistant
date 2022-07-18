/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Search = ({ height = 21, width = 21, className = '' }) => {
	return (
		<svg
			width={height}
			height={width}
			viewBox={`0 0 ${height} ${width}`}
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="9.7659"
				cy="9.76663"
				r="8.98856"
				stroke="#777E90"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.0176 16.4851L19.5416 20"
				stroke="#777E90"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

Search.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default Search;

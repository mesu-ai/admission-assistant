/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const YouTube = ({ height = 18, width = 18, className = '', fill = '#000000' }) => {
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
				d="M24.2086 1.67501C23.5228 0.455097 22.7786 0.230709 21.2631 0.145378C19.7493 0.0426654 15.9426 0 12.6447 0C9.34055 0 5.53227 0.0426655 4.02002 0.143798C2.50777 0.230709 1.76192 0.453517 1.06979 1.67501C0.363445 2.89334 0 4.99185 0 8.68635C0 8.68951 0 8.69109 0 8.69109C0 8.69425 0 8.69583 0 8.69583V8.69899C0 12.3777 0.363445 14.492 1.06979 15.6977C1.76192 16.9176 2.50619 17.1388 4.01844 17.2415C5.53227 17.33 9.34055 17.3822 12.6447 17.3822C15.9426 17.3822 19.7493 17.33 21.2647 17.2431C22.7801 17.1404 23.5244 16.9192 24.2102 15.6993C24.9229 14.4936 25.2832 12.3793 25.2832 8.70057C25.2832 8.70057 25.2832 8.69583 25.2832 8.69267C25.2832 8.69267 25.2832 8.68951 25.2832 8.68793C25.2832 4.99185 24.9229 2.89334 24.2086 1.67501Z"
				fill={fill}
			/>
			<path d="M9.48242 13.4324V3.95117L17.3834 8.69177L9.48242 13.4324Z" fill="white" />
		</svg>
	);
};

YouTube.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default YouTube;

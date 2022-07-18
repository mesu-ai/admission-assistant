/* eslint-disable react/jsx-props-no-spreading */
import { memo, useLayoutEffect, useRef } from 'react';
import usePrevious from '../../hooks/usePrevious';

export const SingleOTPInputComponent = ({ focus, autoFocus, ...props }) => {
	const inputRef = useRef(null);
	const prevFocus = usePrevious(!!focus);

	useLayoutEffect(() => {
		if (inputRef.current) {
			if (focus && autoFocus) {
				inputRef.current.focus();
			}
			if (focus && autoFocus && focus !== prevFocus) {
				inputRef.current.focus();
				inputRef.current.select();
			}
		}
	}, [autoFocus, focus, prevFocus]);

	return <input placeholder="-" ref={inputRef} {...props} />;
};

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;

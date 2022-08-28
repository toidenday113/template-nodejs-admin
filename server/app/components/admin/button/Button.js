import React from 'react';
import propTypes from "prop-types";

/**
 * @param label
 * @param className
 * @returns {JSX.Element}
 * @constructor
 **/
function Button({label, class_name}) {
    return (
        <>
            <button type="submit"
                    className={`button`}>
                {label}
            </button>
        </>
    );
}
Button.propTypes ={
    label: propTypes.string,
    class_name: propTypes.string
}
Button.defaultProps = {
    label: 'Button',
    class_name: ''
}
export default Button;


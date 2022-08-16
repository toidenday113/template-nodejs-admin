import React from 'react';
import propTypes from 'prop-types';

Input.props = {
    type:propTypes.string,
    name: propTypes.string,
    required: propTypes.bool,
    placeholder: propTypes.string
}

Input.defaultProps = {
    type: "text",
    name: '',
    required: false,
    placeholder:'Input',
    label: 'Input text'
}


function Input({props}) {

    return (
        <div>
            <label htmlFor={props.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {props.label}
            </label>
            <input type={props.type} id={props.name}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder={props.placeholder} required={props.required} name={props.name} value=""
            />
        </div>
    );
}

export default Input;
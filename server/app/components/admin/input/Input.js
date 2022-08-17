import React, {useState} from 'react';
import propTypes from "prop-types";

Input.propTypes = {
    name: propTypes.string.isRequired,
    type: propTypes.string,
    label: propTypes.string,
    required: propTypes.bool,
    placeholder: propTypes.string
}

Input.defaultProps = {
    type:"text",
    label: "Input text",
    required:false,
    placeholder: 'Input text'
}

/**
 * @param name
 * @param type
 * @param label
 * @param required
 * @param placeholder
 **/
function Input({
    name,
    type,
    label,
    required,
    placeholder
}) {
    const [text, setText] = useState();
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {label}
            </label>
            <input type={type} id={name}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder={placeholder} required={required} name={name} value={text}
                   onChange={e=>setText(e.target.value)}
            />
        </div>
    );
}

export default Input;
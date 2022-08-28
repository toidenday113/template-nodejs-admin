import React from 'react';
import propTypes from "prop-types";


/**
 *
 * @param children
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const Form = ({children, label}) => {
    return (
        <>
            <div className="flex-auto p-4 dark:bg-gray-800">
                <form method="post"  encType="multipart/form-data">
                    <div className="rounded-lg">
                        <div className="form-header">
                            <div className="flex justify-between items-center">
                                <h4 className="dark:text-gray-300 font-semibold">
                                    {label}
                                </h4>
                                <button type="submit"
                                        className="button">
                                    Lưu
                                </button>
                            </div>
                        </div>
                        <div className="p-4 rounded-b-lg border border-t-0 dark:border-gray-600">
                            {children}
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};


Form.propTypes = {
    children: propTypes.element.isRequired,
    label: propTypes.string
}

export default Form;

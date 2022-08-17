import React from 'react';
import propTypes from "prop-types";

const Form = (props) => {
    return (
        <>
            <div className="flex-auto p-4 dark:bg-gray-800">
                <form method="post" action="" encType="multipart/form-data">
                    <div className="rounded-lg">
                        <div className="p-4  rounded-t-lg border dark:bg-gray-700 dark:border-gray-600">
                            <div className="flex justify-between items-center">
                                <h4 className="dark:text-gray-300 font-semibold">{props.label}</h4>
                                <button type="submit"
                                        className="px-3 py-2 rounded-md text-white bg-blue-600 shadow-md hover:bg-blue-700">
                                    Lưu
                                </button>
                            </div>
                        </div>

                        {props.children}

                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;

Form.props = {
    children: propTypes.element.isRequired,
    label: propTypes.string
}
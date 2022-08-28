import React from 'react';
import {createRoot} from "react-dom/client";
import Input from "./input/Input";
import Button from "./button/Button";
import Form from "./form/Form";
import {store} from "./store/store";
import {Provider} from "react-redux";
import User from './pages/user/User';

const App = () => {
    return (
        <>
           <User/>
        </>
    );
};

const root = createRoot(document.querySelector("#app"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
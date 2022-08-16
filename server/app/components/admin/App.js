import React from 'react';
import {createRoot} from "react-dom/client";
import Input from "./input/Input";

const App = () => {
    return (
        <>
            <Input />
        </>
    );
};

export default App;

const root = createRoot(document.querySelector("#app"));
root.render(<App/>);
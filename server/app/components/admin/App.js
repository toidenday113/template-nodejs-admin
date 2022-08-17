import React from 'react';
import {createRoot} from "react-dom/client";
import Input from "./input/Input";

const App = () => {
    return (
        <>
            <Input type={"text"} required={false} label={'Họ và Tên'} placeholder={"text input"} name={"fullName"}/>
            <Input type={"number"} required={false} label={'Ngay sinh'} placeholder={"text input"} name={"ngaySinh"}/>
        </>
    );
};

const root = createRoot(document.querySelector("#app"));
root.render(<App/>);
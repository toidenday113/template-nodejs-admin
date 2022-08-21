import React from 'react';
import {createRoot} from "react-dom/client";
import Input from "./input/Input";
import Button from "./button/Button";
import Form from "./form/Form";
import {store} from "./store/store";
import {Provider} from "react-redux";

const App = () => {
    return (
        <>
           <Form label={'Them thanh vien'}>
               <Input type={"text"} required={false} label={'Họ và Tên'} placeholder={"Nhap vao ho ten"} name={"fullName"}/>
               <Button label={'Lưu'}/>
           </Form>
        </>
    );
};

const root = createRoot(document.querySelector("#app"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
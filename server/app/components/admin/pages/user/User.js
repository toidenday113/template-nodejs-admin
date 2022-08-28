import React, {useState} from 'react';
import Button from '../../button/Button';
import Form from '../../form/Form';
import Input from '../../input/Input';

const User = () => {
    const [] = useState();

    return (
        <>
            <Form label={"Them thanh vien"}>
                <Input name='first_name' key={'firsst_name'}  type='text' label={'First Name'} required={true} placeholder={'First name'}/>
                <Input name='last_name' key={'last_name'}  type='text' label={'Last Name'} required={true} placeholder={'Last name'}/>
                <Input name='full_name' key={'full_name'}  type='text' label={'Full Name'} required={true} placeholder={'Full name'}/>
                <Input name='username' key={'username'}  type='text' label={'Username'} required={true} placeholder={'Username'}/>
                <Input name='email' key={'email'}  type='email' label={'Email'} required={true} placeholder={'Email'}/>
                <div className='mt-1'>
                    <Button label='Save'/>
                </div>
            </Form>
        </>
    );
};

export default User;
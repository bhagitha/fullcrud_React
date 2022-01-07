import React, { useState,useEffect,useHistory } from 'react';
import { Button, Checkbox, Form,Table } from 'semantic-ui-react'
import axios from 'axios';


export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const [id, setID] = useState(null);

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);

let  history = useHistory();
const updateAPIData = () => {
    axios.put(`https://618a580034b4f400177c45a0.mockapi.io/FakeData/${id}`, {
        firstName,
         lastName,
         checkbox
	}).then(() => {
        history.push('/read')
    })
}

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
                
            </Form>
        </div>
    )
}
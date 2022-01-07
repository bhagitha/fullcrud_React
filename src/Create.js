import React, { useState,useHistory } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
//     const postData = () => {
//         console.log(firstName);
//         console.log(lastName);
//         console.log(checkbox);
// }

let  history = useHistory();
const postData = () => {
    axios.post(`https://618a580034b4f400177c45a0.mockapi.io/FakeData`, {
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
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
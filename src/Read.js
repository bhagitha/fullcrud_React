import React from 'react';
import { Table,Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(()=>{
        axios.get(`https://618a580034b4f400177c45a0.mockapi.io/FakeData`)
        .then((response) => {
            setAPIData(response.data);
        })
    },[])
    const getData = () => {
        axios.get(`https://618a580034b4f400177c45a0.mockapi.io/FakeData`)
            .then((getData) => {
                setAPIData(getData.data);
             })
    }
    const onDelete = (id) => {
        axios.delete(`https://618a580034b4f400177c45a0.mockapi.io/FakeData/${id}`)
     .then(() => {
        getData();
    })
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* <Table.Row>
                        <Table.Cell>Nishant</Table.Cell>
                        <Table.Cell>Kumar</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row> */}
                        {APIData.map((data) => {
                         return (
                         <Table.Row>
                          <Table.Cell>{data.firstName}</Table.Cell>
                           <Table.Cell>{data.lastName}</Table.Cell>
                           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                           <Table.Cell>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell> 
                            </Table.Row>
                            
                         )})}     
                                     
                </Table.Body>
            </Table>
        </div>
    )
}

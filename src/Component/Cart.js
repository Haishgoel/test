import React, {useEffect, useState} from 'react';
import { Table, } from 'antd';

const {Column} = Table;

const users = [
    {key: '1', Subject: 'Python', Date: 'Mon May 03 2021', Time: '04.00 pm - 05.00 pm', Availability: '10 seats available',},
    {key: '2', Subject: 'Python', Date: 'Mon May 03 2021', Time: '04.00 pm - 05.00 pm', Availability: '10 seats available',},
    {key: '3', Subject: 'Python', Date: 'Mon May 03 2021', Time: '04.00 pm - 05.00 pm', Availability: '10 seats available',},
 ];
 var localstoragedata = [];

 
const Cart = () => {

    
    const [storedNames, setStoredNames] = useState([])
    useEffect(() => {
        
        var storedNames1 = JSON.parse(localStorage.getItem('names')); 
        localstoragedata.push(storedNames1)

        localStorage.setItem('storedNames1',JSON.stringify(localstoragedata))
        console.log(storedNames1)
        setStoredNames(storedNames1)                        
     })
     console.log(storedNames)
    return(
        <>
        <h1>Cart</h1>
        <Table dataSource={users}>
    
           <Column title="Subject" dataIndex="Subject" key="firstName" />
           <Column title="Date" dataIndex="Date" key="lastName" />    
           <Column title="Time" dataIndex="Time" key="age" />
           <Column title="Availability" dataIndex="Availability" key="address" /> 
        </Table>
        </>

    )
}

export default Cart
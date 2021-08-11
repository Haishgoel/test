import React, {useEffect} from 'react'
import { Table, Tag, Space, Button } from 'antd';
import 'antd/dist/antd.css'; 
import {ShoppingCartOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';


const { Column, ColumnGroup } = Table;

const users = [
   {key: '1', Subject: 'Python', Date: 'Mon May 03 2021', Time: '04.00 pm - 05.00 pm', Availability: '10 seats available',},
   {key: '2', Subject: 'Python', Date: 'Mon May 03 2021', Time: '04.00 pm - 05.00 pm', Availability: '10 seats available',},
   {key: '3', Subject: 'Python', Date: 'Mon May 03 2021', Time: '04.00 pm - 05.00 pm', Availability: '10 seats available',},
   {key: '4', Subject: 'Python', Date: 'Mon May 03 2021', Time: '04.00 pm - 05.00 pm', Availability: '10 seats available',},
   {key: '5', Subject: 'Python', Date: 'Mon May 03 2021', Time: '04.00 pm - 05.00 pm', Availability: '10 seats available',},
   {key: '6', Subject: 'Python', Date: 'Mon May 03 2021', Time: '04.00 pm - 05.00 pm', Availability: '10 seats available',},
   {key: '7', Subject: 'Python', Date: 'Mon May 03 2021', Time: '04.00 pm - 05.00 pm', Availability: '10 seats available',},
];

var localstoragedata = [];

var allUsers = [];

// Populate users array

const TableData = () => {
  const history = useHistory();
  const handleClick = () => history.push('./Cart');

const booknow = (record) => {
  console.log(record)
  localstoragedata.push(record)
  localStorage.setItem("names", JSON.stringify(localstoragedata))
}

  
useEffect(() => {
  for(var key in users) {
    allUsers.push(users[key]);
}
console.log(allUsers)
})
  
    return(
        <>
        
        <div  >
        <div >
        <Button onClick={handleClick}  type="primary"  icon={<ShoppingCartOutlined/> }> 
                </Button>
        </div>

        <div >
        <h1>Claim Your Free Trial Class</h1>
        <h1>Class Schedule</h1>
        </div>        
        <Table dataSource={users}>
    
      <Column title="Subject" dataIndex="Subject" key="firstName" />
      <Column title="Date" dataIndex="Date" key="lastName" />    
      <Column title="Time" dataIndex="Time" key="age" />
      <Column title="Availability" dataIndex="Availability" key="address" />  
      <Column
      key="action"
      render={(text, record) => (
        <Space size="middle">          
          <Button onClick={()=>booknow(record)}>Book Now</Button>
        </Space>
      )}
    />
    
  </Table>,
  </div>
</>
)
}

export default TableData
import { useEffect, useState } from 'react';
import './widgetLg.css';
import axios from 'axios';
import {format} from 'timeago.js';

export default function WidgetLg() {
  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:5000/api/orders',
        headers: {
          token: 'Bearer ' + TOKEN
        }
      });
      setOrders(res.data);
    }
    getOrders();
  },[]);
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {orders.map(order => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">
                <img 
                  src="https://data.whicdn.com/images/322027365/original.jpg?t=1541703413" 
                  alt="" 
                  className="widgetLgImg" 
                />
                <span className="widgetLgName">{order.userId}</span>
              </td>
              <td className="widgetLgDate">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">{order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status}/>
              </td>
            </tr> 
          ))} 
        </tbody>
      </table>
    </div>
  )
}

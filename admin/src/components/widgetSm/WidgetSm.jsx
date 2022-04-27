import { Visibility } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import { userRequest } from '../../redux/requestMethod';
import './widgetSm.css';
import axios from 'axios';

export default function WidgetSm() {
  const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        // const res = await userRequest.get("users/?new=true");
        const res = await axios({
          method: 'get',
          url: 'http://localhost:5000/api/users/?new=true',
          headers: {
            token: 'Bearer ' + TOKEN
          }
        });
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map(user => (
          <li className="widgetSmListItem" key={user._id}>
          <img 
            src={
              users.img ||
              "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg"} 
            alt="" 
            className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        ))}
        
      </ul>
    </div>
  )
}

import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { useMemo, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export default function Home() {
  const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]);

  useEffect(() => {
    const getStats = async () => {
      try{
        const res = await axios({
          method: 'get',
          url: 'http://localhost:5000/api/users/stats',
          headers: {
            token: 'Bearer ' + TOKEN
          }
        });
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "active": item.total },
          ])
        );
      }catch{}
    };
    getStats();
  },[MONTHS]);
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart 
        data={userStats} 
        title="User Analytics" 
        grid 
        dataKey="active"
      />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

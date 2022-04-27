import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './featuredInfo.css';
import axios from 'axios';

export default function FeaturedInfo() {
  const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try{
        const res = await axios({
          method: 'get',
          url: 'http://localhost:5000/api/orders/income',
          headers: {
            token: 'Bearer ' + TOKEN
          }
        });
        setIncome(res.data);
        const thisMonth = res.data[0].total;
        const prevMonth = res.data[1].total;
        setPerc((thisMonth-prevMonth)/prevMonth*100);
      }catch{} 
    };
    getIncome();
  }, []);
  console.log('income : ',income);
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[0].total}</span>
          <span className="featuredMoneyRate">
            {Math.floor(perc)}%
            {perc < 0 ?(<ArrowDownward className='featuredIcon negative'/>) : (<ArrowUpward className='featuredIcon'/>)}
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className='featuredIcon negative'/>
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            +11.4 <ArrowUpward className='featuredIcon'/>
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  )
}

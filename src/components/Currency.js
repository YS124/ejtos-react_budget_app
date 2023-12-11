import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}
	

  return (
		<div className='alert alert-secondary' style={{backgroundColor: '#76f500'}}>
        <label style={{ backgroundColor:'#76f500', color:'white'}}> Currency
        (<select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{  backgroundColor:'#76f500', color:'white', border: 0 }} >
        <option style={{color:'black'}} value="£">£ Pound</option>
        <option style={{color:'black'}} value="$">$ Dollar</option>
        <option style={{color:'black'}} value="€">€ Euro</option>
        <option style={{color:'black'}}  value="₹">₹ Ruppee</option>
      </select>)
      </label>
    </div>
	);
};

export default Currency;

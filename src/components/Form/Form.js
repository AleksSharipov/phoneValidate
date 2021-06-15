import React from 'react';
import {useState} from 'react';
import { connect } from 'react-redux';
import { addPhone } from '../../actions';
import { config } from '../../utils/config';

import {db} from '../../firebase';

const Form = ({ dispatch }) => {

  let input;
  const [selectValue, setSelectValue] = useState('7');
  const [phoneInputValue, setPhoneInputValue] = useState('');

  function selectVal(e) {
    setSelectValue(e.target.value);
  }

  function inputVal(e) {
    const val = e.target.value.replace(/\D/g,'').substr(0,10);
    setPhoneInputValue(val);
  }

  function sendForm(e){
    e.preventDefault();
    const fullPhones = `+${selectValue} ${phoneInputValue}`
    
    if(phoneInputValue.trim().length >= 3){
      db.collection('number').add({
        phone: fullPhones
      })
      .then(() => {
        dispatch(addPhone(fullPhones))
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
      setPhoneInputValue('');
    }
  }

  const flag = () =>{
    let flag;
    config.map(c=>{
      // console.log(c.flag)
      if(selectValue == c.code){
         flag  = c.flag;
      }
    })
    return flag;
  }

  return (
    <form className="telephon" onSubmit={sendForm}>
        <div>
          <select value={selectValue} onChange={selectVal} className={`telephon__select ${flag()}`}>
            {
              config.map(reg =>{
               
                return <option key={reg.country} value={reg.code}  >+{reg.code}</option>
              })
            }
          </select>
          <input 
            type="text" 
            className="telephon__input"
            onChange={inputVal}
            value ={phoneInputValue}
            ref={node => input = node}
            minLength="3" 
            maxLength="10" 
          ></input>
        </div>
        <button className="telephon__btn">Отправить</button>
      </form>
  )
}

export default connect()(Form)
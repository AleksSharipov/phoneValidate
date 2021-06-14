import React from 'react';
import {useState} from 'react';
import { connect } from 'react-redux';
import { addPhone } from '../../actions';

import {db} from '../../firebase';

const Form = ({ dispatch }) => {

  let input;

  const config = [
    {code:7, country:'Россия'},
    {code:53, country:'Куба'},
    {code:597, country:'Суринам'},
  ];

  const [selectValue, setSelectValue] = useState('7');
  const [phoneInputValue, setPhoneInputValue] = useState('');
  // const [fullPhone, setFullPhone] = useState([]);

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
    dispatch(addPhone(fullPhones))
    if(phoneInputValue !==''){
      ;
      
      db.collection('number').add({
        phone: fullPhones
      })
      .then((docRef) => {
        
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
      setPhoneInputValue('');
    }
  }

  return (
    <form className="telephon" onSubmit={sendForm}>
        <div>
          <select value={selectValue} onChange={selectVal} className="telephon__select">
            {
              config.map(reg =>{
                return <option key={reg.country} value={reg.code}  className="telephon__select_ru">+{reg.code}</option>
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
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Number from './Number';

import {db} from '../../firebase';

const Table = ({ phones }) => {

  const [phoneNumber, setPhoneNumber] = useState([])

  useEffect(()=>{
    db.collection('number')
    .get()
    .then(querySnapshot => {
      const phones = querySnapshot.docs.map(doc =>({
        id:doc.id,
        ...doc.data()
      }));
      setPhoneNumber(phones)
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }, []);
  
  return (
    <section className="table">
        <p className="table__text">Телефон:</p>
        <ul>
          {
            phoneNumber.map(p=>{
              return <li key={p.id} className="table__text">{p.phone}</li>
            })
          }
          {phones.map(phone =>
            <Number
              key={phone.id}
              {...phone}
            />
          )}
        </ul>
      </section> 
  )
}

Table.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default Table;
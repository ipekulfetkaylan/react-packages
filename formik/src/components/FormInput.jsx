
import React from 'react';
import './formInput.css'

const FormInput = (props) => {
    const { label,errorMessage,touched, ...inputs}= props
  return (
    <div className='form-input'>
      <label>{label}</label>
      <input  {...inputs} className={`${touched && errorMessage && 'input-error'}`}/>
      <span>{touched && errorMessage}</span>
    </div>
  )
}

export default FormInput

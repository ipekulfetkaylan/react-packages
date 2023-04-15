import './formInput.css';
import { useField } from 'formik';

const FormikComponent = (props) => {
    const { label,errorMessage,touched, ...inputs}= props;
    const [field, meta]= useField(props)
    console.log(field, meta);
  return (
    <div className='form-input'>
      <label>{label}</label>
      <input  {...inputs} {...field} className={`${meta.touched && meta.error && 'input-error'}`}/>
      <span>{meta.touched && meta.error}</span>
    </div>
  )
}

export default FormikComponent

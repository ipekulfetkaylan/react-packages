import './App.css';
import FormInput from './components/FormInput';
import { useFormik} from 'formik'
import { inputSchema } from './schemas';


function App() {
  const onSubmit=async (values, actions)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000));
    actions.resetForm()
  }
  

 const {values, handleSubmit, handleBlur, handleChange, errors, touched, isSubmitting}= useFormik({
  initialValues:{
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  },
  validationSchema:inputSchema,
  onSubmit
 })
  

  const inputs=[
    {
      id:"1",
      name:"username",
      label:"username",
      type:"text",
      placeholder:"Enter your username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username
    },
    {
      id:"2",
      name:"email",
      label:"email",
      type:"text",
      placeholder:"Enter your email",
      value: values.email,
      errorMessage: errors.email,
      touched:touched.email
    },
    {
      id:"3",
      name:"password",
      label:"password",
      type:"password",
      placeholder:"Enter your password",
      value:values.password,
      errorMessage: errors.password,
      touched: touched.password
    },
    {
      id:"4",
      name:"confirmPassword",
      label:"confirm password",
      type:"password",
      placeholder:"Enter your confirm password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword
    },
  ]


 
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>{
          return <FormInput onBlur={handleBlur} onChange={handleChange} key={input.id} {...input}></FormInput>
        })}
        <button type='submit' disabled={isSubmitting}>Submit</button>
      </form>
      
     
    </div>
  );
}

export default App;

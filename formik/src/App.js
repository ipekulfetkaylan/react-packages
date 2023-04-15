import './App.css';
// import FormInput from './components/FormInput';
// import {useFormik} from 'formik'
import { Form, Formik} from 'formik'
import { inputSchema } from './schemas';
import FormikComponent from './components/FormikComponent';

////FORMİK HOOK
/*function App() {
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
*/


///FORMİK COMPONENT
function App() {
  const inputs=[
    {
      id:"1",
      name:"username",
      label:"username",
      type:"text",
      placeholder:"Enter your username",
    },
    {
      id:"2",
      name:"email",
      label:"email",
      type:"text",
      placeholder:"Enter your email",
    },
    {
      id:"3",
      name:"password",
      label:"password",
      type:"password",
      placeholder:"Enter your password",
    },
    {
      id:"4",
      name:"confirmPassword",
      label:"confirm password",
      type:"password",
      placeholder:"Enter your confirm password",
    },
  ]


 
  return (
    <div className="App">
      <Formik 
          validationSchema={inputSchema}
          initialValues={{
          username:"",
          email:"",
          password:"",
          confirmPassword:"",
        }}
        onSubmit={(values, {resetForm, setSubmitting})=>{
          setSubmitting(true)
          setTimeout(()=>{
            resetForm()
            setSubmitting(false)
          },2000)
        }}
        >
          {(props)=>(
            <Form >
              <h1>Register</h1>
              {inputs.map((input)=>{
                return <FormikComponent key={input.id} {...input}/>
              })}
              <button type='submit' disabled={props.isSubmitting} >{props.isSubmitting ? "Submitting... ": "Submit"}</button>

            </Form>
          )}
        
      </Formik>
     
      
     
    </div>
  );
}

export default App;

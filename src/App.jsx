
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [name ,setName] = useState("")
  const [email , setEmail] = useState(" ")
  // const [mobile , setMobile]=useState(" ")
  const [Password , setPassword]= useState(" ")
  
  //conditionally render
  const [isusername,setisusername]=useState(true)
  
  const [ispassword,setispassword]=useState(true)
  const [isemail,setisemail]=useState(true)



  // for validation
  const validate = (e)=>{
    const {name ,value}= e.target
    console.log(name);
    console.log(value);

    //regular expression
    // value.match('/^[a-zA-z]*')
  if(!!value.match("^[A-Za-z][A-Za-z0-9_]{5,29}$")){
    if(name=='username')
    {
      setName(value)
      setisusername(true)
    }
   
  }else{
    if(name=='username'){
      setName(value)
      setisusername(false)
    }

  }

  if(!!value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/)){
    if(name=='password')
    {
      setPassword(value)
      setispassword(true)
    }
   
  }else{
    if(name=='password'){
      setPassword(value)
      setispassword(false)
    } 

  }
  if(!!value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)){
    if(name=='email'){
      setEmail(value)
      setisemail(true)
    }
  }
  else{
    if(name=='email'){
      setEmail(value)
      setisemail(false)
    }
  }

  }
  const handleClick=()=>{
    alert('REGISTERED SUCCESSFULLY')
  }
  



  return (
    <>
      <div className='register'>
       <div className='reg'>
        <h1>REGISTRATION FORM</h1>
        <form action="" className='mt-5'>      
        <TextField id="outlined-basic" name='username' label="User Name" variant="outlined" className='w-100' value={name || ""} onChange={(e)=>validate(e)} />
       {!isusername && <p className='text-danger'> Input characters must be 8  with letters and numbers only</p>}
        <TextField id="outlined-basic"  name="email" label=" Enter your Email" type='email' variant="outlined"  className='w-100 mt-3' value={email ||""} onChange={(e)=>validate(e)} /> 
        {!isemail && <p className='text-danger'> Error! you have entered invalid email.</p>}
        {/* <TextField id="outlined-basic"  name='phone' label="Enter your Phone number" variant="outlined"  className='w-100 mt-3' value={mobile} onChange={(e)=>validate(e)} />
        <p className='text-danger'> Invalid Input</p> */}
        <TextField id="outlined-basic" name='password' label="Password" variant="outlined"  className='w-100 mt-3' value={Password || ""} onChange={(e)=>validate(e)} />
        {! ispassword && <p className='text-danger'>"Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."</p>}
        <Button className='w-100 mt-3' variant="contained" onClick={handleClick}  disabled={name && Password && email?false:true}>Register</Button>  

          
        </form>

       </div>

      </div>
    </>
  )
}

export default App



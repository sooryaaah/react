import React from 'react'
import { useState } from 'react'

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if(name.trim() === "" || email.trim() === "" || password.trim() === ""){
          setAlert("Please fill out all the fields");
          return;

        }
        setAlert("")



        const data = {
            name,
            email,
            password,
        }
        console.log("data: ",data)
    }
    


    
  return (
    <div>

       <section className='flex items-center justify-center min-h-screen bg-gray-100'>
  <div className='bg-white w-[900px] h-[500px] rounded-2xl shadow-2xl shadow-red-500/50 flex overflow-hidden'>

    {/* Gradient Panel - LEFT */}
    <div className='bg-gradient-to-b from-orange-500 to-pink-500 w-1/2 h-full flex flex-col justify-center items-center text-white p-8'>
      <h2 className='text-2xl font-bold mb-4'>Glad to see you!</h2>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    {/* Form Panel - RIGHT */}
    <div className='w-1/2 p-10'>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className='w-full p-2 border rounded mb-4 shadow placeholder-pink-600' />   
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='E-mail' className='w-full p-2 border rounded mb-4 shadow placeholder-pink-600' /> 
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='w-full p-2 border rounded mb-4 shadow placeholder-pink-600' />
       
       {alert && (
        <div className='bg-red-100 text-red-700 px-4 py-2 rounded mb-4'>{alert}</div>
       )}
       
       
        <label className='text-pink-600 text-sm'>
          <input className='mr-2' type="checkbox" />I agree to the <a className='text-orange-500' href="#">terms and conditions</a>
        </label>
        <button className='block my-5 mx-auto bg-pink-500 text-white px-4 py-2 rounded'>CREATE ACCOUNT</button>
        <p className='text-center text-sm'>Already have an account? <a className='text-blue-500' href="#">Sign In</a></p>
      </form>
    </div>

  </div>
</section>


        



    </div>
  )
}

export default  ContactForm
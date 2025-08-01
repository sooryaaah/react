import React from 'react'

const ContactForm = () => {
  return (
    <div>

        <section className='flex items-center justify-center min-h-screen bg-gray-100'>
            
            <div className='bg-white p-[100px] border border-none rounded-2xl shadow-2xl shadow-red-500/50 flex'>

            <div className='w-1/2'>
            <form>
                <input type="text" placeholder='Name' className='w-3/4 p-2 border rounded mb-4 shadow-lg shadow-red-500/50 placeholder-pink-600' />   
                <input type="text" placeholder='E-mail' className='w-3/4 p-2 border rounded mb-4 shadow-lg shadow-red-500/50 placeholder-pink-600' /> 
                <input type="text" placeholder='Password' className='w-3/4 p-2 border rounded mb-4 shadow-lg shadow-red-500/50 placeholder-pink-600' />
                <label className='text-pink-600'> <br />
                    <input className='ml-11' type="checkbox" />I agree to the <a className='text-orange-500' href="#"> terms and conditions</a>
                </label>
            </form>
                        <button className='my-5 ml-[100px]'>CREATE ACCOUNT</button>
            <p>Already have an account? <a href="#">Sign In</a></p>
            </div>



            <div className='bg-gradient-to-b from-orange-500 to-pink-500 w-1/2 min-h'>
                <h2>Glad to see you!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>


            </div>

            

        </section>

        



    </div>
  )
}

export default  ContactForm
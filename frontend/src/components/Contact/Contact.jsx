import React from 'react'
import {motion} from "framer-motion"
const Contact = () => {
  const formHandler=(e)=>{
       e.preventDefault()
  }
  return <section className='contact'>
    <motion.form onSubmit={formHandler}>
      <h2>Contact Us</h2>
      <input type='text' placeholder='Enter Name'/>
      <input type='email' placeholder='Enter Email' />
      <textarea placeholder='Enter Feedback...' cols={30} rows={10}/>
      <button type='submit'>Send</button>
    </motion.form>

  </section>
}

export default Contact
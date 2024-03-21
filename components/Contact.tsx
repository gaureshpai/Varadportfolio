import React from 'react'
import '@/public/styles/Contact.css'

const Contact = () => {
  return (
    <div className="formcarry-container">
      <div className='contact-heading'>
        <h2 className='contact-heading'>Contact Details</h2>
      </div>
      <form action="#" method="POST" className="formcarry-form">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="fullName" required />
        <label htmlFor="email">Your Email Address</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          defaultValue={""}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
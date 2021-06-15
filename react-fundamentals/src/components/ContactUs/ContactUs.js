import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactUs.css'


function ContactForm() {
  const [state, handleSubmit] = useForm("mwkabbzj");
  if (state.succeeded) {
      return <h1>Thanks for reaching out! We will contact you soon!</h1>;
  }
  return (
<div >
      <form className= 'contactBox' onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>

    </div>

  );
}


export default ContactForm;
import React, { useState } from 'react'
import "../assets/styles/contact.scss"
import 'aos/dist/aos.css'
import { db } from "../service/firebase"
import { doc, addDoc, collection } from "firebase/firestore";
import ScrollToTop from '../components/ScrollTop';
import { border } from '@mui/material/node_modules/@mui/system';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name == "" || email == "" || subject == "" || message == "") {
        alert("Please fill all the empty box")
      } else {
        const docRef = collection(db, "contacts")
        await addDoc(docRef, {
          name: name,
          email: email,
          subject: subject,
          message: message,
        })
      }
    } catch (error) {
      alert(error)
    }
  };
  return (

    <div className='contact'>
      <div className='title'>
        <div className='text'>Contact me</div>
        <p>Have a question or want to work together?</p>
      </div>
      <div data-aos="fade-up">
        <form onSubmit={handleSubmit}>

          <input className="item-style" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
          <input className="item-style" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
          <input className="item-style" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} ></input>
          <input className="item-style message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} ></input>
          <button type='submit' >Submit</button>
        </form>
      </div>
      <ScrollToTop />
    </div>


  )
}
export default Contact;
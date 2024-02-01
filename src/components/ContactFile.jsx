import React, { useState } from 'react'
import '../about.css'
const ContactFile = () => {
  const[FirstName,SetFirstName]=useState();
  const[Lastname,setlastname]=useState();
  const[email,Setemail]=useState();
  const[textbox,Settext]=useState();
  const handleFirstNameChange = (e) => {
    const newValue = e.target.value;
    SetFirstName(newValue);
    
  };
  const handleLastname=(e)=>{
    const newvalue=e.target.value;
    setlastname(newvalue)
  }
  function handleemail(e){
    const newvalue=e.target.value;
    Setemail(newvalue)
  }
  function handletextValue(e){
    const newtext=e.target.value;
    Settext(newtext)
  }
  function SaveName(e){
    e.preventDefault();
    localStorage.setItem("firstname", FirstName);
    localStorage.setItem("lastname", Lastname);
    localStorage.setItem("email",email);
    localStorage.setItem("textbox",textbox)
     SetFirstName("");
     setlastname("");
     Setemail("");
     Settext(" ");
  }
  // function getdata(e) {
  //   e.preventDefault();
  //   let fname = localStorage.getItem("firstname");
  //   let lname = localStorage.getItem("lastname");
  //   let myemail = localStorage.getItem("email");
  //   let pass = localStorage.getItem("password");
  //   alert(`My first name: ${fname}, last name: ${lname}, email: ${myemail}, password: ${pass}`);
  // }
  
  
  return (
    <div>
     <form className='formBox'>
      <label className='labeltext'>
        First Name:
        <input className='inputText' type="text" name="firstName" value={FirstName} onChange={ handleFirstNameChange} required />
      </label>
      <br />
      <label  className='labeltext'> 
        Last Name:
        <input className='inputText' type="text" name="lastName" value={Lastname} onChange={handleLastname}  required />
      </label >
      <br />
      <label  className='labeltext'>
        Email:
        <input className='inputText' type="email" name="email" value={email} onChange={handleemail}  required />
      </label>
     
      <br />
      <label htmlFor="">Type any Message</label>
      <br />
      <textarea style={{resize:'none'}} name="" value={textbox} id="" cols="51" rows="5" onChange={handletextValue}></textarea>
    <br />
      <button className='buttonBox' type="submit" onClick={SaveName}>Submit</button>
    {/* <button className='buttonBox' onClick={getdata}>Get Data</button> */}
    </form>
    </div>
  )
}

export default ContactFile

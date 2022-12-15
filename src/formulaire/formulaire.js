import React, { useState,useEffect} from "react";
import { envoiEmail } from "../service/service";
import 'bootstrap/dist/css/bootstrap.min.css';
import './formulaire.css';
const Formulaire=()=>{
  
  const [valueTo, setTo] = useState('');
  const [valueObject, setObject] = useState('');
  const [valueMessage, setMessage] = useState('');
  

  
    const sendEmail = (e) => {
      e.preventDefault();
      
      envoiEmail({
        to: valueTo,
        object:valueObject,
        message:valueMessage,
    }).then(response => {
       console.log(response.status)
        if(response.status === 200) {
          setTo('');
          setObject('');
          setMessage('');
        }
    })
    
    };
    useEffect(()=>{ 
      setTo('');
      setObject('');
      setMessage('');
  },[]);
    return(
      
      <div className=" contact-wrap card bg-white shadow-lg rounded-lg position-relative border- ">
      <form  onSubmit={sendEmail}>
      
      <div className="form-group mb-3">
      <label className="">To Email</label>
      <input type="email" className="form-control style2-input bg-color-none "  onChange={(e)=>setTo(e.target.value)} value={valueTo} name="user_name"  required/>
        </div>        
  
        <div className="form-group mb-3">
      <label className="">object</label>
      <input type="text" className="form-control style2-input bg-color-none "   onChange={(e)=>setObject(e.target.value)} value={valueObject}  name="Object"  required/>
        </div>
      
        
      <div className="form-group mb-3">
      <label>Message</label>
      <textarea name="message"   onChange={(e)=>setMessage(e.target.value)} value={valueMessage} className="w-100 h125 style2-textarea p-3 form-control"  required/>
      </div>
      <div className="form-group">
      <button
          type="submit"
          className="btn btn-primary"
          >
          Envoyer mon Message
          </button>
      </div>
 
      
      
     
      
      </form>
       </div>
    
    )
}
export default Formulaire;
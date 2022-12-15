import React, { FunctionComponent } from "react";
import Formulaire from './formulaire/formulaire';
import 'bootstrap/dist/css/bootstrap.min.css';
const Formul:FunctionComponent =()=> {
    return(
        <div >
            <h1 className="text-center">Send Email</h1>
            <div className="container">
            <div className="row justify-content-center">
            <div className='col s3 m2'></div> 
            <div className='col-lg-10'>
            <Formulaire/>    
            </div> 
            <div className='col s3 m2'></div> 
             
            </div>
            </div>
        </div>
    )
}
export default Formul;
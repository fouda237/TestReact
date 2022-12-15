import axios from "axios";
import {ICreateEmail}from '../type/type';
const envoiEmail =async({to,object,message}:ICreateEmail)=>{
     axios.post('http://localhost:8081/email',{
            to,
            object,
            message,
        },
        ).then((response) => alert(`email envoyée ! ${response}`))
        .catch((error) => alert(`non envoyée : ${error}`));
}
export {envoiEmail};
import axios,{ AxiosError} from "axios";
import { ICreateEmail } from "../type/type";
const envoiEmail =async({to,object,message}:ICreateEmail)=>{
    try{
        return await axios.post(`${process.env.REACT_APP_API_URL}/email`,{
                        to,
                        object,
                        message,
        }  
);
    }catch(e){
        const error = e as AxiosError
        if (error){
            alert(`non envoyée `)
           console.log("error d'email")
        }
    }
}
export {envoiEmail};
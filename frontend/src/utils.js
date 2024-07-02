

export const API_URL='https://task-manager-mern-weld.vercel.app/';

import { toast } from "react-toastify";


export const notify=(message,type)=>{
    toast[type](message);
}

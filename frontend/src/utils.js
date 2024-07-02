

export const API_URL='https://taskmanagerapi-navy.vercel.app';

import { toast } from "react-toastify";


export const notify=(message,type)=>{
    toast[type](message);
}

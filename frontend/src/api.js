import { API_URL } from "./utils";


export const CreateTask=async (taskobj)=>{
    const url=`${API_URL}/tasks`;
    const options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        mode: 'cors', // Ensure that 'cors' mode is set
        body:JSON.stringify(taskobj)
    };
    try {
        const result=await fetch(url,options)
        const data=await result.json();
        return data;
    } catch (error) {
        return error
    }
}
export const GetAllTask=async ()=>{
    const url=`${API_URL}/tasks`;
    const options={
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        },
        mode: 'cors', // Ensure that 'cors' mode is set
        
    };
    try {
        const result=await fetch(url,options)
        const data=await result.json();
        return data;
    } catch (error) {
        return error
    }
}
export const DeleteTask=async (id)=>{
    const url=`${API_URL}/tasks/${id}`;
    const options={
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        mode: 'cors', // Ensure that 'cors' mode is set
        
    };
    try {
        const result=await fetch(url,options)
        const data=await result.json();
        return data;
    } catch (error) {
        return error
    }
}


export const UpdateTask=async (id,reqbody)=>{
    const url=`${API_URL}/tasks/${id}`;
    const options={
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        mode: 'cors', // Ensure that 'cors' mode is set
        body:JSON.stringify(reqbody)
    };
    try {
        const result=await fetch(url,options)
        const data=await result.json();
        console.log(data)
        return data;
    } catch (error) {
        return error
    }
}

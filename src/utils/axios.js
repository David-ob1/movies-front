import axios from "axios"

 export const sendDto = async (objectDto,url)=>{

    try{
    console.log(objectDto)
    const response = await axios.post(url,objectDto)
    console.log(response)
    return response
    }catch(error){

        alert("datos ivalidos")
        console.log(error)
    }


}
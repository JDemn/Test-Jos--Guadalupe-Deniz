import { useState } from "react";
import data from "../data/mail-data";


export const useGetData = () => {
    const [datos, setdatos] = useState({});
    
    const daata =()=>{
        data.map((elements)=> console.log(setdatos(...elements.name)));
        return data;
    } 
    
    return {
        datos,
        daata
    }
}

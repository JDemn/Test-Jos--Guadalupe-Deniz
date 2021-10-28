import data from "../data/mail-data"

export const useGetData = () => {
    const daata =()=>{
        return data.map((elements)=> console.log(elements));
    } 
    
    return {
        daata
    }
}
